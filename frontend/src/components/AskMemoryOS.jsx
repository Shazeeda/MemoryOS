function AskMemoryOS({ question, setQuestion }) {
  return (
    <section className="ask-memoryos">
      <div>
        <p>Ask MemoryOS</p>
        <h2>Search organizational memory using natural language.</h2>
      </div>

      <input
        type="text"
        placeholder="Ask something like: How do we deploy FastAPI?"
        value={question}
        onChange={(event) => setQuestion(event.target.value)}
      />
    </section>
  );
}

export default AskMemoryOS;