import { Link } from 'react-router-dom'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'



export default function BackButton() {
    return (
        <Link to="/" className="inline-flex items-center mb-6 text-rick-blue hover:text-opacity-80 border-none">
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to Characters
        </Link>
    )
}