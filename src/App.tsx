import "./App.css";
import Tree from "./tree";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App = () => {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <div>
          <Tree />
        </div>
      </DndProvider>
    </>
  );
};

export default App;
