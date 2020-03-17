import React from "react";
import Header from "./componets/Header";
import KanBan from "./componets/KanBanBord";
import ListTask from "./componets/ListTask";
import AddList from "./componets/AddList";
import InputTask from "./componets/InputTask";

function App() {
  return (
    <div>
      <Header />
      <KanBan />
      <ListTask />
      <AddList />
    </div>
  );
}

export default App;
