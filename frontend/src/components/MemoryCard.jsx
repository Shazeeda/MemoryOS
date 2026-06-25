function MemoryCard({ memory }) {
  return (
    <div className="memory-card">
      <h3>{memory.title}</h3>
      <p>{memory.content}</p>
    </div>
  );
}

export default MemoryCard;