import { Link } from 'react-router-dom'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

/**
 * BackButton Component
 * @description A reusable navigation button that returns the user to the main characters list
 * @returns {JSX.Element} A link component with an arrow icon and text
 */
export default function BackButton() {
    return (
        <Link to="/" className="inline-flex items-center mb-4 text-rick-blue hover:text-opacity-80 border-none">
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to Characters
        </Link>
    )
}