import React, { useEffect, useState } from "react";
import { API_URL } from "../config";
import Axios from "axios";

const Table = () => {
  const [coins, setCoins] = useState([]);

  const options = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coins",
    params: {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
      "tiers[0]": "1",
      orderBy: "marketCap",
      orderDirection: "desc",
      limit: "5",
      offset: "0",
    },
    headers: {
      "X-RapidAPI-Key": "455affff65mshe9ffe19f6d57db7p152bcejsncff8d11bc367",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  Axios.request(options)
    .then(function (response) {
      setCoins(response.data.data.coins);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <div className="flex flex-col mb-5">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-black sm:rounded-lg">
            <table className="min-w-full">
              <thead className="bg-black">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Coins
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
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
                          <div className="text-sm text-gray-500">
                            {coin.symbol}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="">
                      <div className="text-sm text-white">{coin.price}</div>
                          <div className="text-sm text-gray-500">
                            {coin.btcPrice}
                          </div>
                    </td>
                    <td className=" whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {coin.listedAt}
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
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
    </div>
  );
};

export default Table;
