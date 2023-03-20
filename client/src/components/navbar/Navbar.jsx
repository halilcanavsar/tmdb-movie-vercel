import Logout from '../logout/Logout';
import SearchBar from '../searchBar/SearchBar';
import { Layout } from 'antd';
const { Header } = Layout;

function Navbar({ results, setResults, searchType, setSearchType }) {
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1
          style={{
            color: 'white',
            fontSize: '24px',
            fontWeight: 'bold',
            marginLeft: '12px',
          }}
        >
          TMDB
        </h1>

        <SearchBar
          results={results}
          setResults={setResults}
          searchType={searchType}
          setSearchType={setSearchType}
        />

        <Logout setResults={setResults} />
      </Header>
    </Layout>
  );
}

export default Navbar;
