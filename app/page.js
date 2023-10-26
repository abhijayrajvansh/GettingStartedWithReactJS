"use client";
import React, { useState } from "react";

const page = () => {
  const [value, setValue] = useState(1);
  return (
    <>
      <h1 className="font-bold ml-5 mt-5">
        Learning what matters, Updated Value = {value}{" "}
      </h1>
      <h1 className="ml-5">Watching this in iPad</h1>
      <button
        onClick={ () => {
          setValue(99999);
        }}
        className="bg-black font-bold text-white px-5 py-2 rounded mt-5 ml-5"
      >
        Update
      </button>
    </>
  );
};

export default page;
