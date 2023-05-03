import React, { useContext } from "react";
import { WrapperContext } from "../App";


function Table() {
    const { tableData } = useContext(WrapperContext)
    return (
        <div className="container">
            <div className="my-2">
                <table className="table">
                    <thead className=" primary">
                        <tr>
                            <th>Sr No.</th>
                            <th>Fist Name</th>
                            <th>Last Name</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData.map((item, id) => {
                                const { firstName, lastName, city } = item;
                                return (
                                    <tr>
                                        <td>{id + 1}</td>
                                        <td>{firstName}</td>
                                        <td>{lastName}</td>
                                        <td>{city}</td>
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