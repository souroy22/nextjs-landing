import React from "react";
// import BlogImg from "../../icons/blogs.png"; // ✅ Import your local image
import { ChevronRight } from "lucide-react";

const OurBlogs = () => {
  const blogPosts = [
    {
      title: "BLOG POST",
      content:
        '"This product exceeded my expectations! The quality is superb, and the customer service was outstanding. I highly recom..."',
      category: "Antiques Inventory Management",
      image: "/icons/blogs.png", 
    },
    {
      title: "BLOG POST",
      content:
        '"This product exceeded my expectations! The quality is superb, and the customer service was outstanding. I highly recom..."',
      category: "Antiques Inventory Management",
      image: "/icons/blogs.png", 
    },
    {
      title: "BLOG POST",
      content:
        '"This product exceeded my expectations! The quality is superb, and the customer service was outstanding. I highly recom..."',
      category: "Antiques Inventory Management",
      image: "/icons/blogs.png", 
    },
  ];

  return (
    <section className=" pt-5 pb-24 bg-white">
      <div className="container mx-auto px-6 lg:px-52">
        <h2 className="text-5xl md:text-5xl font-bold text-center mb-12">
          Read more about working in Sortly
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-xl border border-gray-200 p-6 overflow-hidden"
            >
              <img
                src={post.image}
                alt="Blog post"
                className="w-full rounded-3xl p-4 h-64 object-cover"
              />
              <div className="p-5">
                <h3 className="text-sm font-semibold mb-2 text-[#2C2C2C] uppercase">
                  {post.title}
                </h3>
                <p className="text-base text-graya-700 mb-4">{post.content}</p>
                <p className="text-sm text-[#E12B3E] font-medium hover:underline cursor-pointer flex items-center gap-1">
                  {post.category}
                  <span><ChevronRight className="w-6 h-6 ml-4" /></span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBlogs;
