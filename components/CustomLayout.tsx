import BlogFooter from "./BlogFooter";
import BlogHeader from "./BlogHeader";

interface Props {
  children: React.ReactNode;
}

const CustomLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="container mt-5">
      <BlogHeader />
      <main>{children}</main>
      <BlogFooter />
    </div>
  );
};

export default CustomLayout;
