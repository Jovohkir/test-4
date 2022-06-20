import React, { useEffect, useMemo, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import TableList from "./components/TableList";
import PostForm from "./components/PostForm";
import SortedAndFilter from "./SortedAndFilter";
import MyModal from "./components/UI/modal/MyModal";
import { usePost } from "./hooks/useCreatePost";
import axios from "axios";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndsearchPosts = usePost(posts, filter.sort, filter.query);
  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    if (newPost) {
      setModal(false);
    }
  };

  async function fetchPosts() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPosts(response.data);
  }

  const removePost = (post) => {
    setPosts(posts.filter((s) => s.id !== post.id));
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "auto",
        alignItems: "center",
        justifyContent: "center",
        color: "grey"
      }}
    >
      <div className="App" style={{ backgroundColor: "#fff" }}>
        <button onClick={fetchPosts}>get</button>
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
          title="FULL POST"
        />
      </div>
    </div>
  );
}
