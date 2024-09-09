//import React from 'react'
//import {
  //CircularProgressbar,  buildStyles
//} from "react-circular-progressbar";
//import "react-circular-progressbar/dist/styles.css";
//import ChangingProgressProvider from './ChangingProgressProvider'
//import './Feature.css';
//import { IoMdClose } from "react-icons/io";
//import { MdKeyboardArrowDown } from "react-icons/md";




import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import ChangingProgressProvider from './ChangingProgressProvider';   

const Feature = () => {
  return (
    <div className='feature'>
      <div className='top'>
        <h1 className='title'> perfil</h1>
        <IoMdClose />
      </div>
      <div className='bottom'>
        <div className="featurechat">
          <ChangingProgressProvider values={[0, 20, 40, 60, 80, 100]}>
            {percentage => (
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  pathTransitionDuration: 0.95,   

                  trailColor: "#82ca9d",
                  pathColor:   
 "#210875",
                  textColor: "#210875"
                })}
              />
            )}
          </ChangingProgressProvider>
        </div>
        <p className='title'> {percentage >= 60 ? 'Vulnerável' : 'Não vulnerável'} </p>
        <p className='name'> karolynne freire</p>
        <p className='desc'>grupos</p>
        <div className="sumary">
          <div className="itens">
          <p className='name'>{nome}</p>
            <div className="itensresul">
              <MdKeyboardArrowDown fontSize="small"/>
              <div className='resultamal'> valor</div>
            </div>
          </div>
          <div className="itens">
            <div className="itenstitle"> nome</div>
            <div className="itensresul">
              <MdKeyboardArrowDown fontSize="small"/>
              <div className='resultamal'> valor</div>
            </div>
          </div>
          <div className="itens">
            <div className="itenstitle"> nome</div>
            <div className="itensresul">
              <MdKeyboardArrowDown fontSize="small"/>
              <div className='resultamal'> valor</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Feature;