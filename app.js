import { useState } from "react";
import "./styles.css";

const users = [
  { id: 1, name: "Luka", active: true },
  { id: 2, name: "Mark", active: false },
  { id: 3, name: "Ana", active: true },
  { id: 4, name: "Petra", active: false },
  { id: 5, name: "Miha", active: true },
];

export default function App() {
  const [showActiveOnly, setShowActiveOnly] = useState(false);

  const filteredUsers = users.filter((user) =>
    showActiveOnly ? user.active : true
  );

  return (
    <div className="app">
      <h1>Users</h1>
      <label>
        <input
          type="checkbox"
          checked={showActiveOnly}
          onChange={() => setShowActiveOnly((prev) => !prev)}
        />
        Show only active
      </label>

      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name} {user.active && "✅"}
          </li>
        ))}
      </ul>
    </div>
  );
}
