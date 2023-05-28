import "./Footer.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="dev-icon footer-text"
        >
          <path d="m18 16 4-4-4-4"></path>
          <path d="m6 8-4 4 4 4"></path>
          <path d="m14.5 4-5 16"></path>
        </svg>
      </div>
      <p className="footer-text">
        Built by{" "}
        <Link href={"https://brinkley.dev"} target="_blank" className="footer-link">
          <u>
            <b>Brinkley</b>
          </u>
          .
        </Link>{" "}
        Source code on{" "}
        <Link href={"https://github.com/brinkhill/portfolio"} target="_blank" className="footer-link">
          <u>
            <b>Github</b>
          </u>
        </Link>
        .
      </p>
    </footer>
  );
}