import React, { useEffect } from "react";

const Loader = ({ currentYear, years, completedYears }) => {
  useEffect(() => {
    // Simulate loading data
  }, [currentYear.year]);

  return (
    <>
      <div className="flex items-center justify-center w-full h-full py-10">
        <ol className="flex items-center w-full">
          {years.map((year, index) => (
            <li
              key={year}
              className={
                index === years.length - 1
                  ? "flex w-full items-center"
                  : `flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-${
                      completedYears
                        .map((completedYear) => completedYear.year)
                        .includes(year)
                        ? completedYears[index].hasData
                          ? "green"
                          : "red"
                        : "gray"
                    }-100 after:border-4 after:inline-block dark:after:border-${
                      completedYears
                        .map((completedYear) => completedYear.year)
                        .includes(year)
                        ? completedYears[index].hasData
                          ? "green"
                          : "red"
                        : "gray"
                    }-800`
              }
            >
              <span
                className={`flex items-center justify-center w-10 h-10 bg-${
                  completedYears
                    .map((completedYear) => completedYear.year)
                    .includes(year)
                    ? completedYears[index].hasData
                      ? "green"
                      : "red"
                    : "gray"
                }-100 rounded-full lg:h-12 lg:w-12 dark:bg-${
                  completedYears
                    .map((completedYear) => completedYear.year)
                    .includes(year)
                    ? completedYears[index].hasData
                      ? "green"
                      : "red"
                    : "gray"
                }-800 shrink-0`}
              >
                {completedYears
                  .map((completedYear) => completedYear.year)
                  .includes(year) ? (
                  completedYears[index].hasData ? (
                    <svg
                      className={`w-3.5 h-3.5 text-green-600 lg:w-4 lg:h-4 dark:text-green-600`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 12"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5.917 5.724 10.5 15 1.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      className={`w-3.5 h-3.5 text-red-600 lg:w-4 lg:h-4 dark:text-red-600`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )
                ) : (
                  <span>{year}</span>
                )}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default Loader;