import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";
import { format } from "date-fns";
import { ArrowRight } from "lucide-react";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="flex-1">
      <div className="container py-24 min-h-screen">
        <div className="animate-in fade-in duration-1000">
          {/* Hero Section */}
          <div className="max-w-3xl mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Our Blog
            </h1>
            <p className="text-xl text-muted-foreground">
              Insights, thoughts and knowledge from our team of experts. We write about
              web development, design, and building successful digital products.
            </p>
          </div>

          {posts.length === 0 ? (
            <p className="text-muted-foreground">No blog posts found.</p>
          ) : (
            <div className="grid gap-12">
              {posts.map((post, index) => (
                <Link 
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group grid md:grid-cols-5 gap-8 items-start"
                >
                  {/* Image Container */}
                  <div className="md:col-span-2 aspect-[16/9] relative bg-muted rounded-xl overflow-hidden">
                    {post.coverImage ? (
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/30 group-hover:scale-105 transition-transform duration-500">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-lg font-medium text-muted-foreground/80">
                            {index === 0 ? "Featured Post" : "Blog Post"}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content Container */}
                  <div className="md:col-span-3 flex flex-col gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {format(new Date(post.date), 'MMMM d, yyyy')}
                      </p>
                      <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center text-primary font-medium">
                      Read more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
