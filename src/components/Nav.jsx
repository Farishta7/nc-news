import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="Nav">
      <Link className="Link" to="/">
        All Articles
      </Link>
      {" | "}
      <Link className="Link" to="/topics">
        Topics
      </Link>
    </nav>
  );
};

export default Nav;