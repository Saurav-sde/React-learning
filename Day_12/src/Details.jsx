import { Outlet } from "react-router";
import { Link } from "react-router";
function Details(){
    return (
        <>
            <nav>
                <Link to="/Details">Details</Link>
                <Link to="Hello">Hello</Link>
                <Link to="Hi">Hii</Link>
            </nav>
            <h1>Welcome to Details Page</h1>
            <Outlet></Outlet>
        </>
    )
}
export default Details;