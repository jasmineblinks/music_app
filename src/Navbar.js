import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav className="container flex items-center">
        <div className="nav-links">
          <a>Home</a>
          <a>Collection</a>
          <input type="text" className="search" id="myInput" placeholder="Search" />

          <a>Upload</a>
          <details className="dropdown">
            <summary>
              <span className="select-none">
                Features
                <i className="fa fa-caret-down"></i>
              </span>
            </summary>

            <div className="dropdown-content">
              <a>Music</a>
              <a>Videos</a>
              <a>Amebo zone</a>
            </div>
          </details>
        </div>
        <div className="nav-indicators">
          <button>
            <i className="fas fa-bell"></i>
          </button>
          <button>
            <i className="fas fa-comment-alt"></i>
          </button>
          <button>
            <i className="fas fa-ellipsis-h"></i>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
