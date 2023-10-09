import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/">Explore All Articles</Link>
      {" | "}
      <Link to="/topics">Explore All Topics</Link>
      
    </nav>
  );
};

export default Nav;
