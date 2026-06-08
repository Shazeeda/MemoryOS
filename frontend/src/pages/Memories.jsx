function Memories() {
  return (
    <main>
      <h1>Memory Vault</h1>

      <form>
        <input type="text" placeholder="Memory Title" />

        <textarea
          placeholder="Enter knowledge, process, documentation, or notes..."
          rows="8"
        />

        <button type="submit">Save Memory</button>
      </form>
    </main>
  );
}

export default Memories;
