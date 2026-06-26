const API_BASE_URL = "http://127.0.0.1:8000";

export async function fetchMemories() {
  const response = await fetch(`${API_BASE_URL}/memories`);

  if (!response.ok) {
    throw new Error("Failed to fetch memories");
  }

  return response.json();
}

export async function createMemory(memoryData) {
  const response = await fetch(`${API_BASE_URL}/memories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(memoryData),
  });

  if (!response.ok) {
    throw new Error("Failed to save memory");
  }

  return response.json();
}

export async function deleteMemory(memoryId) {
  const response = await fetch(`${API_BASE_URL}/memories/${memoryId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete memory");
  }

  return response.json();
}