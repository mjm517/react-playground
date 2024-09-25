import React, { useState } from "react";
import UserInfo from "./components/UserInfo.tsx";
import Counter from "./components/Counter.tsx";

interface User {
  name: string;
  age: number;
}

function App() {
  const [user, setUser] = useState<User>({ name: "John Doe", age: 30 });

  return (
    <div className="App">
      <h1>React TypeScript Basics Project</h1>
      <UserInfo user={user} />
      <Counter />
    </div>
  );
}

export default App;
