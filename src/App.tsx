import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Parcel from "./pages/parcel/Parcel";
import ParcelDetails from "./pages/parcel/ParcelDetails";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate replace to={"/parcel"} />} />
        <Route path="parcel" element={<Parcel/>} />
        <Route path="/parcel/:id" element={<ParcelDetails />} />
      </Routes>
    </div>
  );
}

export default App;
