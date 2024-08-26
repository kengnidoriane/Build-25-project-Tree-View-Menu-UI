import './App.css';
import TreeView from './component/tree view';
import menus from './component/tree view/data';

function App() {
  return (
    <div className="App">
      {/* Tree view /Menu UI component / recuesive navigation menu */}
      <TreeView menus={menus} />
    </div>
  );
}

export default App;
