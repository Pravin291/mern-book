import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./pages/About.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Header from "./components/Header.jsx";

import MyFooter from "./components/MyFooter.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Dashboard from "./Dashboard/Dashboard.jsx";
import UploadBook from "./Dashboard/UploadBook.jsx";
import Shop from "./shop/Shop.jsx";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute.jsx";
import ManageBooks from "./Dashboard/Managebook.jsx";
import EditBook from "./Dashboard/EditBook.jsx";
import SingleBook from "./shop/SingleBook.jsx";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/singlebook/:bookId" element={<SingleBook />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path="/dashboard/uploadbook" element={<UploadBook/>}/>
          <Route path="/dashboard/managebook" element={<ManageBooks/>}/>
          <Route path="/dashboard/editbook/:bookId" element={<EditBook/>}/>
        </Route>
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
