import React, { useContext } from "react";
import { WrapperContext } from "../App";


function Table() {
    const { tableData, deleteValue, dataEdit } = useContext(WrapperContext)
    return (
        <div className="container">
            <div className="my-2">
                <table className="table ">
                    <thead className="table-primary">
                        <tr>
                            <th>Sr No.</th>
                            <th>Fist Name</th>
                            <th>Last Name</th>
                            <th>City</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData.map((item, index) => {
                                const { firstName, lastName, city, id } = item;
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{firstName}</td>
                                        <td>{lastName}</td>
                                        <td>{city}</td>
                                        <td> <button onClick={() => deleteValue(id)} className="btn btn-danger">Delete</button>
                                            <button className="btn btn-warning mx-2 " onClick={() => dataEdit(item)}>Edit</button></td>
                                    </tr>

                                )
                            })

                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;