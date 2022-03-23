import React from "react";

function PostCard({ json_ID, json_body, json_title }) {
  return (
    <div className="card border-secondary my-2">
      <ul className="list-group list-group-flush">
        <li className="list-group-item text-secondary">{json_ID}</li>
        <li className="list-group-item card-title display-6 text-danger">
          {json_title}
        </li>
        <li className="list-group-item card-text blockquote">{json_body}</li>
      </ul>
    </div>
  );
}

export default PostCard;
