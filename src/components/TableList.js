import React from "react";
import TableThead from "./TableThead";
import TableItem from "./TableItem";

const TableList = ({ posts, title, removePost }) => {
  if (!posts.length) {
    return <h4 className="text-center m-2">Not Found</h4>;
  }
  return (
    <>
      <h4 className="text-center">{title}</h4>
      <table className="table table-striped">
        <TableThead />
        <tbody>
          {posts.map((post, index) => (
            <TableItem
              removePost={removePost}
              number={index + 1}
              post={post}
              key={post.id}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default TableList;
