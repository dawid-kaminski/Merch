import React from 'react';
import TagItem from './TagItem.js'
import './Tag.css';

function Tag(props) {

  console.log(props)

  return(
    <div className="article__tag">
      {
        props.tagAdded.map((tag, index)=>{
          return <TagItem key={index} index={index} tag={tag} removeTag={props.removeTag} />
        })
      }
    </div>
  );
}

export default Tag;