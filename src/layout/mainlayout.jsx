import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout(){
    return(
        <div className='min-h-screen relative overflow-hidden w-screen'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
    