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
        <Link to="/documents/PatioLandscapingGuidelines.pdf">
          Patio Landscaping Guidelines
        </Link>
      </li>
      <li>
        <Link to="/documents/Homewoner & Tenant Info Form.pdf">
          Homewoner & Tenant Info Form
        </Link>
      </li>
      <li>
        <Link to="/newsletters/q1_2023.pdf">Q1 2023 Newsletter</Link>
      </li>
      <li>
        <Link to="/newsletters/Westport Townhomes March Notice.pdf">
          Westport Townhomes March Notice
        </Link>
      </li>
    </ul>
  );
}
