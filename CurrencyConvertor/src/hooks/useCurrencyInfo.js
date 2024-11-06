// "useCurrencyInfo" is a custom hook and we are creating it in a ".js" file because majority of the hooks returns js value rather than jsx. But if jsx is return then we'll go ahead with ".jsx" file.
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      // `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
      `https://github.com/fawazahmed0/exchange-api/blob/main/other/currencies.json`
    )
      .then((res) => res.json)
      .then((res) => setData(res[currency]));

    console.log(data);
  }, [currency]);

  console.log(data);
  return data;
}

export default useCurrencyInfo;
