import React, { useMemo, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import TableList from "./components/TableList";
import PostForm from "./components/PostForm";
import SortedAndFilter from "./SortedAndFilter";
import MyModal from "./components/UI/modal/MyModal";

export default function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "java", stack: "javohir" },
    { id: 2, title: "python", stack: "Abbos" },
    { id: 3, title: "Goo", stack: "Mo'min" },
    { id: 4, title: "React", stack: "Zarif Ali" }
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);

  const SortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndsearchPosts = useMemo(() => {
    return SortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, SortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    if (newPost) {
      setModal(false);
    }
  };

  const removePost = (post) => {
    setPosts(posts.filter((s) => s.id !== post.id));
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        color: "red"
      }}
    >
      <div className="App" style={{ backgroundColor: "grey" }}>
        <button className="btn btn-primary" onClick={() => setModal(true)}>
          Add Posts
        </button>
        <MyModal modal={modal} setModal={setModal}>
          <PostForm createPost={createPost} />
        </MyModal>
        <SortedAndFilter filter={filter} setFilter={setFilter} />
        <TableList
          removePost={removePost}
          posts={sortedAndsearchPosts}
          title="Programing Language"
        />
      </div>
    </div>
  );
}
