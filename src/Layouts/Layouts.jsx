import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

export default function Layouts() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}
