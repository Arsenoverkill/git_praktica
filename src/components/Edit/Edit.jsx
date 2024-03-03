import React, { useEffect, useState } from "react";
import "../admin/Admin.css";
import { useProductContext } from "../../Context/MainContext";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { data, newEditData } = useProductContext();
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  function setEditData() {
    let newArr = data.filter((el) => {
      return el.id == id;
    });
    newArr.map((el) => {
      setAge(el.age);
      setName(el.name);
    });
  }
  function saveData() {
    let newObjEdit = {
      name,
      age,
    };
    newEditData(id, newObjEdit);
  }

  useEffect(() => {
    setEditData();
  }, []);

  return (
    <div className="inputs">
      <input
        type="text"
        placeholder="Name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age..."
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button
        onClick={() => {
          saveData();
          navigate("/home");
        }}
      >
        Save
      </button>
    </div>
  );
};

export default Edit;
