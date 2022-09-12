import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Todo from "./Todo";
import Todos from "./Todos";

const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Todos />} />
    <Route path="/todo/:id" element={<Todo />} />
    </Routes>
    </BrowserRouter>
  </div>
  );

}

export default App;
