import React from "react";

function Navbar(props) {
  console.log("prop", props);

  const changeHandler = (e) => {
    props.setSearch(e.target.value);
    console.log("search value", props.imageData);
  };
  const clickHandler = (e) => {
    e.preventDefault();
    console.log("k clicked");
    props.setSent(!props.sent);
  };
  return (
    <div>
      <nav
        className="navbar  justify-content-between"
        style={{ backgroundColor: "  #17151B" }}
      >
        <p
          className="navbar-brand"
          style={{
            color: "#fff",
            fontWeight: "700",
            paddingTop: "1rem",
            fontSize: "2rem",
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
            onChange={changeHandler}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            style={{ color: "#fff", borderColor: "#fff", fontWeight: "800" }}
            onClick={clickHandler}
          >
            Search
          </button>
        </form>
      </nav>
    </div>
  );
}

export default Navbar;
