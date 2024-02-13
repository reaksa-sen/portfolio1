import { FormEvent, useEffect, useState } from "react";
import Title from "./Title";

const Contact = () => {
  const [mounted, setMounted] = useState(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState({
    text: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true); // Set loading to true when the request starts

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ data }),
      });

      // Handle response if necessary
      const respond = await response.json();
      // ...
    } catch (error) {
      // Handle error if necessary
      console.error(error);
    } finally {
      setData({ text: "" });
      const input = document.getElementById("myForm") as any;
      input.reset();
      setIsLoading(false); // Set loading to false when the request completes
    }
  }

  return (
    <div>
      <Title>Feel free to hit me up</Title>
      <div className=" h-400px flex flex-col px-2 mb-20">
        <div className="mx-auto my-auto w-full sm:w-full md:w-full lg:w-3/4 xl:w-3/4">
          <form id="myForm" onSubmit={onSubmit} className="flex flex-row">
            <input
              className="h-16 bg-gray-100 border border-gray-200 dark:bg-transparent dark:border-gray-500 dark:border-r-0 rounded-r-none rounded-md  w-full py-1 px-3 outline-none text-gray-500 placeholder-current"
              onChange={() => {
                setData({ ...data, text: (event?.target as any).value });
              }}
              type="text"
              placeholder="Say hi to me!"
              required
            />
            <span className="flex items-center bg-gray-100 dark:bg-transparent dark:border-l dark:border border rounded rounded-l-none px-3 font-bold text-grey-100 dark:border-gray-500">
              <button
                type="submit"
                className="p-1 text-lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <svg
                    className="animate-spin h-6 w-6 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  "👋"
                )}
              </button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
