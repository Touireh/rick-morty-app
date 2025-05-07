import { useFavorites } from '../contexts/FavoritesContext';
import CharacterCard from '../components/CharacterCard';
import BackButton from '../components/common/BackButton';
/**
 * Favorites Page Component
 * @description Displays all favorite characters selected by the user
 * @returns {JSX.Element} Grid of favorite characters with remove functionality
 */
export default function Favorites() {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div className="m-4">
        <BackButton/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 m-4">
        {favorites.map((character) => (
          <CharacterCard 
            key={character.id} 
            character={character}
            onRemove={() => removeFavorite(character.id)}
          />
        ))}
      </div>
    </div>
  );
}