import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="site-header">
      <h1 className="site-name">
        <Link to="/">The Foxy movies of 2021 🍿</Link>
      </h1>
    </header>
  )
}