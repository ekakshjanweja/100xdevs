export const RevenueCard = ({ title, orderCount, amount, nextPaymentDate }) => {
  return (
    <>
      <div className="m-4 hover:opacity-95 sm:flex-col">
        <div
          className={
            title === "Next Payout"
              ? "bg-blue-600 rounded-lg shadow-md "
              : "bg-white hover:bg-gray-100 rounded-lg shadow-md "
          }
        >
          <div className="p-4">
            <div
              className={
                title === "Next Payout"
                  ? "flex justify-start text-gray-100"
                  : "flex justify-start text-gray-700"
              }
            >
              <div className="flex">{title}</div>
              <div className="ml-1 flex justify-center flex-col">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                  />
                </svg>
              </div>
            </div>
            <div className="md:flex  justify-between pt-2">
              <div
                className={
                  title === "Next Payout"
                    ? "text-2xl font-semibold text-gray-50"
                    : "text-2xl font-semibold"
                }
              >
                ₹ {amount}
              </div>
              {orderCount ? (
                <div
                  className={
                    title === "Next Payout"
                      ? "flex cursor-pointer underline text-white font-medium flex-col justify-center"
                      : "flex cursor-pointer underline text-blue-700 font-medium flex-col justify-center"
                  }
                >
                  <div className="flex">
                    <div className="flex">{orderCount} order(s)</div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          {title === "Next Payout" ? (
            <div className="bg-blue-700 rounded-lg shadow-md md:flex justify-between">
              <div className="p-4 text-white">Next Payment Date: </div>
              <div className="p-4 text-white">{nextPaymentDate}</div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};
