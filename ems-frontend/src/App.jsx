import './App.css'
import HelloWorld from './HelloWorld'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'

function App() {

  return (
      <>
        <HeaderComponent />
        <ListEmployeeComponent />
        <FooterComponent />
      </>
  )
}

export default App
