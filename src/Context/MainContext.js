import React, {  createContext, useContext, useState } from 'react';
import { api } from '../Api_Keys';
import axios from 'axios';

const productContext = createContext()
export const useProductContext = () => useContext(productContext)

const MainContext = ({children}) => {
  const [data, setdata] = useState([])
  const [Name, setName] = useState("")
  const [Age, setAge] = useState("")

  async function setData(newObj){
    await axios.post(api, newObj)
  }
  async function rebootData(){
    let {data} = await axios(api)
    setdata(data)
  }

    async function newEditData(id,newEditObj){
      await axios.patch(`${api}/${id}`,newEditObj)
    }

  let values = {
    newEditData,
    data,
    setData,
    rebootData,
    Name,
    Age,
    setAge,
    setName,
  }
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default MainContext;