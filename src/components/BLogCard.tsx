import { IBlog } from "@/type";
import React from "react";

const BlogCard = ({ blog }: { blog: IBlog }) => {
    console.log(blog)
  return (
    <div className="rounded-2xl shadow-lg bg-white p-5 hover:shadow-xl transition duration-300 w-full">
      {/* Title */}
      <h2 className="text-xl font-bold text-gray-800 mb-2">{blog.title}</h2>

      {/* Author & Date */}
      <p className="text-sm text-gray-500 mb-3">
        By <span className="font-medium">{blog.author}</span> •{" "}
        {new Date(blog.createdAt).toLocaleDateString()}
      </p>

      {/* Content Preview */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{blog.content}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {blog.tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Footer (views + read more) */}
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{blog.views} views</span>
        <button className="px-4 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
