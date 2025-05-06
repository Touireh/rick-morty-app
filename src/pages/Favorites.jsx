import { useFavorites } from '../contexts/FavoritesContext';
import CharacterCard from '../components/CharacterCard';

export default function Favorites() {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div className="m-4">
      <h2 className='flex item-center justify-center '>Favorite Characters ({favorites.length})</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 m-8">
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