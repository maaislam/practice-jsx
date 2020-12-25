import React, {useState} from 'react';


import Accordion from '../Accordion';
import Counter from '../Counter';
import Dropdown from '../Dropdown';
import CommentApprovalPage from './CommentApprovalPage';
import Geolocation from '../Geolocation';

const options = [
    {
      label: "This color is red",
      value: "red",
    },
    {
      label: "This color is blue",
      value: "blue",
    },
    {
      label: "This color is green",
      value: "green",
    },
  ];

const RandomPractice = () => {


    const [selectedDropdownItem, setSelectedDropdownItem]=useState(options[0])



    return (
        <div>
            <Accordion/>
            <Counter/>
            <Dropdown
                headLabel="Select a Color"
                options={options}
                onSelectionChange={setSelectedDropdownItem}
                selectedOption={selectedDropdownItem}
            />
            <CommentApprovalPage/>
            <Geolocation/>

        </div>
    );
}

export default RandomPractice;
