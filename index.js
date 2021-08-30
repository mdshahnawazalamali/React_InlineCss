import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";
const img1="https://picsum.photos/200/300";
const img2="https://picsum.photos/250/300";
const img3="https://picsum.photos/240/300";
const namm="Md Shahnawaz Alam";
// .heading{
//   color:red;
//   text-transform: capitalize;
//   text-align: center;
//   margin: 70px 0;
//   font-family: 'Josefin Sans', sans-serif;
// }
const heading={
  color:'red',
  textTransform:'capitalize',
  textAlign:'center',
  margin:'70px 0px',
  fontFamily:'Josefin Sans,sans-serif'
}
ReactDom.render(
  <>
    <h1 style={heading}>my Name Is {namm}</h1>
    <div className="img_div">
        <img src={img1} alt="images"/>
        <img src={img2}/>
        <img src={img3}/>
    </div>

  </>,
  document.getElementById('root')
);