import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Body() {

  const [joke, setJoke] = useState({ setup: '', punchline: '' });


  const handleClick = () => {
    axios.get('https://official-joke-api.appspot.com/random_joke').then((response) => {
      console.log(response.data);
      setJoke({
        setup: response.data.setup,
        punchline: response.data.punchline
      });
    });
  };

  return (
    <div>
      <div style={{ backgroundColor: 'black', height: '800px', width: '100%' }} className='mainbody'>
        <div className="heading">
          <h1 style={{ color: 'white', marginLeft: '35%', paddingTop: '5%' }}>Random joke generator</h1>
        </div>
        <div className="results">
          <h1 style={{ color: 'white', marginLeft: '25%', paddingTop: '5%' }}>{joke.setup}</h1>
          <h1 style={{ color: 'white', marginLeft: '25%', paddingTop: '3%' }}>{joke.punchline}</h1>
        </div>
        <button onClick={handleClick}></button>
      </div>
    </div>
  );
}

export default Body;
