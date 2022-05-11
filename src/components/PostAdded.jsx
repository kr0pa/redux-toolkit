import React, { useState } from "react";
import "./PostAdded.css";

function PostAdded() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitle("");
    setContent("");
  };

  return (
    <div className="postAdded">
      <h2>Dodaj nowy post...</h2>

      <form action="submit">
        <label htmlFor="title">Tytuł:</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          type="text"
        />

        <label htmlFor="content">Treść:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="10"
          name="content"
          type="text"
        />

        <button onClick={handleSubmit}>dodaj post</button>
      </form>
    </div>
  );
}

export default PostAdded;
