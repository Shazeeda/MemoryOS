import { useEffect, useMemo, useState } from "react";

import {
  createMemory,
  deleteMemory,
  fetchMemories,
  updateMemory,
} from "../api/memoryApi";
import AskMemoryOS from "../components/AskMemoryOS";
import CategoryFilter from "../components/CategoryFilter";
import MemoryForm from "../components/MemoryForm";
import MemoryList from "../components/MemoryList";
import SearchBar from "../components/SearchBar";

function Memories() {
  const [memories, setMemories] = useState([]);
  const [search, setSearch] = useState("");
  const [question, setQuestion] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
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
    const activeSearch = question || search;

    const searchWords = activeSearch
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .split(" ")
      .filter((word) => word.length > 2);

    return memories.filter((memory) => {
      const searchableText = `
        ${memory.title}
        ${memory.content}
        ${memory.category}
        ${memory.tags || ""}
      `.toLowerCase();

      const matchesSearch =
        searchWords.length === 0 ||
        searchWords.some((word) => searchableText.includes(word));

      const matchesCategory =
        selectedCategory === "All" || memory.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [memories, search, question, selectedCategory]);

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

        <AskMemoryOS question={question} setQuestion={setQuestion} />

        <div className="memory-controls">
          <SearchBar search={search} setSearch={setSearch} />

          <CategoryFilter
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

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