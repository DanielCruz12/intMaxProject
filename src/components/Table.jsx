import React, { useState, useEffect } from "react";
import { API_URL } from "../config";
import Axios from "axios";
import { numberFormat } from "./Number";
import { down, up } from "../assets";

export const Table = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const getData = async () => {
    setErr("");
    try {
      const res = await Axios.get(API_URL, {
        headers: {
          "X-RapidAPI-Key":
            "455affff65mshe9ffe19f6d57db7p152bcejsncff8d11bc367",
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
        params: {
          referenceCurrencyUuid: "yhjMzLPhuIDl",
          timePeriod: "3h",
          "tiers[0]": "1",
          orderBy: "marketCap",
          orderDirection: "desc",
          limit: "4",
          offset: "0",
        },
      });
      setCoins(res.data.data.coins);
      setLoading(false);
    } catch (err) {
      setErr(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex justify-center mb-5 ">
      {loading ? (
        <>
          <div className="shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div
              className=" border-t-4 border-teal-400 rounded-b text-teal-900 px-4 py-3 shadow-md mb-5 pb-10 w-[100%]"
              role="alert"
            >
              <div className="flex">
                <div className="py-1">
                  <svg
                    className="fill-current h-6 w-6 text-teal-300 mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                  </svg>
                </div>
                <div className="text-teal-700">
                  {err.message == "ERR_NETWORK" ? (
                    <>
                      <p className="font-bold">{err}</p>
                      <p className="text-sm">
                        There is not internet connection.
                      </p>
                    </>
                  ): <p className="font-bold">{err}</p>}
                 
                </div>
              </div>
            </div>
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-200 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-200 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 mb-3 pb-3 w-full">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-black sm:rounded-lg">
                <table className="min-w-full">
                  <thead className="bg-black">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-white font-extrabold uppercase tracking-wider"
                      >
                        Coins
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-white font-extrabold uppercase tracking-wider"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-white font-extrabold uppercase tracking-wider"
                      >
                        Change
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-white font-extrabold uppercase tracking-wider"
                      >
                        MarketCap
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-white font-extrabold uppercase tracking-wider"
                      >
                        Rank
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-white font-extrabold uppercase tracking-wider"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-black divide-y divide-gray-800 text-center">
                    {coins.map((coin) => (
                      <tr key={coin.id}>
                        <td className="px-6 py-3 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={coin.iconUrl}
                                alt=""
                              />
                            </div>

                            <div className="ml-4 pl-2">
                              <div className="text-sm font-medium text-white">
                                {coin.name}
                              </div>
                              <div className="text-sm text-white font-bold">
                                {coin.symbol}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className="">
                          <div className="text-sm text-white font-bold pr-3">
                            {numberFormat(coin.price)}
                          </div>
                          <div className="text-sm text-gray-500 font-semibold pr-3">
                            {numberFormat(coin.btcPrice)}
                          </div>
                        </td>

                        <td className="p-3 ">
                          <div
                            className={`text-sm m-2 mt-3 ${
                              coin.change > 0 ? "text-green " : "text-red"
                            }`}
                          >
                            <div>
                              {coin.change > 0 ? (
                                <img src={up} className="max-w-[18px]"></img>
                              ) : (
                                <img src={down} className="max-w-[18px]"></img>
                              )}
                              {coin.change}
                            </div>
                          </div>
                        </td>
                        <td className=" whitespace-nowrap">
                          <div className="text-sm text-white font-bold">
                            {coin.marketCap}
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm text-white font-bold">
                            {coin.rank}
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className="px-2 inline-flex text-xs leading-5
                    font-semibold rounded-full bg-green-100 text-green-800"
                          >
                            Active
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
