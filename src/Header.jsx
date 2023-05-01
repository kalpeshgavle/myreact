import React, { useContext } from "react";
import { DataContext } from './App';



export default function Header() {
    const { user } = useContext(DataContext)
    return <>
        <h1>User Name : {user}</h1>
    </>
}