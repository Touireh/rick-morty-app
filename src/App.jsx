import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Characters from './pages/Characters';
import CharacterDetail from './pages/Detail';
import Favorites from './pages/Favorites';
import { FavoritesProvider } from './contexts/FavoritesContext';

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  );
}
export default App;