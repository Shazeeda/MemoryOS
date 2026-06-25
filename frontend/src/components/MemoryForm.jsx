import { useState } from "react";

function MemoryForm({ onSaveMemory }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    onSaveMemory({
      title,
      content,
    });

    setTitle("");
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit} className="memory-form">
      <input
        type="text"
        placeholder="Memory title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <textarea
        placeholder="Write your memory..."
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />

      <button type="submit">Save Memory</button>
    </form>
  );
}

export default MemoryForm;