import { useEffect, useState } from "react";

function MemoryForm({ onSaveMemory, editingMemory, onCancelEdit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("General");
  const [tags, setTags] = useState("");

  useEffect(() => {
    if (editingMemory) {
      setTitle(editingMemory.title);
      setContent(editingMemory.content);
      setCategory(editingMemory.category || "General");
      setTags(editingMemory.tags || "");
    }
  }, [editingMemory]);

  function handleSubmit(event) {
    event.preventDefault();

    onSaveMemory({
      title,
      content,
      category,
      tags,
    });

    setTitle("");
    setContent("");
    setCategory("General");
    setTags("");
  }

  function handleCancel() {
    setTitle("");
    setContent("");
    setCategory("General");
    setTags("");
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

      <input
        type="text"
        placeholder="Tags, separated by commas"
        value={tags}
        onChange={(event) => setTags(event.target.value)}
      />

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