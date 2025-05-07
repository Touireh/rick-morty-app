import { Link } from 'react-router-dom'
import { HeartIcon } from '@heroicons/react/24/solid'
import { useFavorites } from '../../contexts/FavoritesContext'
/**
 * FloatingFavoritesButton Component
 * @description A floating action button that displays the number of favorite characters
 * and navigates to the favorites page
 * @returns {JSX.Element} A floating button with favorites count
 */
export default function FloatingFavoritesButton() {
    // Get favorites from context
    const { favorites } = useFavorites()

    return (
        <Link
            to="/favorites"
            className="fixed bottom-4 right-4 bg-rick-blue text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all"
        >
            <div className="relative flex justify-between">
                <HeartIcon className="w-6 h-6" />
                {/* Display favorites count badge if there are any favorites */}
                {favorites.length > 0 && (
                        <span className="absolute -top-4 -right-4 bg-red-500 text-xs rounded-full px-2 py-1">
                            {favorites.length}
                        </span>
                )}
                <span className='hidden lg:block'>Favorites</span>
            </div>
        </Link>
    )
}