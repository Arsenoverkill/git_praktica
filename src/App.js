import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components";
import Edit from "./components/Edit/Edit";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Admin from "./components/admin/Admin";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Routes>
        <Route path="/admin" element={<Admin/>} key={1}/>
        <Route path="/edit/:id" element={<Edit />} key={2}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
