import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageVariants from './PageVariants';
import PageTransition from './PageTransition';

import Accordion from '../Accordion';
import Counter from '../Counter';
import Dropdown from '../Dropdown';
import CommentApprovalPage from './CommentApprovalPage';
import Geolocation from '../Geolocation';

const options = [
  {
    label: 'This color is red',
    value: 'red',
  },
  {
    label: 'This color is blue',
    value: 'blue',
  },
  {
    label: 'This color is green',
    value: 'green',
  },
];

const RandomPractice = () => {
  const [selectedDropdownItem, setSelectedDropdownItem] = useState(options[0]);

  return (
    <motion.div
      exit='out'
      animate='in'
      initial='initial'
      variants={PageVariants}
      transition={PageTransition}
    >
      <Accordion />
      <Counter />
      <Dropdown
        headLabel='Select a Color'
        options={options}
        onSelectionChange={setSelectedDropdownItem}
        selectedOption={selectedDropdownItem}
      />
      <CommentApprovalPage />
      <Geolocation />
    </motion.div>
  );
};

export default RandomPractice;
