import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react';
import Countries from '../src/components/Countries';



function App() {

  const [countries , setCountries]=useState([]);
  const [cart, setCart]=useState([]);
  const [team , setTeam] = useState([]);

  const ADDpopulation =(population)=>{

    const newteam=[...team, population]
    setTeam (newteam)




  }

  
  const AddHandle = (pd)=>{

    const newCart =[...cart, pd]
    setCart (newCart)
 
}
  useEffect(()=>{



    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then (data => setCountries(data))
  },[]);

  return (

   
    <div className="App">

      <h1>Total Countries Information : {countries.length}</h1>
      <h2>Countries Add: {cart.length}</h2>
   
      <ul>
        {

          team.map(p =><li>Population :{p}</li>)
        }
      </ul>

      {

        countries.map(pd => <Countries pd={pd} AddHandle={AddHandle } ADDpopulation={ADDpopulation}></Countries>)

      }
  

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
