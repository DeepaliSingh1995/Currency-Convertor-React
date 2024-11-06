// useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.
// from this hook user can simply press "tab" to access the next value 
//  ***** DONOT call "useId" TO GENERATE KEYS IN THE LIST. Keys should be genrated from your data.


import React , {useId} from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
const amountInputId = useId()   // We will use it to bind label with input field

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} 
        className="text-black/40 mb-2 inline-block">
            {label}
        </label>
        <input
        id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          } // We have used "&&" here because the 1st "onAmountChange" is a checker that if "onAmountChange" exists then only onChange will be called otherwise it will not be used. If we will not use "$$" here and directly we use "onAmountChange" then there is a possibility that the app will crash if the input box will not find onAmountChange in the place where this component will be used.

          // ** By default JS assumes the event as a string !!! So here we have converted (e.target.value) into a Number
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          // ALWAYS ADD "KEY" IN THE LOOPS IN JSX because the absence of key
          creates performace issue as React does not know ki knsa element DOM m
          bar bar daalna hai.
          {currencyOptions.map((currency) => {
            <option 
            key={currency}   // if we are connecting with db then using "id" as key is most preferable bacuse it will be unique
            value={currency}>
             {currency}
            </option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
