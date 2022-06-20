import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

function PostForm({ createPost }) {
  const [post, setPost] = useState({ title: "", body: "" });
  const addPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now()
    };
    console.log(newPost);
    if (newPost.title === "" && newPost.body === "") {
      alert("Iltimos to'ldring..");
    } else {
      createPost(newPost);
    }
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <h3 className="text-center">Create your post</h3>
      <MyInput
        type="text"
        className="form-control"
        placeholder="programming language"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <MyInput
        type="text"
        className="form-control my-3"
        placeholder="your fovarite language"
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <MyButton onClick={addPost}>Add Post</MyButton>
    </form>
  );
}
export default PostForm;
