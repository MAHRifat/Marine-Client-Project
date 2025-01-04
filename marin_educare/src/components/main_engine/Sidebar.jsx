import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ topics }) {
  return (
    <div style={{ width: "250px", backgroundColor: "#f8f9fa", height: "100vh", padding: "15px" ,marginTop: "4rem"}}>
      <h5>Topics</h5>
      <ul className="list-unstyled">
        {topics.map((topic) => (
          <li key={topic.id}>
            <Link
              to={`/main_engine/${topic.id}`}
              style={{ cursor: "pointer", color: "#007bff", textDecoration: "none" }}
            >
              {topic.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
