import React, { Component } from 'react';
import axios from 'axios';
import EmployeeCard from "../components/EmployeeCard"

class Directory extends Component {  
    state = {
    employees: []
  }

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=200&nat=us`)
      .then(res => {
        console.log(res)
        const employees = res.data.results;
        this.setState({ employees });
      })
  }

  render() {
    return (
      <div>   
        <div className="container">
          <div className="row row-cols-4">
              <div className="col">Image</div>
              <div className="col">Name</div>
              <div className="col">Phone</div>
              <div className="col">Email</div> 
              <div className="col">Employee Number</div>
          </div>
        </div>
        <div>
            {this.state.employees.map(employee => (
              <EmployeeCard
                firstName={employee.name.first}
                lastName={employee.name.last}
                empNum={employee.login.uuid}
                image={employee.picture.thumbnail}
                email={employee.email}
                key={employee.login.uuid}
              />
            ))}
        </div>
      </div>
    );
  }
}
export default Directory;