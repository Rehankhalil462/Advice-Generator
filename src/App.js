import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Footer from './Footer/Footer';

const App = () => {
  const [advice, setAdvice] = useState(null);

  useEffect(() => {
    getAdvice();
  }, []);

  const getAdvice = () => {
    axios
      .get('https://api.adviceslip.com/advice')
      .then((response) => {
        setAdvice(response.data.slip.advice);
        console.log('i am fired');
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className='app'>
        <div className='card'>
          <h1 className='heading'>{advice}</h1>
          <button className='button' onClick={getAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default App;
