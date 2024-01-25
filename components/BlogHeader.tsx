import Theme from "@/components/Theme";
import Link from "next/link";
import Text from "./Text";

const BlogHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <Link href={"/"} className="flex">
        {`{t`}
        <span className="text-primary font-semibold">RIN</span>
        {`}`}
      </Link>

      <div className="flex items-center gap-x-4 ">
        <div className="flex gap-x-5">
          <Link href={"/"}>
            <Text>Home</Text>
          </Link>
          <Link href={"/blog"}>
            <Text>Blogs</Text>
          </Link>
        </div>
        <div className="w-[1px] h-5 bg-gray-300 dark:bg-gray-700 mx-2 "></div>
        <Theme />
      </div>
    </div>
  );
};

export default BlogHeader;
