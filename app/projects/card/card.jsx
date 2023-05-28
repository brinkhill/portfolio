import "./card.css";
import Link from "next/link";

export default function Card() {
  return (
    <div className="cards">
      <div>
        <div className="project-title">Discrr | Disc Ratings & Reviews</div>
        <div class="card-groups">
          <div class="card-group" data-index="1" data-status="active">
            <div class="little-card card"></div>

            <div class="little-card card"></div>

            <div class="little-card card"></div>

            <div class="little-card card"></div>
            <Link href="https://discrr.com" class="big-card card"></Link>
          </div>
        </div>
        <p className="hover-warning">hover for tech stack</p>

        <div className="info-text">
          <Link href="https://discrr.com">
            🚀 <span className="site-link"> discrr.com</span>
          </Link>
          |
          <Link href="https://github.com/brinkhill/discrr">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="github-icon"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </Link>
        </div>
      </div>
      <div>
        <div className="project-title">Apex Collision Center</div>
        <div class="card-groups">
          <div class="card-group" data-index="2" data-status="active">
            <div class="little-card card"></div>

            <div class="little-card card"></div>

            <div class="little-card card"></div>

            <div class="little-card card"></div>
            <Link href="https://apexcollisioncenters.com" class="big-card card"></Link>
          </div>
        </div>
        <p className="hover-warning">hover for tech stack</p>

        <div className="info-text">
          <Link href="https://apexcollisioncenters.com">
            🚀 <span className="site-link">apexcollisioncenters.com</span>
          </Link>
          |
          <Link href="https://github.com/brinkhill/apex-collision-centers">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="github-icon"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
