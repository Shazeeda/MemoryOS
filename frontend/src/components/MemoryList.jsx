import MemoryCard from "./MemoryCard";

function MemoryList({ memories, onDeleteMemory, onEditMemory }) {
  return (
    <section className="memory-list">
      <h2>Saved Memories</h2>

      {memories.length === 0 ? (
        <div className="empty-state">
          No memories saved yet. Add the first one above.
        </div>
      ) : (
        memories.map((memory) => (
          <MemoryCard
            key={memory.id}
            memory={memory}
            onDeleteMemory={onDeleteMemory}
            onEditMemory={onEditMemory}
          />
        ))
      )}
    </section>
  );
}

export default MemoryList;