interface Props {
  children: React.ReactNode;
}

const Title: React.FC<Props> = ({ children }) => {
  return (
    <div className="text-gray-500 uppercase text-center mb-3 md:mb-10">
      <small>{children}</small>
    </div>
  );
};

export default Title;
