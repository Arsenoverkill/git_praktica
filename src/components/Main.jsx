import React, { useEffect } from "react";
import "./Main.css";
import { useProductContext } from "../Context/MainContext";
import { NavLink } from "react-router-dom";

const Main = () => {
  const { data, rebootData } = useProductContext();

  useEffect(() => {
    rebootData();
  }, [data]);

  // Kutman

  return (
    <div className="main">
      {data.map((el) => (
        <div
          style={{
            margin: "20px 0 0 20px",
          }}
        >
          <h3>{el.name}</h3>
          <h4
            style={{
              margin: "10px 0",
            }}  
          >
            {el.age}
          </h4>
          <NavLink to={`edit/${el.id}`}>
          <button>edit</button>
          </NavLink>
          <button
            style={{
              margin: "0 10px",
            }}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Main;
