'use server';

import { getPostBySlug } from "@/lib/blog";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import MarkdownIt from 'markdown-it';
import { JsonLd } from "@/components/json-ld";

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

type PageParams = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(
  { params }: PageParams
): Promise<Metadata> {
  try {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    return {
      title: post.title,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        publishedTime: post.date,
        images: [{ url: post.coverImage }],
      },
    };
  } catch {
    return {
      title: 'Blog Post Not Found',
    };
  }
}

export default async function BlogPost(
  { params }: PageParams
) {
  try {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    const date = format(new Date(post.date), 'MMMM d, yyyy');
    const htmlContent = md.render(post.content);

    const blogPostData = {
      headline: post.title,
      description: post.excerpt,
      image: post.coverImage,
      datePublished: post.date,
      dateModified: post.date,
      author: {
        "@type": "Person",
        name: post.author
      },
      publisher: {
        "@type": "Organization",
        name: "MVPDesignLabs",
        logo: {
          "@type": "ImageObject",
          url: "https://www.mvpdesignlabs.com/logo.png"
        }
      }
    };

    return (
      <>
        <JsonLd type="blogPost" data={blogPostData} />
        <article className="container py-24 max-w-4xl mx-auto">
          <div className="mb-8">
            <Link 
              href="/blog"
              className="text-muted-foreground hover:text-primary inline-flex items-center mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            
            <time className="text-sm text-muted-foreground block mb-2">{date}</time>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">{post.excerpt}</p>
          </div>

          {post.coverImage && (
            <div className="relative aspect-[16/9] mb-12 rounded-lg overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          )}

          <div className="prose prose-invert prose-lg max-w-none">
            <div 
              className="space-y-6"
              dangerouslySetInnerHTML={{ 
                __html: htmlContent
              }} 
            />
          </div>

          {/* Article Footer */}
          <div className="mt-16 pt-8 border-t border-muted">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Written by</p>
                <p className="font-medium">{post.author}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">{post.readingTime}</p>
                <p className="text-sm text-muted-foreground">{post.category}</p>
              </div>
            </div>
          </div>
        </article>
      </>
    );
  } catch (err) {
    console.error('Error loading blog post:', err);
    notFound();
  }
}
