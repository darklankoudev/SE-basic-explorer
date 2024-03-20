import { useState, useEffect } from "react";
import axios from "axios";
import { API_DETAIL_VALIDATOR } from "../../../constants/constants";
import CircularProgress from "@mui/material/CircularProgress";

const TableLatestValSupport = () => {
  const [resultTop10, setResultTop10] = useState({});
  const [loading, setLoading] = useState(true);

  const votingPowerFormatted = (number) => {
    return (number / 1000000).toLocaleString({ maximumFractionDigits: 2 });
  };

  const votingPercentageFormatted = (number) => {
    return number.toFixed(2) + "%";
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(API_DETAIL_VALIDATOR);
        const result = res.data.validators.filter(validator => validator.rank >= 1 && validator.rank <= 10);
        setResultTop10(result);
        setLoading(false);
      } catch (e) {
        if (process.env.NODE_ENV === 'development') {
          console.error(e);
        }
      }
    };
  
    fetchData();
  }, []);
  

  useEffect(() => {
    // console.log("ok, validator");
  }, [resultTop10]);

  return (
    <>
      <div className="overflow-x-auto overflow-y-auto rounded-bl-lg rounded-br-lg rounded-tl-lg rounded-tr-lg">
        <table data-tw-merge className="w-full text-left">
          <thead
            data-tw-merge
            className="text-white overflow-hidden bg-gradient-to-b from-theme-2/90 to-theme-1/[0.85] p-5 "
          >
            <tr
              data-tw-merge
              className="[&amp;:hover_td]:bg-slate-100 [&amp;:hover_td]:dark:bg-darkmode-300 [&amp;:hover_td]:dark:bg-opacity-50"
            >
              <th
                data-tw-merge
                className="font-medium px-5 py-4 border-b-2 dark:border-darkmode-300 border-l border-r  whitespace-nowrap"
              >
                Top
              </th>
              <th
                data-tw-merge
                className="font-medium px-5 py-4 border-b-2 dark:border-darkmode-300 border-l border-r border-t whitespace-nowrap"
              >
                Moniker
              </th>
              <th
                data-tw-merge
                className="font-medium px-5 py-4 border-b-2 dark:border-darkmode-300 border-l border-r border-t whitespace-nowrap"
              >
                Address
              </th>
              <th
                data-tw-merge
                className="font-medium px-5 py-4 border-b-2 dark:border-darkmode-300 border-l border-r border-t whitespace-nowrap"
              >
                Operator
              </th>
              <th
                data-tw-merge
                className="font-medium px-5 py-4 border-b-2 dark:border-darkmode-300 border-l border-r border-t whitespace-nowrap"
              >
                Voting Power
              </th>
              <th
                data-tw-merge
                className="font-medium text-center px-5 py-4 border-b-2 dark:border-darkmode-300 border-l border-r border-t whitespace-nowrap"
              >
                Voting Percentage
              </th>
              <th
                data-tw-merge
                className="font-medium px-5 py-4 border-b-2 dark:border-darkmode-300 border-l border-r border-t whitespace-nowrap"
              >
                Cumulative sharing
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan="8"
                  className="px-5 py-4 text-center border-b dark:border-darkmode-300"
                >
                  <CircularProgress color="success" />
                  <div className="text-center mt-2">Please wait a few seconds</div>
                </td>
              </tr>
            ) : (
                resultTop10.map((validator, index) => (
                <tr
                  key={index}
                  data-tw-merge
                  className="[&amp;:hover_td]:bg-slate-100 [&amp;:hover_td]:dark:bg-darkmode-300 [&amp;:hover_td]:dark:bg-opacity-50"
                >
                  <td
                    data-tw-merge
                    className="px-5 py-4 text-center border-b dark:border-darkmode-300 border-l border-r border-t"
                  >
                    {validator.rank}
                  </td>
                  <td
                    data-tw-merge
                    className="px-5 py-4 border-b dark:border-darkmode-300 border-l border-r border-t"
                  >
                    {validator.moniker}
                  </td>
                  <td
                    data-tw-merge
                    className="px-5 py-4 border-b dark:border-darkmode-300 border-l border-r border-t"
                  >
                    {validator.hex_address}
                  </td>
                  <td
                    data-tw-merge
                    className="px-5 py-4 border-b dark:border-darkmode-300 border-l border-r border-t"
                  >
                    {validator.operator_address}
                  </td>
                  <td
                    data-tw-merge
                    className="px-5 py-4 text-center border-b dark:border-darkmode-300 border-l border-r border-t"
                  >
                    {votingPowerFormatted(validator.tokens)}
                  </td>
                  <td
                    data-tw-merge
                    className="px-5 py-4 text-center border-b dark:border-darkmode-300 border-l border-r border-t"
                  >
                    {votingPercentageFormatted(validator.cumulative_share)}
                  </td>
                  <td
                    data-tw-merge
                    className="px-5 py-4 text-center border-b dark:border-darkmode-300 border-l border-r border-t"
                  >
                    {votingPercentageFormatted(validator.voting_power_percent)}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableLatestValSupport;
