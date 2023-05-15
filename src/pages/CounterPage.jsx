import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/CounterSlice";
import { useState } from "react";

function CounterPage() {
    const { number } = useSelector((state) => state.counter);

    const dispatch = useDispatch()
    // console.log(dispatch(increment()))
    // console.log(dispatch(decrement()))

    const [formValue, setFormValue] = useState(0)
    return <div className="container">
        <h1>Counter page</h1>
        <h4>Current Counter state is : {number}</h4>
        <input type="text" placeholder="enter any value" value={formValue} onChange={(e) => setFormValue(e.target.value)} />
        <hr />
        <button className="btn btn-primary mx-2" onClick={() => dispatch(increment(Number(formValue)))} >+</button>
        <button className="btn btn-danger " onClick={() => dispatch(decrement(Number(formValue)))}>-</button>
    </div>
}

export default CounterPage;