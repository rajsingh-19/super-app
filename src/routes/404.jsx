import { useRouteError } from "react-router";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    
    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occured.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;
