import React from "react";
import MyButton from "../button/MyButton";
import { getPageArray } from "../../../utils/Page";

const MyPadination = ({ totalPage, page, changePage }) => {
  const pageArray = getPageArray(totalPage);

  return (
    <>
      {pageArray.map((item) => (
        <button
          key={item}
          onClick={() => changePage(item)}
          className={
            page === item ? "btn btn-primary" : "btn btn-outline-primary"
          }
        >
          {item}
        </button>
      ))}
    </>
  );
};
export default MyPadination;
