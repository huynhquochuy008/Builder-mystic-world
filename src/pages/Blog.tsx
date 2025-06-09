import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  TrendingUp,
  Globe,
  BookOpen,
  Star,
  MessageCircle,
  Share2,
} from "lucide-react";

function Blog() {
  const featuredPost = {
    id: 1,
    title: "Complete Guide to Success in America, Canada, and Australia",
    excerpt:
      "Everything you need to know about achieving your dreams in the top three English-speaking destinations.",
    content:
      "Discover the essential steps, requirements, and insider tips for success in USA, Canada, and Australia...",
    author: "Sarah Williams",
    authorAvatar: "/placeholder.svg",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Success Guide",
    image: "/placeholder.svg",
    featured: true,
  };

  const blogPosts = [
    {
      id: 2,
      title: "Top 10 Cities for Success in the United States",
      excerpt:
        "Discover the best American cities for career growth and opportunities.",
      author: "Michael Chen",
      authorAvatar: "/placeholder.svg",
      date: "2024-01-12",
      readTime: "5 min read",
      category: "USA",
      image: "/placeholder.svg",
      flag: "🇺🇸",
    },
    {
      id: 3,
      title: "Why Canada is Perfect for International Professionals",
      excerpt:
        "Learn about Canada's welcoming policies and excellent quality of life.",
      author: "Emily Rodriguez",
      authorAvatar: "/placeholder.svg",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Canada",
      image: "/placeholder.svg",
      flag: "🇨🇦",
    },
    {
      id: 4,
      title: "Australia's Growing Tech Industry: Opportunities Await",
      excerpt: "Explore the booming technology sector Down Under.",
      author: "David Kumar",
      authorAvatar: "/placeholder.svg",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "Australia",
      image: "/placeholder.svg",
      flag: "🇦🇺",
    },
    {
      id: 5,
      title: "Financial Planning for International Success",
      excerpt: "Essential tips for managing finances during your journey.",
      author: "Lisa Thompson",
      authorAvatar: "/placeholder.svg",
      date: "2024-01-05",
      readTime: "4 min read",
      category: "Finance",
      image: "/placeholder.svg",
      flag: "💰",
    },
    {
      id: 6,
      title: "Cultural Adaptation: Thriving in Your New Country",
      excerpt:
        "How to successfully integrate into American, Canadian, or Australian culture.",
      author: "James Wilson",
      authorAvatar: "/placeholder.svg",
      date: "2024-01-03",
      readTime: "6 min read",
      category: "Culture",
      image: "/placeholder.svg",
      flag: "🌍",
    },
    {
      id: 7,
      title: "Success Stories: From Dreams to Reality",
      excerpt: "Inspiring stories from people who achieved their goals.",
      author: "Maria Garcia",
      authorAvatar: "/placeholder.svg",
      date: "2024-01-01",
      readTime: "5 min read",
      category: "Success Stories",
      image: "/placeholder.svg",
      flag: "⭐",
    },
  ];

  const categories = [
    { name: "All Posts", count: 25, color: "gray" },
    { name: "USA", count: 8, color: "blue", flag: "🇺🇸" },
    { name: "Canada", count: 7, color: "red", flag: "🇨🇦" },
    { name: "Australia", count: 6, color: "blue", flag: "🇦🇺" },
    { name: "Success Stories", count: 4, color: "green", flag: "⭐" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-red-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="secondary"
              className="mb-4 bg-blue-100 text-blue-700 border-blue-200"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Latest Insights & Tips
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Success <span className="text-blue-600">Stories</span> &{" "}
              <span className="text-red-600">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert insights, success stories, and practical tips for achieving
              your dreams in USA, Canada, and Australia.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Article
            </h2>
          </div>

          <Card className="max-w-4xl mx-auto hover:shadow-xl transition-shadow overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-gradient-to-br from-blue-100 to-red-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🌟</div>
                    <p className="text-gray-600">Featured Article</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <Badge className="mb-4 bg-blue-600">
                  {featuredPost.category}
                </Badge>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center space-x-4 mb-6">
                  <Avatar className="w-10 h-10">
                    <AvatarImage
                      src={featuredPost.authorAvatar}
                      alt={featuredPost.author}
                    />
                    <AvatarFallback className="bg-blue-100 text-blue-600">
                      {featuredPost.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">
                      {featuredPost.author}
                    </p>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </span>
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link to={`/blog/${featuredPost.id}`}>
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant="outline"
                className={`
                  ${category.color === "blue" ? "border-blue-200 text-blue-600 hover:bg-blue-50" : ""}
                  ${category.color === "red" ? "border-red-200 text-red-600 hover:bg-red-50" : ""}
                  ${category.color === "green" ? "border-green-200 text-green-600 hover:bg-green-50" : ""}
                  ${category.color === "gray" ? "border-gray-200 text-gray-600 hover:bg-gray-50" : ""}
                `}
              >
                {category.flag && <span className="mr-2">{category.flag}</span>}
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with the latest insights and success stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-50 to-red-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">{post.flag}</div>
                    <Badge
                      variant="secondary"
                      className={`
                        ${post.category === "USA" ? "bg-blue-100 text-blue-700" : ""}
                        ${post.category === "Canada" ? "bg-red-100 text-red-700" : ""}
                        ${post.category === "Australia" ? "bg-blue-100 text-blue-700" : ""}
                        ${!["USA", "Canada", "Australia"].includes(post.category) ? "bg-gray-100 text-gray-700" : ""}
                      `}
                    >
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg leading-tight">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3 mb-4">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={post.authorAvatar} alt={post.author} />
                      <AvatarFallback className="bg-gray-100 text-gray-600 text-xs">
                        {post.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <p className="font-medium text-gray-900">{post.author}</p>
                      <div className="flex items-center space-x-2 text-gray-500">
                        <Calendar className="h-3 w-3" />
                        <span className="text-xs">
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <Clock className="h-3 w-3" />
                        <span className="text-xs">{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/blog/${post.id}`}>Read More</Link>
                    </Button>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <MessageCircle className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Stay Updated with Success Tips
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get the latest insights, success stories, and expert tips
              delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-0 focus:ring-2 focus:ring-white/50"
              />
              <Button
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
