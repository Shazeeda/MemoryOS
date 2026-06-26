function MemoryCard({ memory, onDeleteMemory }) {
  const formattedDate = new Date(memory.created_at).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="memory-card">
      <div className="memory-card-header">
        <div>
          <h3>{memory.title}</h3>
          <span>{formattedDate}</span>
        </div>

        <button
          type="button"
          className="delete-memory-button"
          onClick={() => onDeleteMemory(memory.id)}
        >
          Delete
        </button>
      </div>

      <p>{memory.content}</p>
    </article>
  );
}

export default MemoryCard;