// @flow
import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/_search.scss';


const Search = () => (
  <div className="search">
    <div className="container">
      <input type="text" placeholder="Search" />
      <Link to="/">
        <div className="btn-search" />
      </Link>
    </div>
  </div>
);
export default Search;
