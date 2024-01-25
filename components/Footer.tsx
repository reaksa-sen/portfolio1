import Text from "./Text";
import NextImage from "next/image";
import Twitter from "@/assets/icons/x.svg";
import Github from "@/assets/icons/github.svg";
import Linkedin from "@/assets/icons/linkedin.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent ">
        <div className="pt-5 pb-10 flex md:justify-between items-center md:flex-row flex-col gap-5">
          <div className="flex flex-col md:text-start text-center">
            <Link href={"/"}>
              <Text>Home</Text>
            </Link>
            <Link href={"/blog"}>
              <Text>Blogs</Text>
            </Link>
          </div>

          <div className="flex items-center gap-x-4 ">
            <Link href={"https://github.com/reaksa-sen"} target="_blank">
              <NextImage
                src={Github}
                alt="facebook"
                className="w-5 h-5 cursor-pointer img"
              />
            </Link>

            {/* <Link href={"https://twitter.com/rinz_dev"} target="_blank">
              <NextImage
                src={Twitter}
                alt="twitter"
                className="w-5 h-5 cursor-pointer img"
              />
            </Link> */}

            <Link
              href={"https://www.linkedin.com/in/sen-reaksa-16b353234/"}
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
            © 2023 SENREAKSA
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
