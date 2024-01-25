import CustomLayout from "@/components/CustomLayout";
import { SEO } from "@/components/SEO";
import Text from "@/components/Text";
import { NextPage } from "next";

const Blogs: NextPage = () => {
  return (
    <CustomLayout>
      <SEO title="Reaksa's Blog" />
      <div className="h-screen text-center flex justify-center items-center">
        <div className="max-w-xl w-full ">
          <h2 className="text-4xl font-bold text-primary mb-3">Coming soon.</h2>
          <Text>There is no blogs yet!</Text>
        </div>
      </div>
    </CustomLayout>
  );
};

export default Blogs;
