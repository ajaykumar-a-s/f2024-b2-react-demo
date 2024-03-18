import { Link, Outlet } from "react-router-dom";
import './Layout.css';

export default function Layout() {
    return (
        <>
            <h6> Menu </h6>
            <nav className="navbar navbar-expand-sm bg-secondary navbar-dark">
                <div class="container-fluid">
                    <ul class="navbar-nav">

                        <li class="nav-item">
                            <Link to='/'>Home</Link>
                        </li>

                        <li class="nav-item">
                            <Link to='/accounts'>Accounts</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/demos'>Demos</Link>
                        </li>
                    </ul>
                </div>

            </nav>

            <Outlet></Outlet>
        </>
    )
}