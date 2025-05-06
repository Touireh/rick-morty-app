import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';
import Filters from '../components/Filters';
import Pagination from '../components/Pagination';

export default function Characters() {
  const [data, setData] = useState({ info: {}, results: [] });
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    name: '',
    status: '',
    species: '',
    gender: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
        const params = {
            page,
            name: filters.name,
            status: filters.status,
            species: filters.species,
            gender: filters.gender
          };
      const response = await axios.get('https://rickandmortyapi.com/api/character', { params });
      console.log(response.data);
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
