import React, { useState } from "react";
import { API_URL } from "../config";
import Axios from "axios";

export const Table = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  const options = {
    method: "GET",
    url: API_URL,
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
      "tiers[0]": "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "4",
      offset: "0",
    },
    headers: {
      "X-RapidAPI-Key": "455affff65mshe9ffe19f6d57db7p152bcejsncff8d11bc367",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  Axios.request(options)
    .then(function (res) {
      setCoins(res.data.data.coins);
      setLoading(false);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <div className="flex justify-center mb-5 ">
      {loading ? (
        <>
          <div className="shadow rounded-md p-4 max-w-sm w-full mx-auto">
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
                      #
                    </th>
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
                      listed At
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-white font-extrabold uppercase tracking-wider"
                    >
                      rank
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-white font-extrabold uppercase tracking-wider"
                    >
                      change
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
                      <td className=" whitespace-nowrap">
                        <div className="text-sm text-white font-bold">
                          {coin.rank}
                        </div>
                      </td>
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
                            ñ
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
                          ${coin.price}
                        </div>
                        <div className="text-sm text-gray-500 font-semibold pr-3">
                          {coin.btcPrice}
                        </div>
                      </td>
                      <td className=" whitespace-nowrap">
                        <div className="text-sm text-white font-bold">
                          {coin.listedAt}
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="text-sm text-white font-bold">
                          {coin.rank}
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="text-sm text-white">{coin.change}</div>
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
      )}
    </div>
  );
};

