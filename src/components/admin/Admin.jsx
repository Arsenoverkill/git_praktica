import React, {  useState } from "react";
import "./Admin.css";
import { useProductContext } from "../../Context/MainContext";

const Admin = () => {
    const {setData} = useProductContext()

    const [name , setName] = useState('')
    const [age , setAge] = useState('')

    function creatData(){
        let newObj = {
            name,
            age,
        }
        setData(newObj)
    }

  return (
    <div className="inputs">
      <input type="text" placeholder="Name..." value={name}  onChange={(e)=>setName(e.target.value)}/>
      <input type="number" placeholder="Age..." value={age} onChange={(e)=>setAge(e.target.value)} />
      <button onClick={creatData}>Create</button>
    </div>
  );
};

export default Admin;
