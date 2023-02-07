import { BrowserRouter } from "react-router-dom";
import "mdb-ui-kit/css/mdb.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HeaderComponent from "./Components/Header/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />;
      <FooterComponent />
    </BrowserRouter>
  );
}
export default App;
