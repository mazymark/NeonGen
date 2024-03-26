import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useEffect } from "react";
export default function PageNotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, [navigate]);
  return (
    <>
      <NavBar />
      <p className="page-not-found">
        404 - Page Not Found
        <br />
        <br />
        The page you are looking for does not exist or has been moved. You will
        be redirected to the Home Page shortly.
      </p>
    </>
  );
}
