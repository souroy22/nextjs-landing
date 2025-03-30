"use client"; // Next.js compatibility

import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    image: "/girl-image.png",
    title: "BLOG POST",
    content:
      "This product exceeded my expectations! The quality is superb, and the customer service was outstanding. I highly recom...",
    link: "Antiques Inventory Management",
  },
  {
    id: 2,
    image: "/girl-image.png",
    title: "BLOG POST",
    content:
      "This product exceeded my expectations! The quality is superb, and the customer service was outstanding. I highly recom...",
    link: "Antiques Inventory Management",
  },
  {
    id: 3,
    image: "/girl-image.png",
    title: "BLOG POST",
    content:
      "This product exceeded my expectations! The quality is superb, and the customer service was outstanding. I highly recom...",
    link: "Antiques Inventory Management",
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 text-center w-[90%] sm:w-[80%] mx-auto">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Read more about working in Sortly
      </h2>

      {/* Blog Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white border border-gray-200 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-56">
              <Image
                src={post.image}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>

            {/* Blog Content */}
            <div className="p-6 text-left">
              <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">{post.content}</p>
              
              {/* Read More Link */}
              <a
                href="#"
                className="text-red-500 font-semibold mt-4 flex items-center gap-1 hover:underline transition-all duration-300"
              >
                {post.link} <span className="text-lg">➜</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
