import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Container from "./components/Container";
import Controls from "./components/Controls";
import PrivacyToggle from "./components/PrivacyToggle";
import { useSelector } from "react-redux";

function App() {
  const toggle = useSelector((store) => store.toggle);
  return (
    <center className="px-4 py-5 my-5 text-center">
      <Container>
        <Header></Header>
        <div className="col-lg-6 mx-auto">
          {toggle ? <PrivacyToggle /> : <DisplayCounter />}
          <Controls></Controls>
        </div>
      </Container>
    </center>
  );
}

export default App;