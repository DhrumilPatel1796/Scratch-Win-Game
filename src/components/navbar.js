import { Outlet, Link } from "react-router-dom";
const navbar = () => {
    return (
        <>
            <header id="nav-logo">
                <section id="logo-container" class="large-3 medium-4 small-12 cell logo">
                    <a href="/"><img class="logo" src={require('../images/png/logo.png')}/></a>
                </section>
                <nav id="nav-buttons" class="large-9 medium-8 small-12">
                <Link to="/"><input type="button" value="Home" id=""></input></Link>
                <Link to="/form"><input type="button" value="Form" id=""></input></Link>
                <Link to="/legal"><input type="button" value="Legal" id=""></input></Link>
                <Link to="/results"><input type="button" value="Results" id=""></input></Link>
                <Link to="/contest"><input type="button" value="Play To Win" id="play"></input></Link>
                </nav>
            </header>
        <Outlet />
        
    </>
    )
};

export default navbar;