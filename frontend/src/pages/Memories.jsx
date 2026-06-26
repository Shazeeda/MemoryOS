import { useEffect, useMemo, useState } from "react";

import { createMemory, fetchMemories } from "../api/memoryApi";
import MemoryForm from "../components/MemoryForm";
import MemoryList from "../components/MemoryList";
import SearchBar from "../components/SearchBar";

function Memories() {
  const [memories, setMemories] = useState([]);
  const [search, setSearch] = useState("");

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

  const filteredMemories = useMemo(() => {
    return memories.filter((memory) => {
      const searchTerm = search.toLowerCase();

      return (
        memory.title.toLowerCase().includes(searchTerm) ||
        memory.content.toLowerCase().includes(searchTerm)
      );
    });
  }, [memories, search]);

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

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <MemoryForm onSaveMemory={handleSaveMemory} />

        <MemoryList memories={filteredMemories} />
      </section>
    </main>
  );
}

export default Memories;