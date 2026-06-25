import MemoryCard from "./MemoryCard";

function MemoryList({ memories }) {
  return (
    <section>
      <h2>Saved Memories</h2>

      {memories.map((memory) => (
        <MemoryCard key={memory.id} memory={memory} />
      ))}
    </section>
  );
}

export default MemoryList;