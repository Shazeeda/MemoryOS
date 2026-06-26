function MemoryCard({ memory, onDeleteMemory, onEditMemory }) {
  const formattedDate = new Date(memory.created_at).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const tags = memory.tags
    ? memory.tags.split(",").map((tag) => tag.trim()).filter(Boolean)
    : [];

  return (
    <article className="memory-card">
      <div className="memory-card-header">
        <div>
          <div className="memory-category">{memory.category || "General"}</div>
          <h3>{memory.title}</h3>
          <span>{formattedDate}</span>
        </div>

        <div className="memory-card-actions">
          <button
            type="button"
            className="edit-memory-button"
            onClick={() => onEditMemory(memory)}
          >
            Edit
          </button>

          <button
            type="button"
            className="delete-memory-button"
            onClick={() => onDeleteMemory(memory.id)}
          >
            Delete
          </button>
        </div>
      </div>

      <p>{memory.content}</p>

      {tags.length > 0 && (
        <div className="memory-tags">
          {tags.map((tag) => (
            <span key={tag} className="memory-tag">
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

export default MemoryCard;