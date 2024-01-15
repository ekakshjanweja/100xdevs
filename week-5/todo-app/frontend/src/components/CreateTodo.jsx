export function CreateTodo() {
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="title"
          style={{ marginRight: 50, padding: 10 }}
        />
        <input type="text" placeholder="description" style={{ padding: 10 }} />
      </div>

      <button style={{ margin: 50 }}>Add Todo</button>
    </div>
  );
}
