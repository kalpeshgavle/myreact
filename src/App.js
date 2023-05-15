import Navbar from "./component/Navbar";
import CounterPage from "./pages/CounterPage";

function App() {

  // const { number, userName } = useSelector((state) => state.counter)
  // useSelector((state) => console.log(state))
  return (
    <div className="container">
      <Navbar />
      <CounterPage />
    </div>
  );
}

export default App;
