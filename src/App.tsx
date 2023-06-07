import { Container } from "react-bootstrap"
import Header from "./components/Header"
import Toolbar from "./components/Toolbar"
import UserList from "./components/UserList"


function App() {

  return (
   <>
      <Header />
      <Container className='pb-5  overflow-hidden'>
        <Toolbar />
        <UserList />
      </Container>
   </>
  )
}

export default App
