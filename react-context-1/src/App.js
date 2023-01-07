
import './App.css';
import Parent1 from './Component/Parent1';
import Parent2 from './Component/Parent2';
import Parent4 from './Component/Parent4';
import context from './Component/Context';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  //if true-> light theme , else dark theme
  const [theme, setTheme] = useState(true);

  return (
    <div>
      <p>I have changed theme</p>
      <div className={theme ? "light" : "dark"}>


        <context.Provider value={theme}>
          Geekster <br />
          <button onClick={() => setTheme(!theme)}>Toggle Theme</button>

          <BrowserRouter>

            <Routes>
              <Route path='/' element={<Parent1 />} />
              <Route path='/contact' element={<Parent2 />} />
              <Route path='/service' element={<Parent4 />} />
            </Routes>
          </BrowserRouter>



        </context.Provider>
      </div>
    </div>
  );
}

export default App;