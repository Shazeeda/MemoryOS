import { useState } from "react";

function Memories() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/memories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    const data = await response.json();

    console.log(data);

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