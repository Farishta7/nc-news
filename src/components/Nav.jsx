import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="Nav">
      <Link  to="/">
        All Articles
      </Link>
      {" | "}
      <Link to="/football">
        All Topics
      </Link>
    </nav>
  );
};

export default Nav;