import Board from "./components/Board/";
import ToolBar from "./components/ToolBar";
import ToolBox from "./components/ToolBox";
import BoardProvider from "./components/store/BoardProvider";
import ToolBoxProvider from "./components/store/ToolBoxProvider";
function App() {
  return (
    <BoardProvider>
      <ToolBoxProvider>
        <ToolBar />
        <Board />
        <ToolBox />
      </ToolBoxProvider>
    </BoardProvider>
  );
}

export default App;
