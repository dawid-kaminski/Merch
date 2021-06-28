import React from 'react';
import { useLocation } from "react-router-dom";
import Tshirt from '../assets/tshirt.png'
import Logo from '../assets/logo.png'
import './Design.css';
import DesignItem from './DesignItem';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Design() {

  const query = useQuery();

  console.log(query.get('tags'))

  const tag = JSON.parse(query.get('tags'))
  
  return(
    <div className="design__positioning">
      <div className="design">
        <div className="design__product">
          <div className="design__product-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="design__product-item">
            <img src={Tshirt} alt="" />
          </div>
        </div>
        <div className="design__list">
          <div className="design__tag-list">
            {tag.map((item)=>{
              return <DesignItem text={item}/>
            })}
          </div>
          <div className="design__send-request--button">
            <button className="send-request">
              Send Ajax Request with Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Design;