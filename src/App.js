import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './styles/App.css';
import Choose from './pages/Choose';
import Results from './pages/Results';

function App() {

  const [selectedItem, setSelectedItem] = useState()
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/results' element={ <Results selectedItem={selectedItem}/>}/>
        <Route path='/' element={ <Choose setSelectedItem={setSelectedItem} selectedItem={selectedItem}/> } />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
