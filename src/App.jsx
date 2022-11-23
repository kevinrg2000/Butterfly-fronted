import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import QuestionsPage from './paginas/QuestionsPage'

import MainPage from './paginas/MainPage'
import Layout from './layouts/Layout'


function App() {


  return (
    <BrowserRouter>

          <Routes>
              <Route path="/" element={<Layout />}>
              <Route index element={<MainPage />} />
                  <Route path="0" element={<QuestionsPage face={0} />} />
                  <Route path="1" element={<QuestionsPage face={1}/>} />
                  <Route path="2" element={<QuestionsPage face={2}/>} />
                  <Route path="3" element={<QuestionsPage face={3}/>} />
                  <Route path="4" element={<QuestionsPage face={4}/>} />
                  <Route path="5" element={<QuestionsPage face={5}/>} />
              </Route>   
          </Routes>

    </BrowserRouter>
  )
}

export default App
