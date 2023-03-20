import { useNavigate, useLocation } from 'react-router-dom';
import { LogoutOutlined } from '@ant-design/icons';

function Logout({ setResults }) {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === '/login') return null;

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    setResults([]);
    navigate('/login');
  };

  return (
    <div>
      <button
        onClick={handleLogout}
        style={{
          border: 'none',
          background: 'none',
          fontSize: '24px',
          color: 'white',
        }}
      >
        <LogoutOutlined />
      </button>
    </div>
  );
}

export default Logout;
