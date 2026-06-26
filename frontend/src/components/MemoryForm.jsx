import { useEffect, useState } from "react";

function MemoryForm({ onSaveMemory, editingMemory, onCancelEdit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editingMemory) {
      setTitle(editingMemory.title);
      setContent(editingMemory.content);
    }
  }, [editingMemory]);

  function handleSubmit(event) {
    event.preventDefault();

    onSaveMemory({
      title,
      content,
    });

    setTitle("");
    setContent("");
  }

  function handleCancel() {
    setTitle("");
    setContent("");
    onCancelEdit();
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

      <button type="submit">
        {editingMemory ? "Update Memory" : "Save Memory"}
      </button>

      {editingMemory && (
        <button type="button" onClick={handleCancel}>
          Cancel Edit
        </button>
      )}
    </form>
  );
}

export default MemoryForm;