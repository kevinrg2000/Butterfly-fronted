import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Page0 from './paginas/Page0'
import Page1 from './paginas/Page1'
import Page2 from './paginas/Page2'
import Page3 from './paginas/Page3'
import Page4 from './paginas/Page4'
import Page5 from './paginas/Page5'
import MainPage from './paginas/MainPage'
import Layout from './layouts/Layout'


function App() {


  return (
    <BrowserRouter>

          <Routes>
              <Route path="/" element={<Layout />}>
              <Route index element={<MainPage />} />
                  <Route path="0" element={<Page0 />} />
                  <Route path="1" element={<Page1 />} />
                  <Route path="2" element={<Page2 />} />
                  <Route path="3" element={<Page3 />} />
                  <Route path="3" element={<Page4 />} />
                  <Route path="3" element={<Page5 />} />
              </Route>   
          </Routes>

    </BrowserRouter>
  )
}

export default App
