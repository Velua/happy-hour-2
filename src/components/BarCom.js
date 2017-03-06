import React from 'react';
import Info from './bar/Info';
import Find from './bar/Find';
import Hours from './bar/Hours';
import GooglePic from './bar/GooglePic';

const BarCom = (props) => {
    console.log(props.data)
    return (
      <div key={props.data.index} style={props.data.styles}>
      <GooglePic picID={props.data.picture} />

      <a href={props.data.url} target="_blank" ><h2>{props.data.name}</h2></a>

          <ul className="nav nav-tabs">
            <li role="presentation" onClick={(e) => props.onChange({bar: true, find: false, hours: false}, e)} className={props.booly.bar && 'active'}><a href="#">Bar</a></li>
            <li role="presentation" onClick={(e) => props.onChange({find: true, bar: false, hours: false}, e)} className={props.booly.find && 'active'}><a href="#">Find</a></li>
            <li role="presentation" onClick={(e) => props.onChange({find: false, bar: false, hours: true}, e)} className={props.booly.hours && 'active'}><a href="#">Opening Hours</a></li>
          </ul>

      {props.booly.bar && (<Info data={props.data} deals={props.deals} />)}
      {props.booly.find && (<Find data={props.data} />)}
      {props.booly.hours && (<Hours hours_array={props.data.opening_hours.weekday_text} />)}

      </div>
    )
}


export default BarCom;
