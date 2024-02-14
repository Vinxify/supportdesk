import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { store } from "./app/store";
// import { Provider } from "react-redux";

function App() {
  return (
    <>
      {/* <Provider store={store}> */}
      <BrowserRouter>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer />
      {/* </Provider> */}
    </>
  );
}

export default App;
