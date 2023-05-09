import React, { useState, createContext } from "react";
import Form from "./Component/Form";
import Table from "./Component/Table";


function getLocalStorage() {
  const tableData = localStorage.getItem("tableData")
  if (tableData) {
    return JSON.parse(tableData)
  } else { return [] }
}

export const WrapperContext = createContext()
function App() {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [city, setCity] = useState("")
  const [tableData, setTableData] = useState(getLocalStorage())

  // for delete
  function deleteValue(id) {
    // alert(id)
    const newData = tableData.filter((item) => item.id !== id)
    setTableData(newData)
    localStorage.setItem('tableData', JSON.stringify(newData))
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
    if (firstName !== "" && lastName !== "" && city !== "") {
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
      localStorage.setItem('tableData', JSON.stringify(editedItems))

    } else { alert("please enter value") }
  }
  return (
    <WrapperContext.Provider value={{ firstName, setFirstName, lastName, setLastName, city, setCity, tableData, setTableData, deleteValue, isEdit, setIsEdit, dataEdit, handleEdit }}>
      <Form />
      <Table />
    </WrapperContext.Provider>
  );
}

export default App;
