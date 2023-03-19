import Menu from './Menu';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom';
// import AddResources from './Pages/AddWorkshops';
import './Lms.css'
const LMS = () => {
    return (
        <div lms>
            <Menu />

            <div className="container my-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/Login' element={<Login />}/>
                    <Route path='/SignUp' element={<SignUp />}/>
                    {/* <Route path="/workshops" element={<WorkshopsList/>} />
                    <Route path="/AddWorkshops" element={<AddResources/>}></Route> */}
                </Routes>
            </div>
        </div>
    );
};

export default LMS;