import React, { useContext, useState } from "react";
import { WrapperContext } from "../App";

function Form() {

    const { firstName, setFirstName, lastName, setLastName, city, setCity, tableData, setTableData } = useContext(WrapperContext)


    function addIteem(e) {
        e.preventDefault();
        // console.log("done", { firstName, lastName, city });
        const formValue = { firstName, lastName, city }
        setTableData([...tableData, formValue])

    }
    console.log(tableData)
    return (
        <div className="container text-center ">
            <form action="">
                <div className="row justify-content-center">
                    <h1>Add your details</h1>
                    <div className="col-8 my-2">
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="col-12 form-control" placeholder="Enter first name" />
                    </div>
                    <div className="col-8 my-2">
                        <input type="text" value={lastName} className="col-12 form-control" onChange={(e) => setLastName(e.target.value)} placeholder="Enter last name" />
                    </div>
                    <div className="col-8 my-2">
                        <input type="text" value={city} className="col-12 form-control" onChange={(e) => setCity(e.target.value)} placeholder="city" />
                    </div>
                    <div className="col-8 my-2">
                        <button onClick={addIteem} className="btn btn-primary col-12">Click to add</button>
                    </div>
                </div >
            </form>
        </div >
    )
}

export default Form;