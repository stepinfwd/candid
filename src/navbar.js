import React from "react";

function Navbar(props) {
  console.log("prop", props);
  return (
    <div>
      <nav
        className="navbar  justify-content-between"
        style={{ backgroundColor: "  #2e151b" }}
      >
        <p
          className="navbar-brand"
          style={{
            color: "#fff",
            fontWeight: "700",
            paddingTop: "1rem",
            fontSize: "2rem",
            marginLeft: "2rem",
            letterSpacing: ".1rem",
          }}
        >
          <img className="logo-style" alt="" />
          Grid.
        </p>

        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            style={{ color: "#fff", borderColor: "#fff", fontWeight: "800" }}
          >
            Search
          </button>
        </form>
      </nav>
    </div>
  );
}

export default Navbar;
