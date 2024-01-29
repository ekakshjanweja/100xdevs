import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export const SendMoneyComponent = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState(null);

  return (
    <div className="flex justify-center h-screen">
      <div className="h-full flex flex-col justify-center">
        <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-slate-100 rounded-lg">
          <div className="flex flex-col space-y-1.5 p-6">
            <h2 className="text-3xl text-center font-semibold">Send Money</h2>
          </div>
          <div className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-slate-800 hover:bg-green-500 flex items-center justify-center">
                <span className="text-2xl text-white">
                  {name[0].toUpperCase()}
                </span>
              </div>
              <h3 className="text-2xl font-semibold">{name.toUpperCase()}</h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="pt-4 text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Amount (in Rs)
                </div>
              </div>
              <input
                type="number"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-1 text-sm"
                id="amount"
                placeholder="Enter amount"
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
            </div>
            <div className="pt-4">
              <button
                className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-slate-700 hover:bg-green-500 text-white"
                onClick={async () => {
                  const response = await axios.post(
                    "http://localhost:5050/api/v1/account/transfer",
                    {
                      to: id,
                      amount,
                    },
                    {
                      headers: {
                        Authorization:
                          "Bearer " + localStorage.getItem("token"),
                      },
                    }
                  );

                  setMessage(response.data.message);
                }}
              >
                Initiate Transfer
              </button>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <div>
            {message === null ? (
              ""
            ) : (
              <div className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white">
                {message}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
