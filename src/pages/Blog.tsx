
import React from "react";
import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "Building Accessible React Applications",
    excerpt: "Learn how to make your React applications more accessible for all users, improving usability and compliance with WCAG standards.",
    date: "May 15, 2023",
    author: "John Doe",
    readTime: "8 min read",
    category: "React",
    slug: "building-accessible-react-applications",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "TypeScript Best Practices for Large Apps",
    excerpt: "Discover essential TypeScript patterns and best practices to maintain scalable and maintainable code in large-scale applications.",
    date: "March 22, 2023",
    author: "John Doe",
    readTime: "10 min read",
    category: "TypeScript",
    slug: "typescript-best-practices-for-large-apps",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "State Management in 2023: Beyond Redux",
    excerpt: "Explore modern state management solutions for React applications and alternatives to Redux that can simplify your codebase.",
    date: "February 10, 2023",
    author: "John Doe",
    readTime: "12 min read",
    category: "State Management",
    slug: "state-management-in-2023-beyond-redux",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Building a CI/CD Pipeline for Frontend Applications",
    excerpt: "Step-by-step guide to setting up a robust continuous integration and deployment pipeline for modern frontend applications.",
    date: "January 5, 2023",
    author: "John Doe",
    readTime: "15 min read",
    category: "DevOps",
    slug: "building-cicd-pipeline-for-frontend-applications",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    title: "Optimizing React Performance: Advanced Techniques",
    excerpt: "Advanced strategies to optimize React application performance, including code splitting, memoization, and virtualization.",
    date: "December 12, 2022",
    author: "John Doe",
    readTime: "9 min read",
    category: "Performance",
    slug: "optimizing-react-performance-advanced-techniques",
    image: "/placeholder.svg",
  },
  {
    id: 6,
    title: "Creating Custom Hooks in React: Best Practices",
    excerpt: "Learn how to create reusable custom hooks in React and implement best practices for clean, maintainable code.",
    date: "November 28, 2022",
    author: "John Doe",
    readTime: "7 min read",
    category: "React",
    slug: "creating-custom-hooks-in-react-best-practices",
    image: "/placeholder.svg",
  },
];

const Blog = () => {
  return (
    <PageLayout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <SectionHeading
            title="Blog"
            subtitle="Thoughts, lessons, and discoveries from my journey as a software engineer."
            className="mt-6 md:mt-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden card-hover border">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="text-xs text-muted-foreground flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link 
                    to={`/blog/${post.slug}`} 
                    className="text-primary hover:text-primary/80 transition-colors inline-flex items-center text-sm font-medium"
                  >
                    Read More
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;
