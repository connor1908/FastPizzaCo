import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className =
    "text-sm text-blue-500 transition-colors hover:text-blue-600 hover:underline";

  //for button
  if (to === "-1")
    return (
      <button className={className} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  //for Link
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
