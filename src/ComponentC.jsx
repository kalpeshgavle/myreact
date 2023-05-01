import React, { useContext } from "react";
import { DataContext } from "./App";

export default function ComponentC() {

    const { user, cart } = useContext(DataContext)

    return <>
        <div>
            <p>Hello {user}, Your cart items : {cart}</p>
        </div>
    </>
}