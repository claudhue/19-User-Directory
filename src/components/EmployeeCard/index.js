import React from "react";

function EmployeeCard(props) {
  console.log("EmployeeCard props: ", props);
  return (
    <div className="container">
      <div className="row row-cols-4">
        <img className="card-img-top" src={props.image} alt="pic"/>
        <div className="col"></div> {props.firstName} {props.lastName}
        <div className="col"></div> {props.phone}
        <div className="col"></div> {props.email}
        <div className="col"></div> {props.empNum}
      </div>
    </div>
  );
}
export default EmployeeCard;