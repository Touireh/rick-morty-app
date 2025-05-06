export default function Filters({ filters, setFilters }) {
    const handleChange = (e) => {
      setFilters(prev => ({
        ...prev,
        [e.target.name]: e.target.value
      }))
    }
  
    const resetFilters = () => {
      setFilters({
        name: '',
        status: '',
        species: '',
        gender: ''
      })
    }
  
    return (
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Champ de recherche par nom */}
          <input
            type="text"
            name="name"
            placeholder="Search character..."
            value={filters.name}
            onChange={handleChange}
            className="input-field"
          />
  
          {/* Filtre Status */}
          <select
            name="status"
            value={filters.status}
            onChange={handleChange}
            className="input-field"
          >
            <option value="">All Status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
  
          {/* Filtre Species */}
          <select
            name="species"
            value={filters.species}
            onChange={handleChange}
            className="input-field"
          >
            <option value="">All Species</option>
            <option value="human">Human</option>
            <option value="alien">Alien</option>
            <option value="humanoid">Humanoid</option>
            <option value="robot">Robot</option>
            <option value="animal">Animal</option>
            <option value="mytholog">Mytholog</option>
          </select>
  
          {/* Filtre Gender */}
          <select
            name="gender"
            value={filters.gender}
            onChange={handleChange}
            className="input-field"
          >
            <option value="">All Genders</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
  
        {/* Bouton Reset */}
        <div className="mt-4 flex justify-end">
          <button
            onClick={resetFilters}
            className="px-4 py-2 text-sm bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Reset Filters
          </button>
        </div>
      </div>
    )
  }