import React from 'react'

export default function NavBar(props) {
  // console.log("genres",props.genres)

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <a className="navbar-brand" href="/">
  <img src="https://img.icons8.com/color/96/000000/imdb.png" width="30" height="30" alt="logo"></img></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Categories
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href="/">All</a>
        <div className="dropdown-divider"></div>
          {
            props.genres && props.genres.genres.map (item => {
              return <a onClick={() => props.onFilterGenres(item.id)} className="dropdown-item" href="#">{item.name}</a>
            })
          }
        </div>
      </li>
    </ul>
    <form onSubmit={e => {
      e.preventDefault()
      props.search(e)
    }} className="form-inline" onChange={event => {
      props.onSetData([])
      props.changeState(event.target.value)
    }}>
    <input className="form-control mr-sm-2" type="search" required autoFocus autoComplete="off" placeholder="Type something..." aria-label="Search" id="search"></input>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
  </div>
</nav>

    )
}
