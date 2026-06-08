import { useState, useEffect } from "react";

function Memories() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [memories, setMemories] = useState([]);

  async function fetchMemories() {
    const response = await fetch("http://127.0.0.1:8000/memories");
    const data = await response.json();
    setMemories(data);
  }

  useEffect(() => {
    fetchMemories();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("http://127.0.0.1:8000/memories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });

    setTitle("");
    setContent("");
    fetchMemories();
  }

  return (
    <main>
      <h1>Memory Vault</h1>
      <p>Store, organize, and retrieve institutional knowledge.</p>

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

        <button type="submit">Save Memory</button>
      </form>

      <section>
        <h2>Saved Memories</h2>

        {memories.map((memory, index) => (
          <div key={index}>
            <h3>{memory.title}</h3>
            <p>{memory.content}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Memories;