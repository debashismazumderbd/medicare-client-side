import React from 'react';
import Expert from '../Expert/Expert';


const experts = [
    {
        img: 'https://i.ibb.co/8b0d79R/team1.jpg',
        name: 'DM Bappi',
        expertize: 'Heart specialised-'
    },
    {
        img:'https://i.ibb.co/DV0yqmv/team2.jpg',
        name: 'Trina Mazumder',
        expertize: '-Cardiologist specialised-'
    },
    {
        img: 'https://i.ibb.co/sq86mnY/team3.jpg',
        name: 'Amir Khan',
        expertize: '-Brain And Mind Specialised-'
    },
    {
        img: 'https://i.ibb.co/p4k6f66/team4.jpg',
        name: 'Riya Roy',
        expertize: '- Arthopedic specialist-'
    },
  ]

const Experts = () => {
    return (
<div className='container' id='Experts' >
            <marquee behavior="" direction=""><h2 className='text-primary fw-bold'>Our Experts</h2></marquee>
            <div className='row'>
                {
                    experts.map(expert=><Expert expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;