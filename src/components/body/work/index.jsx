import React from 'react';
import './work.css';
import Separator from '../../common/separator';
import { WorkData } from '../../data/Work';
import WorkCard from './Workcard';


function Work() {
  const data = WorkData;
  return (
    <>
    <div className="work">
    <Separator />
    <label className="section-title">Work</label>
    <div className="work-list">
      {data.map((item)=>{
        return(
          <WorkCard item={item} />
        ) 
      })}
    </div>
    </div>
    </>
  );
}

export default Work;
