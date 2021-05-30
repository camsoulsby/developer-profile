import React from "react";
import './PageContent.css';

export default function PageContent(props) {
  return (
    <div className="content-container">
      <div className="content-header-wrapper">
<h1>{props.header}</h1>
      </div>
      <div className="content-body-wrapper">
        <p>{props.content}</p>
      </div>
    </div>
  );
}
