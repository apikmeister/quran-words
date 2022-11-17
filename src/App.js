import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
  const [surah, setSurah] = useState(0)
  const [ayah, setAyah] = useState(0)
  const [data, setData] = useState({})

  const url = `https://quran-api-xi.vercel.app/quran/${surah}/${ayah}`

  function randomNumberinRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const generateAyah = () => {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
    setSurah(randomNumberinRange(1, 114))
    setAyah(randomNumberinRange(1, 286))
  }

  return (
    <div className="app">
      <header className="app-header">
        <img src='https://upload.wikimedia.org/wikipedia/commons/6/64/Quran_Kareem.svg' alt='' />
        <h1>Quran Words</h1>
        <a href='mailto:apikmeiser@gmail.com'>Contact Me!</a>
      </header>
      <main>
        <div className='content'>
          <div className='section-a'>
            <div className='text-section'>
              <div className='title'>
                <p>HELLO</p>
              </div>
              <div className='description'>
                <p>Generator here bro</p>
              </div>
            </div>
          </div>

          <div className='section-b'>
            <div className='container'>
              <div className='message'>
                <div className='border'>
                  <p className='textMessage'></p>
                </div>
              </div>
              <div className='generate'>
                <button id='gen-ayah'
                  onClick={generateAyah}
                >Generate</button>
              </div>
            </div>
          </div>

        </div>
      </main>

      <footer>

      </footer>
    </div>
  );
}

export default App;
