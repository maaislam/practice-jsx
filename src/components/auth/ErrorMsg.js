import React from "react";

const ErrorMsg = ({ err }) => {
  return (
    <>
      {err ? (
        <div className="ui error message">
          <div className="header">Action Forbidden</div>
          <p>{err}</p>
        </div>
      ) : null}
    </>
  );
};

export default ErrorMsg;
