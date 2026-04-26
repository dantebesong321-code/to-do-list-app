import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <p>Oops! This page doesn’t exist.</p>
      <Link to="/">Go back to Dashboard</Link>
    </div>
  );
}

export default NotFoundPage;
