import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Choose from './pages/Choose';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Choose /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
