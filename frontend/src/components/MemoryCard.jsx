function MemoryCard({ memory }) {
  const formattedDate = new Date(memory.created_at).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="memory-card">
      <div className="memory-card-header">
        <h3>{memory.title}</h3>
        <span>{formattedDate}</span>
      </div>

      <p>{memory.content}</p>
    </article>
  );
}

export default MemoryCard;