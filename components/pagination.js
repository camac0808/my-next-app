import * as React from "react";
import usePagination from "@mui/material/usePagination";

export default function Pagination({ totalPost, itemsPerPage }) {
  

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return <ul className="list-none flex p-0 m0">
    {/* {items.map((item) => (
      <li key={item} className="mx-1">
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg focus:outline-none focus:bg-gray-300">{item}</button>
      </li>
    ))} */}
  </ul>;
}
