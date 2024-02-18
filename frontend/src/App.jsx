import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Outlet,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewTicket from "./pages/NewTicket";

import { store } from "./app/store";
import { Provider } from "react-redux";
import Private from "./components/Private";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <div className='container'>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />

              <Route path='/new-ticket' element={<Private />}>
                <Route path='/new-ticket' element={<NewTicket />} />
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
        <ToastContainer />
      </Provider>
    </>
  );
}

export default App;
