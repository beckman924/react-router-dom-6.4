import { useRouteError, Link } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{error.statusText || error.message}</p>

      <Link to="/">Go to the homepage</Link>
    </div>
  );
};

export default NotFound;
