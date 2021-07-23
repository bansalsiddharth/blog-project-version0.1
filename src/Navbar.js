import { Link } from 'react-router-dom';

const Navbar  = () => {
  return ( 
      <nav className="navbar">
          <h1>EasyDeV_
          </h1>
          <div className="links">
              <Link to="/">Home</Link>
              <Link to="/create">New Blog</Link>
              <Link to="/JsBlogs">Javascript</Link>
          </div>
      </nav>
  );
}
 
export default Navbar ;