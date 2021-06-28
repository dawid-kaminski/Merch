import React from 'react';
import './TagItem.css';

function TagItem(props) {
  
  const onClickRemoveTag = () => {
    props.removeTag(props.index)
  }

  return(
    <div className="tag">
      <div className="tag__text">
        {props.tag}
      </div>
      <div className="tag__close--button">
        <button className="button-close" onClick={onClickRemoveTag}>
          x
        </button>
      </div>
    </div>
  );
}

export default TagItem;