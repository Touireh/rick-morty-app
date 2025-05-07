import { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from '../components/CharacterCard';
import Filters from '../components/Filters';
import Pagination from '../components/Pagination';
import { API_BASE_URL } from '../constants';

/**
 * Characters Page Component
 * @description Main page displaying a grid of Rick & Morty characters with filtering and pagination
 * @returns {JSX.Element} Characters listing page with filters and pagination
 */
export default function Characters() {
  const [data, setData] = useState({ info: {}, results: [] });
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    name: '',
    status: '',
    species: '',
    gender: ''
  });
  useEffect(() => {
    const fetchData = async () => {
        const params = {
            page,
            name: filters.name,
            status: filters.status,
            species: filters.species,
            gender: filters.gender
          };
      const response = await axios.get(`${API_BASE_URL}/character`, { params });
      setData(response.data);
    };
    
    fetchData();
  }, [page, filters]);

  return (
    <div className="container mx-auto px-4 py-8">
      <Filters filters={filters} setFilters={setFilters} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {data.results.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      <Pagination
        currentPage={page}
        totalPages={data.info.pages}
        onPageChange={setPage}
      />
    </div>
  )
}
