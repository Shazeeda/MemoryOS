import { useEffect, useState } from "react";

function MemoryForm({ onSaveMemory, editingMemory, onCancelEdit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("General");

  useEffect(() => {
    if (editingMemory) {
      setTitle(editingMemory.title);
      setContent(editingMemory.content);
      setCategory(editingMemory.category || "General");
    }
  }, [editingMemory]);

  function handleSubmit(event) {
    event.preventDefault();

    onSaveMemory({
      title,
      content,
      category,
    });

    setTitle("");
    setContent("");
    setCategory("General");
  }

  function handleCancel() {
    setTitle("");
    setContent("");
    setCategory("General");
    onCancelEdit();
  }

  return (
    <form onSubmit={handleSubmit} className="memory-form">
      <input
        type="text"
        placeholder="Knowledge title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="General">General</option>
        <option value="Engineering">Engineering</option>
        <option value="Human Resources">Human Resources</option>
        <option value="Finance">Finance</option>
        <option value="Operations">Operations</option>
        <option value="Legal">Legal</option>
        <option value="Marketing">Marketing</option>
      </select>

      <textarea
        placeholder="Write the knowledge entry..."
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />

      <button type="submit">
        {editingMemory ? "Update Entry" : "Save Entry"}
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