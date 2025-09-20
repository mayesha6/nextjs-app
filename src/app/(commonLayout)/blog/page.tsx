import BlogCard from "@/components/BLogCard";
import { IBlog } from "@/type";

const BlogPage = async () => {
  const res = await fetch("http://localhost:3004/blogs", {
    cache: "force-cache",
  });
  const blogs = await res.json();
  // console.log(blogs)
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl text-center text-bold py-4">this is blog page</h1>
      <div className="grid grid-cols-3 my-16 gap-4 justify-between">
        {blogs.map((blog: IBlog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
