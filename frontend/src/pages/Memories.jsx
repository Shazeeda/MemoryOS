import { useEffect, useMemo, useState } from "react";

import {
  createMemory,
  deleteMemory,
  fetchMemories,
  updateMemory,
} from "../api/memoryApi";
import MemoryForm from "../components/MemoryForm";
import MemoryList from "../components/MemoryList";
import SearchBar from "../components/SearchBar";

function Memories() {
  const [memories, setMemories] = useState([]);
  const [search, setSearch] = useState("");
  const [editingMemory, setEditingMemory] = useState(null);

  async function loadMemories() {
    const data = await fetchMemories();
    setMemories(data);
  }

  async function handleSaveMemory(memoryData) {
    if (editingMemory) {
      await updateMemory(editingMemory.id, memoryData);
      setEditingMemory(null);
    } else {
      await createMemory(memoryData);
    }

    await loadMemories();
  }

  async function handleDeleteMemory(memoryId) {
    await deleteMemory(memoryId);
    await loadMemories();
  }

  function handleEditMemory(memory) {
    setEditingMemory(memory);
  }

  function handleCancelEdit() {
    setEditingMemory(null);
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

        <SearchBar search={search} setSearch={setSearch} />

        <MemoryForm
          onSaveMemory={handleSaveMemory}
          editingMemory={editingMemory}
          onCancelEdit={handleCancelEdit}
        />

        <MemoryList
          memories={filteredMemories}
          onDeleteMemory={handleDeleteMemory}
          onEditMemory={handleEditMemory}
        />
      </section>
    </main>
  );
}

export default Memories;