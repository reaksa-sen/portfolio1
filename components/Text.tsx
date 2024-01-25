import classNames from "classnames";

interface TextProps {
  children: React.ReactNode;
  isLeading?: boolean;
  fontBold?: boolean;
}

const Text: React.FC<TextProps> = ({ children, isLeading, fontBold }) => (
  <span
    className={classNames("text-base lg:text-md text-gray-500", {
      "leading-normal": isLeading,
      "font-bold !text-black dark:!text-white": fontBold,
    })}
  >
    {children}
  </span>
);

export default Text;
