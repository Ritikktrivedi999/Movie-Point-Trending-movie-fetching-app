import React from "react";

export default function ShiftPage({ pageProp, goToNext, goToBack }) {
  return (
    <>
      <div className="w-full flex justify-center mb-8">
        <button
          className="p-2 border-2 border-indigo-500 text-indigo-500 border-r-0 rounded-l-xl"
          onClick={goToBack}
        >
          Privious
        </button>
        <button className="p-2 border-2 border-indigo-500 text-indigo-500">
          {pageProp}
        </button>
        <button
          className="p-2 border-2 border-indigo-500 text-indigo-500 border-l-0 rounded-r-xl"
          onClick={goToNext}
        >
          Next
        </button>
      </div>
    </>
  );
}
