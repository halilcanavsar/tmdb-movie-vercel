import SearchResults from '../../components/searchResults/SearchResults';

function Home({ results, searchType }) {
  return (
    <div>
      <SearchResults results={results} searchType={searchType} />
    </div>
  );
}

export default Home;
