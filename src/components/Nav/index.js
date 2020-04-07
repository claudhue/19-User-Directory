import React from "react";
import "../../index.css"


function Navbar() {
  return (
    <section className="jumbotron jumbotron-fluid text-center">
      <div className="container">
        <h6 className="display-4">Employee Directory</h6>
        <p>click on carrots to sort by heading or use the search bar to narrow your results</p>
        <span className="border-bottom border-danger"></span>
      </div>
    </section>
  );
}

export default Navbar;
