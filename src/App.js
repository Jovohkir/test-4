import React, { useEffect, useMemo, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import TableList from "./components/TableList";
import PostForm from "./components/PostForm";
import SortedAndFilter from "./SortedAndFilter";
import MyModal from "./components/UI/modal/MyModal";
import { usePost } from "./hooks/useCreatePost";
import PostApi from "./api/PostApi";
import MyLoader from "./components/UI/loader/MyLoader";
import { UseFetching } from "./hooks/UseFetching";
import { getPageCount, getPageArray } from "./utils/Page";
import MyPadination from "./components/UI/pagination/MyPagination";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndsearchPosts = usePost(posts, filter.sort, filter.query);
  //  jsondagi malumotlarni bolaklarga bolib bolimlarga bolish uchun function ishlatdik
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  //////////////////////////////////////////////////
  const [fetchPosts, isLoading, err] = UseFetching(async (limit, page) => {
    const response = await PostApi.getAllPosts(limit, page);
    setPosts(response.data);
    // bu joyda Pagedagi function chaqirib ishlatdik
    const totalCount = response.headers["x-total-count"];
    setTotalPage(getPageCount(totalCount, limit));
  });
  useEffect(() => {
    fetchPosts(limit, page);
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    if (newPost) {
      setModal(false);
    }
  };
  const removePost = (post) => {
    setPosts(posts.filter((s) => s.id !== post.id));
  };
  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
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
        <button className="btn btn-primary" onClick={() => setModal(true)}>
          Add Posts
        </button>
        <MyModal modal={modal} setModal={setModal}>
          <PostForm createPost={createPost} />
        </MyModal>
        <SortedAndFilter filter={filter} setFilter={setFilter} />
        {/* Api Error bolsa chiqaradi */}
        {err && <p>Error</p>}
        {/* bu yerda server loading qiladigan function yozilgan loader fayli divni ichida chaqirilgan */}
        {isLoading ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <MyLoader />
          </div>
        ) : (
          <TableList
            removePost={removePost}
            posts={sortedAndsearchPosts}
            title="FULL POST"
          />
        )}
        <MyPadination
          page={page}
          changePage={changePage}
          totalPage={totalPage}
        />
      </div>
    </div>
  );
}
