import { useState, useEffect } from 'react';
import {
  getMovieByQuery,
  getTvShowByQuery,
  getActorsByQuery,
} from '../../axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { Input, Segmented, AutoComplete } from 'antd';
const { Search } = Input;

function SearchBar({ results, setResults, searchType, setSearchType }) {
  const [search, setSearch] = useState('');
  const [autoComplete, setAutoComplete] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (searchType === 'Movies') {
      getMovieByQuery(search).then((res) => {
        setResults(res.results);
      });
    } else if (searchType === 'TV Shows') {
      getTvShowByQuery(search).then((res) => {
        setResults(res.results);
      });
    } else if (searchType === 'Actors') {
      getActorsByQuery(search).then((res) => {
        setResults(res.results);
      });
    }
  }, [searchType]);

  if (location.pathname === '/login') return null;

  const handleSearch = (e) => {
    const searchTerm = e.trim(); // remove whitespace from search term

    if (searchTerm.length >= 2) {
      // only search if search term is at least 2 characters
      if (searchType === 'Movies') {
        getMovieByQuery(searchTerm).then((res) => {
          setResults(res.results);
        });
      } else if (searchType === 'TV Shows') {
        getTvShowByQuery(searchTerm).then((res) => {
          setResults(res.results);
        });
      } else if (searchType === 'Actors') {
        getActorsByQuery(searchTerm).then((res) => {
          setResults(res.results);
        });
      }

      setSearch(searchTerm);
      navigate('/');
    }
  };

  const handleSegmentedChange = (e) => {
    setSearchType(e);
  };

  const handleResultClick = (id, option) => {
    setSearch(option.label);
    if (searchType === 'Movies') {
      navigate(`/movie/${id}`);
    } else if (searchType === 'TV Shows') {
      navigate(`/tv/${id}`);
    } else if (searchType === 'Actors') {
      navigate(`/actor/${id}`);
    }
  };

  const handleAutoComplete = (e) => {
    if (e) {
      if (searchType === 'Movies') {
        getMovieByQuery(e).then((res) => {
          setAutoComplete(
            res.results.map((result) => ({
              label: result.title,
              value: result.id,
            }))
          );
        });
      } else if (searchType === 'TV Shows') {
        getTvShowByQuery(e).then((res) => {
          setAutoComplete(
            res.results.map((result) => ({
              label: result.name,
              value: result.id,
            }))
          );
        });
      } else if (searchType === 'Actors') {
        getActorsByQuery(e).then((res) => {
          setAutoComplete(
            res.results.map((result) => ({
              label: result.name,
              value: result.id,
            }))
          );
        });
      } else {
        setAutoComplete([]);
      }
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: '30px',
      }}
    >
      <AutoComplete
        options={autoComplete}
        onSearch={handleAutoComplete}
        onSelect={handleResultClick}
        onChange={(e) => setSearch(e)}
        value={search}
      >
        <Search
          placeholder="Search.."
          allowClear
          enterButton="Search"
          size="large"
          onSearch={handleSearch}
          autoFocus
          style={{ width: '500px' }}
        />
      </AutoComplete>

      <Segmented
        options={['Movies', 'TV Shows', 'Actors']}
        value={searchType}
        onChange={handleSegmentedChange}
        size="large"
      />
    </div>
  );
}

export default SearchBar;
