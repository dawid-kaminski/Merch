import React from 'react';
import Arrow from '../assets/icon-arrow.png'
import Bin from '../assets/icon-bin.png'
import Text from '../assets/icon-text.png'

function DesignItem(props) {
  return(
    <div className="desing__tag-list-item">
      <div className="design__text-icon">
        <img src={Text} alt="" />
      </div>
      <div className="design__tag-list-item-text">
        {props.text}
      </div>
      <div className="design__arrow-icon">
        <img src={Arrow} alt="" />
      </div>
    </div>
  );
}

export default DesignItem;