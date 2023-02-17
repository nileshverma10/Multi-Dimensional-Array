import React, { useState, useEffect } from "react";
import "./style.css";
import Select from "react-select";
import axios from "axios";

export default function Select1() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://techreviewers.co/admin/api/countries-get")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="app">
        <div className="dropdown-container">
          <Select
            getOptionLabel={(option) => `${option.name}`}
            getOptionValue={(option) => `${option.id}`}
            options={data}
            placeholder="Select Country"
            isSearchable={true}
            isMulti
          />
        </div>
      </div>
    </>
  );
}
