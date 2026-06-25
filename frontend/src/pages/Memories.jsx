import { useEffect, useState } from "react";

import { createMemory, fetchMemories } from "../api/memoryApi";
import MemoryForm from "../components/MemoryForm";
import MemoryList from "../components/MemoryList";

function Memories() {
  const [memories, setMemories] = useState([]);

  async function loadMemories() {
    const data = await fetchMemories();
    setMemories(data);
  }

  async function handleSaveMemory(memoryData) {
    await createMemory(memoryData);
    await loadMemories();
  }

  useEffect(() => {
    loadMemories();
  }, []);

  return (
    <div>
      <h1>Memories</h1>
      <MemoryForm onSaveMemory={handleSaveMemory} />
      <MemoryList memories={memories} />
    </div>
  );
}

export default Memories;