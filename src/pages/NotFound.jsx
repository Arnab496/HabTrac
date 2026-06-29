import { Link } from "react-router-dom";

function NotFound() {

    return (

        <div className="container" style={{textAlign:"center"}}>

            <h1 style={{fontSize:"100px"}}>404</h1>

            <h2>Page Not Found</h2>

            <Link to="/">

                <button style={{
                    marginTop:"30px",
                    padding:"15px 30px"
                }}>
                    Go Home
                </button>

            </Link>

        </div>

    );

}

export default NotFound;