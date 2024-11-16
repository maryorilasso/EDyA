import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decreaseValue, addAmount } from "../store/counter/counterSlice";

const CounterComponent = () => {
  const counterValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(2);

  const handleAmountChange = (e) => {
    const value = Number(e.target.value) || 0;
    setIncrementAmount(value);
  };

  const handleCustomIncrement = () => {
    dispatch(addAmount(incrementAmount));
  };

  return (
    <div className="flex flex-col items-center gap-6 p-8 bg-gray-100 rounded-xl shadow-md">
      <h2 className="text-4xl font-bold text-indigo-600">{counterValue}</h2>
      
      <div className="flex gap-4">
        <button
          onClick={() => dispatch(decreaseValue())}
          className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          Disminuir
        </button>
        
        <button
          onClick={handleCustomIncrement}
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          Aumentar por {incrementAmount}
        </button>
      </div>

      <input
        type="number"
        value={incrementAmount}
        onChange={handleAmountChange}
        className="w-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Cantidad"
      />
    </div>
  );
};

export default CounterComponent;