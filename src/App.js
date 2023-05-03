import React, { useState, createContext } from "react";
import Form from "./Component/Form";
import Table from "./Component/Table";


export const WrapperContext = createContext()
function App() {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [city, setCity] = useState("")
  const [tableData, setTableData] = useState([])

  return (
    <WrapperContext.Provider value={{ firstName, setFirstName, lastName, setLastName, city, setCity, tableData, setTableData }}>
      <Form />
      <Table />
    </WrapperContext.Provider>
  );
}

export default App;
