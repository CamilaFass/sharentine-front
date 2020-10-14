import React from "react";

function LoadingButton() {
  return (
    <button className="btn" type="button" disabled>
      <span
        className="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      ></span>
      <span className="pl-2">Loading...</span>
    </button>
  );
}

export default LoadingButton;
