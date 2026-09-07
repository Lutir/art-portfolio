import Link from "next/link";
import { blog } from "@/data/site";
export default function Footer() {
  return (
    <footer className="site-footer">
      <Link className="footer-name" href="/">
        RITUL JAIN
      </Link>
      <div className="footer-bottom">
        <span>SEATTLE, WA</span>
        <div>
          <a href={blog} target="_blank" rel="noreferrer">
            BLOG ↗
          </a>
        </div>
        <span>© {new Date().getFullYear()} RITUL JAIN</span>
      </div>
    </footer>
  );
}
