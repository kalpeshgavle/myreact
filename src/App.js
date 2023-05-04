import React, { useState, createContext } from "react";
import Form from "./Component/Form";
import Table from "./Component/Table";


export const WrapperContext = createContext()
function App() {


  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [city, setCity] = useState("")
  const [tableData, setTableData] = useState([])

  // for delete

  function deleteValue(id) {
    // alert(id)
    const newData = tableData.filter((item) => item.id !== id)
    setTableData(newData)
  }


  // for edit
  const [isEdit, setIsEdit] = useState(false)
  const [isId, setIsId] = useState(null)

  function dataEdit(item) {
    const { id, firstName, lastName, city } = item
    setIsEdit(true);
    setIsId(id)
    setCity(city)
    setFirstName(firstName)
    setLastName(lastName)
  }


  function handleEdit(e) {
    e.preventDefault()
    const editedItems = tableData.map((item) => {
      if (item.id === isId) {
        return { ...item, firstName, lastName, city }
      } else {
        return item
      }
    })
    setTableData(editedItems)
    setIsEdit(false)
    setFirstName("")
    setCity("")
    setLastName("")
  }

  return (
    <WrapperContext.Provider value={{ firstName, setFirstName, lastName, setLastName, city, setCity, tableData, setTableData, deleteValue, isEdit, setIsEdit, dataEdit, handleEdit }}>
      <Form />
      <Table />
    </WrapperContext.Provider>
  );
}

export default App;
