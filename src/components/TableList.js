import React from "react";
import TableItem from "./TableItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../styles.css";
const TableList = ({ posts, title, removePost }) => {
  if (!posts.length) {
    return <h4 className="text-center m-2">Not Found</h4>;
  }
  return (
    <>
      <h4 className="text-center">{title}</h4>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="item">
            <TableItem
              removePost={removePost}
              number={index + 1}
              post={post}
              key={post.id}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};
export default TableList;
