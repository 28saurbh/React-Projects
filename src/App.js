// import Newsapp from './news-application/components/Index'
// import Bitcoin_Exchange_converter from './Bitcoin-exchange-converter/components/index';
// import UnitConverter from './unit-converter/components/index'
// import Money_Exchange from './Money-exchange/components/Index';
import { Route, Routes, Link } from "react-router-dom";
import Login_logout from "./Login-Logout/index"
import Success from "./Login-Logout/success";
// import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
// import NewsAPP from './pages/News_application';



function App() {
    return (
        <>

            {/* <Newsapp /> */}
            {/* { <Bitcoin_Exchange_converter />} */}
            {/* { <UnitConverter />} */}
            {/* {<Money_Exchange />} */}

            {/* <Routes>
                <Route path="/" element={<Login_logout />} />
                <Route path="/user/:userid" element={<Success />} />
                <Route path="*" element={<NotFound />} /> 
            </Routes> */}

            
        </>
    );
}

export default App;
