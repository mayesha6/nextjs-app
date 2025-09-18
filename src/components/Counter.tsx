"use client";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-2xl shadow-md w-64 mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4">Counter</h2>
      <p className="text-2xl font-bold mb-4">{count}</p>
      <div className="flex gap-4">
        <button
          onClick={() => setCount(count === 0 ? 0 : count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          -
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Reset
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
