import Image from "@/components/Image";
import NextImage from "next/image";
import Profile from "@/assets/images/me.jpg";
import Twitter from "@/assets/icons/x.svg";
import Github from "@/assets/icons/github.svg";
import Linkedin from "@/assets/icons/linkedin.svg";
import Theme from "@/components/Theme";
import { IconJewishStar } from "@tabler/icons-react";
import Link from "next/link";
import Tooltip from "./Tooltip";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-x-5">
        <div className="w-12 h-12 relative">
          <Image
            src={Profile}
            alt="profile"
            className="rounded-full w-full h-full"
          />
          <Tooltip message={"✨ Available for work!"}>
            <div className="absolute -right-1.5 bottom-1 bg-primary rounded-full p-1 border-2">
              <IconJewishStar width={12} height={12} className="text-white " />
            </div>
          </Tooltip>
        </div>

        <div>
          <h2 className="text-gray-500 -mb-1 text-md">
            <span className="font-bold">Sen Reaksa</span>
          </h2>
          <small className="text-gray-500 ">reaksasen804@gmail.com</small>
        </div>
      </div>

      <div className="flex items-center md:gap-x-4 ">
        <Theme />
        <div className="w-[1px] h-5 bg-gray-300 dark:bg-gray-700 mx-2 md:block hidden"></div>
        <Link href={"https://github.com/reaksa-sen"} target="_blank">
          <NextImage
            src={Github}
            alt="facebook"
            className="w-5 h-5 cursor-pointer md:block hidden img"
          />
        </Link>

        {/* <Link href={"https://twitter.com/rinz_dev"} target="_blank">
          <NextImage
            src={Twitter}
            alt="twitter"
            className="w-5 h-5 cursor-pointer md:block hidden img"
          />
        </Link> */}
        <Link
          href={"https://www.linkedin.com/in/sen-reaksa-16b353234/"}
          target="_blank"
        >
          <NextImage
            src={Linkedin}
            alt="linkedin"
            className="w-5 h-5 cursor-pointer md:block hidden img"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
