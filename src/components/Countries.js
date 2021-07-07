import React from 'react';
import react,{useState} from 'react';

const Countries = (props) => {
const Handle = props.AddHandle ;
const Pop =props.ADDpopulation;



    const {name, population, flag, capital} = props.pd
    const [info , setInfo]=useState('');

    const flagStyle ={

        height:"50px"

    }
    const CountriesStyle={
       border: '1px solid red',
        margin:'10px',
        padding:'10px'

    }
   const Showinfo =()=> setInfo(capital)
    return (
        <div style={CountriesStyle}>
            <h4>This Is Country:{name} </h4>
            <img style={flagStyle} src={flag} alt=""/>
            <p>Populations:{population} </p>
            <p><b>Capital_Information:{info}</b></p>
          <button onClick={()=>Handle(props.pd)}>Add_ Button </button>
          <button onClick ={()=> Pop(population)}>Show Population</button>
          <button onClick={Showinfo}> Capital info </button>

        </div>
    );
};

export default Countries;