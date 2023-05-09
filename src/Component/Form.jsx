import React, { useContext, useState } from "react";
import { WrapperContext } from "../App";

function Form() {

    const { firstName, setFirstName, lastName, setLastName, city, setCity, tableData, setTableData, isEdit, handleEdit } = useContext(WrapperContext)


    function addIteem(e) {
        e.preventDefault();
        if (firstName !== "" && lastName !== "" && city !== "") {
            const date = new Date();

            // console.log(tableData)
            console.log("done", { firstName, lastName, city });
            const formValue = { id: date.getTime(), firstName, lastName, city }
            setTableData([...tableData, formValue])
            localStorage.setItem('tableData', JSON.stringify([...tableData, formValue]))
            setFirstName('')
            setLastName('')
            setCity('')
        }
        else {
            alert('please enter some inputs ')
        }
    }
    console.log(tableData)
    return (
        <div className="container text-center ">
            <form action="">
                <div className="row justify-content-center">
                    <h1>Add your details</h1>
                    <div className="col-8 my-2">
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="col-12 form-control" placeholder="Enter first name" required />
                    </div>
                    <div className="col-8 my-2">
                        <input type="text" value={lastName} className="col-12 form-control" onChange={(e) => setLastName(e.target.value)} placeholder="Enter last name" required />
                    </div>
                    <div className="col-8 my-2">
                        <input type="text" value={city} className="col-12 form-control" onChange={(e) => setCity(e.target.value)} placeholder="city" required />
                    </div>
                    <div className="col-5 my-2">{
                        isEdit ? <button onClick={handleEdit} className="btn btn-warning col-12">Edit</button> : <button onClick={addIteem} className="btn btn-primary col-12">Click to add</button>
                    }
                    </div>
                </div >
            </form>
        </div >
    )
}

export default Form;