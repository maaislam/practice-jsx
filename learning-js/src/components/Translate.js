
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, { useState } from "react";
import Dropdown from "./Dropdown";


import ConvertLanguage from "./ConvertLanguage"

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Dutch",
    value: "nl",
  }
];
const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('')

  return (
    <React.Fragment>
    <div className="ui form segment container">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
    </div>
    <Dropdown
      headLabel="Select a Language"
      options={options}
      selectedOption={language}
      onSelectionChange={setLanguage}
    />
    <ConvertLanguage language={language} text={text}/>
        
    </React.Fragment>
  );
};

export default Translate;
