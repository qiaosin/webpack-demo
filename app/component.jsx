import React from 'react';
import './main.scss';
import imgurl from './logo.png';
import performance from './performance.png';
export default class Hello extends React.Component {
  render() {
    return (
    <div>
    <h1><a href="#">Hello world</a></h1>
    <img src={imgurl} style={{width:"40px"}} />
    <img src={performance} style={{width:"20px"}} />
    </div>
    )
  }
}