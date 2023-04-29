import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import View from './Components/View';
import Insert from './Components/Insert';
import Edit from './Components/Edit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<View />} />
        <Route exact path="/insert" element={<Insert />} />
        <Route exact path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
