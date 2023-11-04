import Container from "../Ui/Container";
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
        </div>
    );
};

export default MainLayout;