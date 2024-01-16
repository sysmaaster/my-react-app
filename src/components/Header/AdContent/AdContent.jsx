import React from 'react';
import s from './AdContent.module.css';
const img = require ('./assets/pro.png')

const AdContent = (props) => {
    return (<div>
            <div className="pic">
          <img src={img} />
        </div>
        <div className="upgrade">
          <h5>Go GO GOO</h5>
          <div className="link">
            <a href="#">
              Go to <b>WORK</b>
            </a>
            <i className="bx bxs-chevron-right" />
          </div>
        </div>  
        </div>  
    );
}
export default AdContent