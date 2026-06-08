import { useState } from "react";

function Memories() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log({
      title,
      content,
    });

    setTitle("");
    setContent("");
  }

  return (
    <main>
      <h1>Memory Vault</h1>

      <p>
        Store, organize, and retrieve institutional knowledge.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Memory Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />
        <br />

        <textarea
          placeholder="Enter knowledge, process, documentation, or notes..."
          rows="8"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">
          Save Memory
        </button>
      </form>
    </main>
  );
}

export default Memories;