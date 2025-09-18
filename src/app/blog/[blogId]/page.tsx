const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  return (
    <div>
      <h1 className="text-5xl text-center text-bold py-4">This is dynamic blog details page. blog id : {blogId}</h1>
    </div>
  );
};

export default BlogDetailsPage;
