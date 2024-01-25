interface Props {
  message: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<Props> = ({ message, children }) => {
  return (
    <div className="group relative flex ">
      {children}
      <span className="absolute top-0 w-fit whitespace-nowrap left-9 scale-0 transition-all rounded bg-gray-200 p-2 text-xs text-gray-500 dark:bg-transparent border dark:border-gray-500 group-hover:scale-100">
        {message}
      </span>
    </div>
  );
};

export default Tooltip;
