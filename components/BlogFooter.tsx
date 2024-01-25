import NextImage from "next/image";
import Twitter from "@/assets/icons/x.svg";
import Github from "@/assets/icons/github.svg";
import Linkedin from "@/assets/icons/linkedin.svg";
import Link from "next/link";

const BlogFooter = () => {
  return (
    <div>
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent ">
        <div className="pt-5 pb-10 flex md:justify-between items-center md:flex-row flex-col gap-5">
          <div className="flex flex-col md:text-start text-center">
            <Link href={"/"} className="flex">
              {`{t`}
              <span className="text-primary font-semibold">RIN</span>
              {`}`}
            </Link>
          </div>

          <div className="flex items-center gap-x-4 ">
            <Link href={"https://github.com/KruyTharin"} target="_blank">
              <NextImage
                src={Github}
                alt="facebook"
                className="w-5 h-5 cursor-pointer img"
              />
            </Link>

            <Link href={"https://twitter.com/rinz_dev"} target="_blank">
              <NextImage
                src={Twitter}
                alt="twitter"
                className="w-5 h-5 cursor-pointer img"
              />
            </Link>

            <Link
              href={"https://www.linkedin.com/in/kruy-tharin-26469b261/"}
              target="_blank"
            >
              <NextImage
                src={Linkedin}
                alt="linkedin"
                className="w-5 h-5 cursor-pointer img"
              />
            </Link>
          </div>

          <span className="font-bold text-gray-500 text-sm">
            © 2023 KRUYTHARIN
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogFooter;
