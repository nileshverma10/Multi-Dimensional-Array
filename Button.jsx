import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/form";
import "bootstrap/dist/css/bootstrap.min.css";

export const Button = () => {
  const [data, setData] = useState([]);
  //   const handleClick = () => {
  //     axios
  //       .get("https://techreviewers.co/admin/api/countries-get")
  //       .then((res) => {
  //         const result = setData(res.data.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

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
      <div>
        <div className="dropdown">
          <Form.Select aria-label="Default select example">
            {data.map((option) => (
              <option value={option.id}>{option.name}</option>
            ))}
          </Form.Select>
        </div>
        {/* <input
          type="text"
          placeholder="search th country"
          value={data}
          onChange={(e) => {
            setData(e.target.value);
          }}
        />
        <button>search</button> */}
        {/* <select>
          {data.map((e) => {
            return <option>{e.data.data[0].name}</option>;
          })}
        </select> */}
      </div>
    </>
  );
};
