import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className='text-center'>
            <h1 className="text-[400px] font-bold">404</h1>
            <h2 className="text-5xl font-bold font-poppins">NOT FOUND</h2>
            <button className="btn"><Link to="/">Go back</Link></button>
        </div>
    );
};

export default ErrorPage;