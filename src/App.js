import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './styles/App.css';
import Choose from './pages/Choose';

function App() {

  const [selectedItem, setSelectedItem] = useState()
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Choose setSelectedItem={setSelectedItem} selectedItem={selectedItem}/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
