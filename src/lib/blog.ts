import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { format } from 'date-fns';

// Mark this module as server-only
import 'server-only';

const postsDirectory = path.join(process.cwd(), 'src', 'content', 'blog');

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  content: string;
  author: string;
  readingTime: string;
  category: string;
  keywords?: string;
};

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    // Ensure the blog directory exists
    await fs.mkdir(postsDirectory, { recursive: true });

    // Get file names under /content/blog
    const fileNames = await fs.readdir(postsDirectory);

    const allPosts = await Promise.all(
      fileNames
        .filter(fileName => fileName.endsWith('.md'))
        .map(async fileName => {
          const slug = fileName.replace(/\.md$/, '');
          try {
            const post = await getPostBySlug(slug);
            return post;
          } catch (error) {
            console.error(`Error processing post ${slug}:`, error);
            return null;
          }
        })
    );

    // Filter out any null posts and sort by date
    const validPosts = allPosts.filter((post): post is BlogPost => post !== null);

    return validPosts.sort((a, b) => (
      new Date(b.date).getTime() - new Date(a.date).getTime()
    ));
  } catch (error) {
    console.error('Error getting blog posts:', error);
    return []; // Return empty array if there's an error
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    if (!data.title || !data.date || !data.excerpt || !data.coverImage) {
      throw new Error(`Invalid frontmatter in post ${slug}`);
    }

    return {
      slug,
      title: data.title,
      date: data.date === "YYYY-MM-DD" ? format(new Date(), 'MMMM d, yyyy') : format(new Date(data.date.replace(/['"]/g, '')), 'MMMM d, yyyy'),
      excerpt: data.excerpt,
      coverImage: data.coverImage,
      content,
      author: data.author || 'Anonymous',
      readingTime: data.readingTime || '5 min read',
      category: data.category || 'Uncategorized',
      keywords: data.keywords,
    };
  } catch (error) {
    console.error(`Error getting blog post ${slug}:`, error);
    throw error;
  }
}
