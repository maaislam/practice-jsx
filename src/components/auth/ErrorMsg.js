import React from 'react';

const ErrorMsg = (props) => {
  const { err, setErr } = props.err;
  return (
    <>
      {err ? (
        <div className='ui error message'>
          <i className='close icon' onClick={() => setErr(null)} />
          <div className='header'>Action Forbidden</div>
          <p>{err}</p>
        </div>
      ) : null}
    </>
  );
};

export default ErrorMsg;
