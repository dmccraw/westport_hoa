import { Link } from "gatsby";
import * as React from "react";

export default function Home() {
  return (
    <ul>
      <li>
        <Link to="/documents/Bylaws.pdf">Bylaws</Link>
      </li>
      <li>
        <Link to="/documents/CC&Rs.pdf">CC&R's</Link>
      </li>
      <li>
        <Link to="/documents/Community Handbook.pdf">Community Handbook</Link>
      </li>
      <li>
        <Link to="/documents/Patio Landscaping Guidelines.pdf">
          Patio Landscaping Guidelines
        </Link>
      </li>
    </ul>
  );
}
