import React from 'react'
import { Link } from "react-router-dom"

export default class Search extends React.Component {

  render() {
    
    return <div className="search">
    <div className="container">
      <img src="" alt="" />
      <a>aaaa</a>
      <input type="text" placeholder="Search" />
      <Link to={'/detail'} className="gnome">
        <div className="btn-search">
          <img src="" alt="" />
        </div>
      </Link>
    </div>
  </div>
  }

}