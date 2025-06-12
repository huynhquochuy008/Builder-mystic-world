import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";


function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const path = `/data/blog/${id}/data.json`;
    fetch(path)
      .then((res) => res.json())
      .then(setPost)
      .catch((err) => {
        console.error("Failed to load blog post:", err);
        setPost(null);
      });
  }, [id]);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">Post not found</h2>
        <p className="text-gray-600">The article you're looking for does not exist.</p>
      </div>
    );
  }
  const formattedContent = post.content
      .replace(/\n/g, '<br>')
      .replace(/<img[^>]*src="[^"]*(image\d+\.jpg)"[^>]*>/g, (match, filename) =>
        `<img class="mx-auto my-4" src="/data/blog/${id}/${filename}" width="480" height="360">`
      );

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <Badge className="mb-4">{post.category}</Badge>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="flex items-center mb-6">
          <Avatar className="w-10 h-10 mr-3">
            <AvatarImage src={post.authorAvatar} alt={post.author} />
            <AvatarFallback>
              {post.author
                .split(" ")
                .map((word) => word[0])
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
        {/* <img
          // src={post.image}
          alt={post.title}
          className="rounded-lg mb-6 w-full object-cover h-64"
        /> */}
        <div
          className="prose text-lg text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: formattedContent
          }}
        ></div>
      </div>
    </div>
  );
}

export default BlogPost;
