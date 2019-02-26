import React from 'react';
import { Link } from 'react-router-dom';

const Search = () => (
  <div className="search">
    <div className="container">
      <img src="" alt="" />
      <input type="text" placeholder="Search" />
      <Link to="/" className="gnome">
        <div className="btn-search">
          <img src="" alt="" />
        </div>
      </Link>
    </div>
  </div>
);
export default Search;
