import classNames from "classnames";
import Text from "./Text";
import data from "../data/data.json";
import Title from "./Title";

const Experience = () => {
  return (
    <div className="md:mt-28 mt-14">
      <Title>On the way with passion</Title>
      {data.experience.map((x, idx) => (
        <div
          key={x.company}
          className={classNames("grid grid-cols-12 items-center ", {
            "rtl-grid": idx % 2 === 0,
          })}
          dir={`${idx % 2 !== 0 && "rtl"}`}
        >
          <div className="md:col-span-5 col-span-10 md:py-0 py-5 md:my-5">
            <div className="py-6 md:hidden block w-full">
              <div className="w-full text-end">
                <span className="text-primary font-bold !text-end">
                  {x.position}
                </span>
                <h2>{x.company}</h2>
                <Text>{x.date}</Text>
              </div>
            </div>
            <div className="flex justify-end text-end">
              <div className="border rounded-md p-5 hover:border-black dark:border-gray-600 dark:hover:bg-black dark:hover:bg-opacity-5 duration-300">
                <div className="mb-3">
                  <span className="bg-gray-100 dark:bg-slate-900 dark:bg-opacity-25 p-2 rounded-sm text-lg">
                    🚀
                  </span>
                </div>
                <Text>{x.details}</Text>
              </div>
            </div>
          </div>

          <div className="flex self-center justify-center md:col-span-2 col-span-2 h-full relative -ml-4 md:ml-0s">
            <span
              className={classNames(
                "border border-dashed border-gray-300 dark:border-gray-700 h-full ",

                {
                  " violet-gradient w-[1px] h-full !border-none": idx === 0,
                  " bg-gradient-to-b from-transparent to-primary w-[1px] h-full !border-none":
                    data.experience.length - 1 === idx,
                }
              )}
            >
              <div
                className={classNames(
                  "w-4 h-4 bg-white dark:bg-gray-800 border rounded-full right-[50%] translate-x-[50%] absolute",
                  { hidden: idx === 0 }
                )}
              ></div>
              <div
                className={classNames(
                  "hidden w-14 h-14 items-center justify-center bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border rounded-full absolute right-[50%] translate-x-[50%] -bottom-16 hover:border-black duration-300 dark:hover:border-primary",
                  { " !flex": data.experience.length - 1 === idx }
                )}
              >
                <span className="font-bold text-sm">GOAL</span>
              </div>
            </span>
          </div>

          <div className="col-span-5 py-6 md:block hidden">
            <small className="text-primary font-bold "> {x.position}</small>
            <h2>{x.company}</h2>
            <Text>{x.date}</Text>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
