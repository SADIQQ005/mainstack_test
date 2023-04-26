import { useEffect, useState } from "react";
import DoughnutChart from "../charts/DoughnutChart";
import LineChart from "../charts/LineChart";
import SourceChart from "../charts/SourceChart";

export default function Body() {
  const [display, setDisplay] = useState(null);

  const dateFilter = [
    { text: "1 day" },
    { text: "3 day" },
    { text: "7 day" },
    { text: "30 day" },
    { text: "all time" },
    { text: "custom date" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await await fetch("https://fe-task-api.mainstack.io/");
        const res = await data.json();
        await setDisplay(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section className="col-span-4 px-6">
        <div className="capitalize font-bold mt-3 mb-5 text-base">
          dashboard
        </div>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-bold first-letter:capitalize flex">
              Good morning,{" "}
              <span className="capitalize flex items-center">
                blessing{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
                  />
                </svg>
              </span>
            </h2>
            <p className="first-letter:capitalize text-sm mt-2">
              check out your dashboard summary.
            </p>
          </div>
          <p className="text-[#FF5403] capitalize text-sm">view analytics</p>
        </div>
        <ul className="flex space-x-4 mt-5 [&>*:nth-child(5)]:text-[#FF5403] [&>*:nth-child(5)]:bg-[#FFDDCD] [&>*:nth-child(5)]:border-[#FF5403]">
          {dateFilter.map((x, index) => (
            <li
              className="border-[1px] text-sm capitalize p-3 rounded-full"
              key={index}
            >
              {x.text}
            </li>
          ))}
        </ul>
        <main>
          <div className="my-3 shadow-sm px-3 py-5 rounded-md">
            <div className="flex justify-between items-center">
              <div className="space-y-2">
                <h3 className="capitalize font-bold">page views</h3>
                <p className="text-light text-sm first-letter:capitalize">
                  all time
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
            </div>
            <h1 className="font-bold my-5 text-4xl">500</h1>
            <LineChart display={display} />
          </div>
          <div className="flex space-x-3">
            <div className="my-3 w-full shadow-sm px-3 py-5 rounded-md">
              <div className="flex justify-between items-center">
                <h2 className="capitalize text-sm font-bold">top locations</h2>
                <p className="text-xs first-letter:capitalize text-[#FF5403]">
                  view full reports
                </p>
              </div>
              <div className="mt-5 flex space-x-1 items-center">
                <ul>
                  {display?.top_locations?.map((x, index) => (
                    <li key={index} className="text-xs capitalize">
                      {x.country} {x.percent}%
                    </li>
                  ))}
                </ul>
                <DoughnutChart display={display} />
              </div>
            </div>
            <div className="my-3 w-full shadow-sm px-3 py-5 rounded-md">
              <div className="flex justify-between items-center">
                <h2 className="capitalize text-sm font-bold">
                  Top Referral source
                </h2>
                <p className="text-xs first-letter:capitalize text-[#FF5403]">
                  view full reports
                </p>
              </div>
              <div className="mt-5 flex space-x-1 items-center">
                <ul>
                  {display?.top_sources?.map((x, index) => (
                    <li key={index} className="text-sm capitalize">
                      {x.source} {x.percent}%
                    </li>
                  ))}
                </ul>
                <SourceChart display={display} />
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
