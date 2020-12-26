// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, { useState } from 'react';
import Dropdown from './Dropdown';
import { motion } from 'framer-motion';
import PageTransition from '../components/pages/PageTransition';
import PageVariants from '../components/pages/PageVariants';

import ConvertLanguage from './ConvertLanguage';

const options = [
  {
    label: 'Afrikaans',
    value: 'af',
  },
  {
    label: 'Arabic',
    value: 'ar',
  },
  {
    label: 'Hindi',
    value: 'hi',
  },
  {
    label: 'Dutch',
    value: 'nl',
  },
];
const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <motion.div
      exit='out'
      animate='in'
      initial='initial'
      variants={PageVariants}
      transition={PageTransition}
    >
      <div className='ui form segment container'>
        <div className='field'>
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        headLabel='Select a Language'
        options={options}
        selectedOption={language}
        onSelectionChange={setLanguage}
      />
      <ConvertLanguage language={language} text={text} />
    </motion.div>
  );
};

export default Translate;
