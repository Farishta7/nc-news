import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
        <Link to={'/'}>
        <h1 className="header" >NC News</h1>
        </Link>
        </>
    )
  };
  
export default Header;