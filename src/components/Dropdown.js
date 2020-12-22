import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({headLabel, options, onSelectionChange, selectedOption }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (e) => {
      
      if (ref.current && ref.current.contains(e.target) ) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  });

  const renderedOptions = options.map((option) => {
    if (option.value === selectedOption.value) {
      return null;
    } else {
      return (
        <div
          onClick={() => onSelectionChange(option)}
          key={option.value}
          className="item"
        >
          {option.label}
        </div>
      );
    }
  });

  return (
    <div ref={ref} className="ui form segment container">
      <div className="field">
        <label className="label">{headLabel}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selectedOption.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
