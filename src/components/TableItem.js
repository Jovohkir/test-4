import React from "react";
import MyButton from "./UI/button/MyButton";

const TableItem = (props) => {
  return (
    <div className="border my-2 p-3 d-flex justify-content-between align-items-center">
      <div>
        <span>
          {props.post.id}.<b> {props.post.title}</b>
        </span>

        <p className="lead">{props.post.body}</p>
      </div>
      <p>
        <MyButton
          onClick={() => props.removePost(props.post)}
          className="btn btn-outline-danger w-100"
        >
          Delete
        </MyButton>
      </p>
    </div>
  );
};
export default TableItem;
