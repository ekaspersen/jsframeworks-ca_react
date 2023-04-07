import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Linking from "./components/Linking";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <BrowserRouter>
            <ToastContainer />
            <Header />
            <Linking />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
