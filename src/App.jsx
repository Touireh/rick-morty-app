import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Characters from './pages/Characters';
import CharacterDetail from './pages/Detail';
import Favorites from './pages/Favorites';
import { FavoritesProvider } from './contexts/FavoritesContext';
import FloatingFavoritesButton from './components/common/FloatingFavoritesButton';

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <FloatingFavoritesButton />
      </BrowserRouter>
    </FavoritesProvider>
  );
}
export default App;