import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { ArrowLeftIcon, FilmIcon } from '@heroicons/react/24/outline'

export default function CharacterDetail() {
  const { id } = useParams()
  const [character, setCharacter] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const characterResponse = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`
        )
        setCharacter(characterResponse.data)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [id])

  if (loading) return <div className="text-center py-8">Loading...</div>
  if (!character) return <div className="text-center py-8">Character not found</div>

  return (
    <div className="max-w-4xl m-auto p-4 ">
      <Link to="/" className="inline-flex items-center mb-6 text-rick-blue hover:text-opacity-80 border-none">
        <ArrowLeftIcon className="w-5 h-5 mr-2" />
        Back to Characters
      </Link>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden flex justify-center ">
        <div className="md:flex">
          <div className="md:w-1/3">
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-6 md:w-2/3 space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">
              {character.name}
              <span className={`ml-2 inline-block w-3 h-3 rounded-full 
                ${character.status === 'Alive' ? 'bg-green-500' : 
                  character.status === 'Dead' ? 'bg-red-500' : 'bg-gray-500'}`}
              />
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <DetailItem label="Status" value={character.status} />
              <DetailItem label="Species" value={character.species} />
              <DetailItem label="Gender" value={character.gender} />
              <DetailItem label="Origin" value={character.origin?.name} />
              <DetailItem label="Location" value={character.location?.name} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const DetailItem = ({ label, value }) => (
  <div className="bg-gray-50 p-3 rounded-lg">
    <p className="text-sm font-semibold text-gray-500">{label}</p>
    <p className="font-medium">{value || 'Unknown'}</p>
  </div>
)