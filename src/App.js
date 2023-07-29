import Main from "./pages/Main";
import { data } from "./helper/data";
import "./App.css";

function App() {
  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <Main data={data} />
    </div>
  );
}

export default App;