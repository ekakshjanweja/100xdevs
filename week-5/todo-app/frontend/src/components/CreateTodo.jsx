import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <div>
        <input
          id="title"
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginRight: 50, padding: 10 }}
        />
        <input
          id="description"
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ padding: 10 }}
        />
      </div>

      <button
        style={{ margin: 50 }}
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({ title: title, description: description }),
          }).then(async (res) => {
            const json = await res.json();
            alert("Todo added!");
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
