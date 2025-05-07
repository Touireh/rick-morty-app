import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid'
import { EyeIcon } from '@heroicons/react/24/outline'
import { useFavorites } from '../contexts/FavoritesContext'
import { useNavigate } from 'react-router-dom'

/**
 * CharacterCard Component
 * @description Displays a character card with image, details, and favorite functionality
 * @returns {JSX.Element} A card component displaying character information
 */
export default function CharacterCard({ character }) {
  const { favorites, addFavorite, removeFavorite } = useFavorites()
  const isFavorite = favorites.some(fav => fav.id === character.id)
  const navigate = useNavigate()
  const handleSeeDetails = (id) => {
    navigate(`/character/${id}`)
  }

  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-48 object-cover"
      />

      <button
        onClick={() => isFavorite ? removeFavorite(character.id) : addFavorite(character)}
        className="absolute top-2 right-2 p-2 bg-white/80 rounded-full hover:bg-white"
      >
        {isFavorite ?
          <HeartSolid className="w-6 h-6 text-red-500" /> :
          <HeartOutline className="w-6 h-6 text-gray-600" />
        }
      </button>
      <div className="p-4">
        <div className='flex justify-between '>
          <h3 className="font-bold text-lg mb-2">{character.name}</h3>
          <button
            onClick={() => handleSeeDetails(character.id)}
            className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors flex justify-center items-center gap-1 text-gray-600 transition-transform transform hover:scale-110 "
            aria-label="View details"
          >
            <EyeIcon className="w-4 h-4 text-gray-600 " />
            <span className='text-sm'> See details </span>
          </button>
        </div>
        <div className="space-y-1 text-sm">
          <p className="flex gap-1">
            <span className="font-semibold">Status:</span>
            <span className={`badge ${character.status === 'Alive' ? 'bg-green-500' : 'bg-red-500'}`}>
              {character.status}
            </span>
          </p>
          <p><span className="font-semibold">Species:</span> {character.species}</p>
          <p><span className="font-semibold">Gender:</span> {character.gender}</p>
        </div>
      </div>
    </div>
  )
}