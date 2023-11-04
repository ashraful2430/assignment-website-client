import Container from "../Ui/Container";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom"


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <Container>
                    <Outlet></Outlet>
                </Container>
            </div>
            <div className="mt-[373px]">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;