import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import "../../components/navigation/Nav.css";
import SideMenu from "../navigation/sideMenu/SideMenu";
import NavList from "./NavList";

const Nav = (props) => (
    <header className="toolbar">
        <nav className="toolbar_navigator">
            <div />
            <div className="toggle-btn">
                <SideMenu click={props.drawerToggleClickHandler} />
            </div>
            <div className="toolbar_logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <NavList />
            </div>
        </nav>
    </header>
);

export default Nav;
