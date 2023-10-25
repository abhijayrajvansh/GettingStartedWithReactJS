"use client";
import React from "react";

const page = () => {
  let value = 1;
  const changevalue = () => {
    console.log(value);
    value = value + 1;
    console.log(value);
  };
  return (
    <>
      <h1 className="font-bold ml-5 mt-5">
        Learning what matters, Updated Value = {value}{" "}
      </h1>
      <h1 className="ml-5">Watching this in iPad</h1>
      <button
        onClick={changevalue}
        className="bg-black font-bold text-white px-5 py-2 rounded mt-5 ml-5"
      >
        Update
      </button>
    </>
  );
};

export default page;