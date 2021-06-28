import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Tag from '../tag/Tag.js'
import './Article.css';

function Article() {

  const [tagAdded, setTagAdded] = useState([]);

	const tagInput = React.createRef()

  const addTag = (ev) => {   
    ev.preventDefault() 
    if (tagAdded.length < 3) {
      console.log(tagInput.current.value)
      setTagAdded([...tagAdded, tagInput.current.value])
    }
	}

  const removeTag = (indexToRemove) => {
    console.log("Usuwam tag nr:", indexToRemove)
    setTagAdded(tagAdded.filter((tag, index)=>indexToRemove !== index))
  }

  const history = useHistory()

  var onClickGenerate=()=>{
    const queryParams =`?tags=${JSON.stringify(tagAdded)}`
    console.log(queryParams)
    history.push(`/design` + queryParams)
  }
  
  return(
    <div className="article__positioning">
      <div className="article">
        <div className="article__left">
          <form className="article__user-input" onSubmit={addTag}>
            <div className="article__text-input">
              <input type="text" placeholder="Type Something..." ref={tagInput} />
            </div>
          </form>
          <Tag tagAdded={tagAdded} removeTag={removeTag} />
          <div className="article__text-hint">
            E.g. popular words & phrases that your community use, what people call you, things you say, your band or DJ name, initials, squad names etc.
          </div>
        </div>
        <div className="article__buttons">
          <div className="article__add--button">
            <button className="btn-primary" onClick={addTag}>
              Add it!
            </button>
          </div>
          <div className="article__generate--button">
            {tagAdded.length > 0 ?
             <button className="btn-primary" onClick={onClickGenerate}>
                Generate
              </button> : null
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;