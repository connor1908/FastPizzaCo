import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block font-semibold uppercase transition-colors bg-yellow-400 rounded-full disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring focus-visible:ring-yellow-500 text-stone-800 hover:bg-yellow-500";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-sm",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "inline-block font-semibold uppercase transition-colors border-2 border-stone-300 rounded-full disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring focus-visible:ring-stone-400 text-stone-400 hover:bg-stone-300 px-4 py-3 md:px-6 md:py-4 hover:text-stone-800",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button
      onClick={onClick ? onClick : null}
      disabled={disabled}
      className={styles[type]}
    >
      {children}
    </button>
  );
}

export default Button;
