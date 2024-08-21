import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import '../src/App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        setCharacters(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching characters:', error);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <>
      <div id='api'>
        
        <Navbar id='navbar' className="bg-none">
          <Container>
            <Navbar.Brand href="#home" className='ms-auto'>
              <img
                alt=""
                src="https://i.pinimg.com/736x/a0/0e/53/a00e530bb010fe9c8502364eee83e8bf.jpg"
                width="100"
                height="150"
                className=""
                />
            </Navbar.Brand>
          </Container>
        </Navbar>

        <div id='rick' className='d-flex flex-wrap justify-content-center'>
          {loading && <p className='col-12 p-2 m-2'>Loading...</p>}

          {characters.map(item => (
            <div key={item.id} className='p-2 m-2'>
              <div className='card bg-transparent border border-white'>
                <img src={item.image} alt={item.name} className='card-img-top rounded-3' />
                <div className='card-body'>
                  <h5 className=' text-white card-title'>{item.name}</h5>
                  <p className=' text-white card-text'>Status: {item.status}</p>
                  <p className=' text-white card-text'>Species: {item.species}</p>
                </div>
              </div>
            </div>
          ))}
        </div>  
       </div>
    </>
  );
};

export default App;