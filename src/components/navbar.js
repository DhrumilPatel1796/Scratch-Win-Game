import { Outlet, Link } from "react-router-dom";
const navbar = () => {
    return (
        <>
            <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/form">Form</Link></li>
                <li><Link to="/legal">Legal</Link></li>
                <li><Link to="/results">Results</Link></li>
                <li><Link to="/contest">Contest</Link></li>
            </ul>
        </nav>
        <Outlet />
    </>
    )
};

export default navbar;