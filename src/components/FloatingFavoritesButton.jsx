import { Link } from 'react-router-dom'
import { HeartIcon } from '@heroicons/react/24/solid'
import { useFavorites } from '../contexts/FavoritesContext'

export default function FloatingFavoritesButton() {
    const { favorites } = useFavorites()

    return (
        <Link
            to="/favorites"
            className="fixed bottom-4 right-4 bg-rick-blue text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all"
        >
            <div className="relative flex justify-between">
                <HeartIcon className="w-6 h-6" />
                {favorites.length > 0 && (
                        <span className="absolute -top-4 -right-4 bg-red-500 text-xs rounded-full px-2 py-1">
                            {favorites.length}
                        </span>
                )}
                <span>Favorites</span>
            </div>
        </Link>
    )
}