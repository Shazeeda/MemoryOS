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
    <main className="page">
      <section className="memories-page">
        <div className="memories-header">
          <h1>Memory Vault</h1>
          <p>
            Capture important knowledge, organize institutional memory, and
            retrieve what matters later.
          </p>
        </div>

        <MemoryForm onSaveMemory={handleSaveMemory} />
        <MemoryList memories={memories} />
      </section>
    </main>
  );
}

export default Memories;