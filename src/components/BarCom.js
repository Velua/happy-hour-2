import React from 'react';
import Info from './bar/Info';
import Hours from './bar/Hours';

const BarCom = (props) => {

    return (
      <div key={props.data.index} style={props.data.styles}>
      <a href={props.data.url} target="_blank" ><img src={props.data.picture} alt="" width="350px"/></a>

      <a href={props.data.url} target="_blank" ><h2>{props.data.name}</h2></a>

          <ul className="nav nav-tabs">
            <li role="presentation" onClick={(e) => props.onChange({bar: true, hours: false}, e)} className={props.booly.bar && 'active'}><a href="#">Bar</a></li>
            <li role="presentation" onClick={(e) => props.onChange({bar: false, hours: true}, e)} className={props.booly.hours && 'active'}><a href="#">Opening Hours</a></li>
          </ul>

      {props.booly.bar && (<Info data={props.data} deals={props.deals} />)}
      {props.booly.hours && (<Hours hours_array={props.data.opening_hours.weekday_text} />)}


      </div>
    )
}


export default BarCom;
