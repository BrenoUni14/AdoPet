import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import PetFinder from "../pages/PetFinder";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import { PetRegister } from '../pages/PetRegister';
import { CompanyRegister } from '../pages/CompanyRegister';


export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/petfinder" element={<PetFinder />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/petregister" element={<PetRegister />} />
                <Route path="/companyregister" element={<CompanyRegister />} />
            </Routes>
        </BrowserRouter>
    );
}

