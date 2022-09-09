import axios from "axios";
import * as React from "react";
import Table from "react-bootstrap/Table";

export const DisplayData = ({ pros }) => {
  console.log(pros);

  const deletingElement = (ind) => {
    // pros.splice(ind,1)
    // setListdata([...pros])

    axios
      .delete(`http://localhost:8080/details/${ind}`)
      .then((res) => {
        //   setNewdata(res.data);
        pros.getdata();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Vehicle Name</th>
            <th>Velicle Number</th>
            <th>Parking Date</th>
            <th>Outlets</th>
            <th>Remove</th>
          </tr>
          {pros.newdata.map((ele, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{ele.vehicleName}</td>
              <td>{ele.vehicleNumber}</td>
              <td>{ele.dateOfParking}</td>
              <td>{ele.Outlets}</td>
              <td>
                <button
                  onClick={() => {
                    deletingElement(ele.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </thead>
      </Table>
    </div>
  );
};
