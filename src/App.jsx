import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Linking from "./components/Linking";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Linking />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
