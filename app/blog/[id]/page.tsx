"use client";

import { useEffect, useState } from "react";
import { Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const path = `/data/blog/${params.id}/data.json`;
    fetch(path)
      .then((res) => {
        if (!res.ok) throw new Error("Post not found");
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load blog post:", err);
        setPost(null);
        setLoading(false);
      });
  }, [params.id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-12 bg-gray-200 rounded w-3/4 mb-6"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">
          Post not found
        </h2>
        <p className="text-gray-600">
          The article you're looking for does not exist.
        </p>
      </div>
    );
  }

  const formattedContent = post.content
    .replace(/\n/g, "<br>")
    .replace(
      /<img[^>]*src="[^"]*(image\d+\.jpg)"[^>]*>/g,
      (match: string, filename: string) =>
        `<img class="mx-auto my-4 rounded-lg" src="/data/blog/${params.id}/${filename}" width="480" height="360">`,
    );

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <Badge className="mb-4 bg-blue-600">{post.category}</Badge>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="flex items-center mb-6">
          <Avatar className="w-10 h-10 mr-3">
            <AvatarImage src={post.authorAvatar} alt={post.author} />
            <AvatarFallback className="bg-blue-100 text-blue-600">
              {post.author
                .split(" ")
                .map((word: string) => word[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="text-sm text-gray-600">
            <div className="font-medium text-gray-800">{post.author}</div>
            <div className="flex space-x-2 items-center">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
        <div
          className="prose prose-lg text-gray-700 leading-relaxed max-w-none"
          dangerouslySetInnerHTML={{
            __html: formattedContent,
          }}
        ></div>
      </div>
    </div>
  );
}
