import { useSelector } from "react-redux";

function App() {

  const { number, userName } = useSelector((state) => state.counter)
  useSelector((state) => console.log(state))
  return (
    <div className="container">
      <h1>hello redux</h1>
      <h2>{number}</h2>
    </div>
  );
}

export default App;
