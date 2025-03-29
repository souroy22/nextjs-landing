"use client"; // Next.js compatibility

import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    image: "/woman-hat.jpg",
    title: "BLOG POST",
    content:
      '"This product exceeded my expectations! The quality is superb, and the customer service was outstanding. I highly recom..."',
    link: "Antiques Inventory Management",
  },
  {
    id: 2,
    image: "/woman-hat.jpg",
    title: "BLOG POST",
    content:
      '"This product exceeded my expectations! The quality is superb, and the customer service was outstanding. I highly recom..."',
    link: "Antiques Inventory Management",
  },
  {
    id: 3,
    image: "/woman-hat.jpg",
    title: "BLOG POST",
    content:
      '"This product exceeded my expectations! The quality is superb, and the customer service was outstanding. I highly recom..."',
    link: "Antiques Inventory Management",
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 text-center w-[90%] sm:w-[80%]">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Read more about working in Sortly
      </h2>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={300}
              className="w-full object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p className="text-gray-700 mt-2 text-sm">{post.content}</p>
              <a
                href="#"
                className="text-red-500 font-semibold mt-4 flex items-center gap-1 hover:underline"
              >
                {post.link} <span>➜</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
