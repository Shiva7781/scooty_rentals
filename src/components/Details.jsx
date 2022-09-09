import { useState } from "react";
import axios from "axios";
import "./Details.css";
export const EntryDetails = ({ pros }) => {
  console.log(pros);

  const [adddata, setAdddata] = useState({
    vehicleName: "",
    vehicleNumber: "",
    dateOfParking: "",
    Outlets: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setAdddata({ ...adddata, [name]: value });
  };
  console.log(adddata);
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/details", { ...adddata })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        pros();
      });
  };

  return (
    <form
      className="details"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div>
        vehicleName:{" "}
        <input
          name="vehicleName"
          value={adddata.vehicleName}
          placeholder="Enter vehicleName"
          onChange={(e) => {
            handlechange(e);
          }}
          className="vehicleName"
          required="true"
        />
      </div>

      <div>
        vehicleNumber:{" "}
        <input
          name="vehicleNumber"
          value={adddata.Phone}
          placeholder="Enter vehicleNumber"
          onChange={(e) => {
            handlechange(e);
          }}
          className="vehicleNumber"
          required="true"
        />
      </div>
      <div>
        dateOfParking:{" "}
        <input
          type="date"
          name="dateOfParking"
          value={adddata.dateOfParking}
          placeholder="Enter  date Of Parking"
          onChange={(e) => {
            handlechange(e);
          }}
          className="dateOfParking"
          required="true"
        />
      </div>

      <div>
        Outlets:
        <select
          name="Outlets"
          value={adddata.Outlets}
          onChange={(e) => {
            handlechange(e);
          }}
        >
          <option>Select</option>
          <option value="open">OPEN</option>
          <option value="close">CLOSE</option>
        </select>
      </div>

      <div>
        <input className="submit" type="submit" value="Submit" />
      </div>
    </form>
  );
};
