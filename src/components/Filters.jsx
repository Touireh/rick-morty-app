export default function Filters({ filters, setFilters }) {
    const handleChange = (e) => {
      setFilters(prev => ({
        ...prev,
        [e.target.name]: e.target.value
      }))
    }
  
    return (
      <div className="mb-8 p-6 bg-gray-50 rounded-lg shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Search by name..."
            value={filters.name}
            onChange={handleChange}
            className="input-field"
          />
          
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
  
          {/* Ajouter les autres filtres de la même manière */}
        </div>
      </div>
    )
  }