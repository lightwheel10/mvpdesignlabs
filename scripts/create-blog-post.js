const fs = require('fs');
const path = require('path');
const readline = require('readline');
const matter = require('gray-matter');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to convert title to slug
function titleToSlug(title) {
  if (!title) return '';
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Function to format content with proper frontmatter
function formatContent(content) {
  // Check if content already has frontmatter delimiters
  if (!content.startsWith('---\n')) {
    // Add frontmatter delimiters if they're missing
    content = '---\n' + content;
  }
  
  // Find the end of the frontmatter
  const secondDelimiterIndex = content.indexOf('---\n', 4);
  if (secondDelimiterIndex === -1) {
    // Add closing delimiter if it's missing
    content = content + '\n---\n';
  }

  return content;
}

// Function to extract frontmatter and content
function extractBlogParts(content) {
  try {
    const formattedContent = formatContent(content);
    const { data, content: markdownContent } = matter(formattedContent);
    
    // Validate required fields
    if (!data.title) {
      throw new Error('Title is required in frontmatter');
    }
    
    return { frontmatter: data, content: markdownContent };
  } catch (error) {
    console.error('Error parsing frontmatter:', error.message);
    return null;
  }
}

// Function to create the blog post
async function createBlogPost() {
  try {
    console.log('\nPaste your AI-generated blog post (including frontmatter).');
    console.log('Type "END" on a new line and press Enter when done:\n');

    let content = '';
    let isFirstLine = true;
    
    // Collect content
    for await (const line of rl) {
      if (line.trim() === 'END') {
        break;
      }
      
      // Add newline except for the first line
      if (!isFirstLine) {
        content += '\n';
      }
      content += line;
      isFirstLine = false;
    }

    // Extract frontmatter and content
    const blogParts = extractBlogParts(content);
    if (!blogParts) {
      console.error('Please ensure your content includes title and other required fields.');
      rl.close();
      return;
    }

    const { frontmatter, content: markdownContent } = blogParts;

    // Generate slug from title
    const slug = titleToSlug(frontmatter.title);
    if (!slug) {
      console.error('Could not generate valid slug from title');
      rl.close();
      return;
    }

    // Create images directory if it doesn't exist
    const imagesDir = path.join(__dirname, '..', 'public', 'blog', 'images');
    fs.mkdirSync(imagesDir, { recursive: true });

    // Create the new blog post file
    const newPostPath = path.join(__dirname, '..', 'src', 'content', 'blog', `${slug}.md`);
    
    // Check if file already exists
    if (fs.existsSync(newPostPath)) {
      console.error(`\nError: A blog post with the slug "${slug}" already exists.`);
      rl.close();
      return;
    }

    // Write the new blog post with original frontmatter
    const finalContent = matter.stringify(markdownContent, frontmatter);
    fs.writeFileSync(newPostPath, finalContent);

    // Extract image paths from markdown
    const imageRegex = /!\[.*?\]\((\/blog\/images\/[^)]+)\)/g;
    const images = [...markdownContent.matchAll(imageRegex)].map(match => match[1]);

    console.log('\nBlog post created successfully!');
    console.log(`File: ${newPostPath}`);
    
    if (images.length > 0) {
      console.log('\nDetected images to be added:');
      images.forEach(image => {
        console.log(`- ${image}`);
      });
    }

    console.log('\nNext steps:');
    console.log('1. Review the generated blog post');
    if (images.length > 0) {
      console.log('2. Add the listed images to the public/blog/images directory');
    }
    console.log('3. Preview the blog post on your site');

    rl.close();
  } catch (error) {
    console.error('Error creating blog post:', error);
    rl.close();
  }
}

// Run the script
createBlogPost();
