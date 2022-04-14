import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import expert1 from '../../../../images/expert-1.jpg'
import expert2 from '../../../../images/expert-2.jpg'
import expert3 from '../../../../images/expert-3.jpg'
import expert4 from '../../../../images/expert-4.jpg'
import expert5 from '../../../../images/expert-5.jpg'
import expert6 from '../../../../images/expert-6.png'
import Expert from '../Expert/Expert';
import { Col, Container, Row } from 'react-bootstrap';
const experts = [
    {id:1,name: 'rock', img:expert1},
    {id:2,name: 'jack', img:expert2},
    {id:3,name: 'hack', img:expert3},
    {id:4,name: 'mack', img:expert4},
    {id:5,name: 'pock', img:expert5},
    {id:6,name: 'cock', img:expert6}

]

const Experts = () => {
    return (
        <div id='experts'>
          <h3 className='bg-primary'>our experts</h3> 
          <div className='row'>
          {
              experts.map(expert => <Expert expert={expert}></Expert>)
          }
          </div>
        </div>
    );
};

export default Experts;