import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/">All Articles</Link>
      {" | "}
      <Link to="/topics">All Topics</Link>
    </nav>
  );
};

export default Nav;
