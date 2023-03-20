import Login from './pages/login/Login';
import Home from './pages/home/Home';
import MovieDetails from './pages/movieDetails/MovieDetails';
import TvShowDetails from './pages/tvShowDetails/TvShowDetails';
import ActorDetails from './pages/actorDetails/ActorDetails';
import Navbar from './components/navbar/Navbar';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Layout, Space } from 'antd';

const { Header, Footer, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 'auto',
  paddingInline: '0px',
  lineHeight: '120px',
  backgroundColor: '#7dbcea',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: '100vh',
  lineHeight: 'normal',
  color: '#fff',
  backgroundColor: '#108ee9',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#001529',
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [results, setResults] = useState([]);
  const [searchType, setSearchType] = useState('Movies');
  const navigate = useNavigate();

  window.addEventListener('beforeunload', () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
  });

  useEffect(() => {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    if (email && password) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      navigate('/login');
    }
  }, [navigate]);

  return (
    <Space
      direction="vertical"
      style={{
        width: '100%',
      }}
      size={[0, 48]}
    >
      <Layout>
        <Header style={headerStyle}>
          <Navbar
            results={results}
            setResults={setResults}
            searchType={searchType}
            setSearchType={setSearchType}
          />
        </Header>
        <Content style={contentStyle}>
          <Routes>
            <Route
              path="/"
              element={<Home results={results} searchType={searchType} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/tv/:id" element={<TvShowDetails />} />
            <Route path="/actor/:id" element={<ActorDetails />} />
          </Routes>
        </Content>
        <Footer style={footerStyle}>
          <p>Movie Search App</p>
        </Footer>
      </Layout>
    </Space>
  );
}

export default App;
