import './App.css'
import HelloWorld from './HelloWorld'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import EmployeeComponent from './components/EmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
      <>
          <BrowserRouter>
            <HeaderComponent />
                <Routes>
                    <Route path='/' element = { <ListEmployeeComponent /> }></Route>
                    <Route path='/employees' element = { <ListEmployeeComponent /> }></Route>
                    <Route path='/add-employee' element = { <EmployeeComponent /> }></Route>
                </Routes>
            <FooterComponent />
          </BrowserRouter>
      </>
  )
}

export default App
