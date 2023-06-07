import { Container, Navbar, Form, FormGroup } from "react-bootstrap"
import { useSelector, useDispatch } from 'react-redux'
import { selectRegion } from '../store/regionSlice'

function Header() {
  const selectedRegion = useSelector((state:any) => state.region.region)
  const dispatch = useDispatch()
  const handleRegionSelect = (e: any) => {
    dispatch(selectRegion(e.target.value));
  }

  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            iLearning TASK #5 <br /> "Fake user data generator" app
          </Navbar.Brand>
          <FormGroup>
            <Form.Label className='text-white'>Select region</Form.Label>
            <Form.Select 
              className="mb-2" 
              style={{maxWidth: '100px'}}
              value={selectedRegion} 
              onChange={handleRegionSelect}
            >
              <option value='USA'>USA</option>
              <option value='DE'>DE</option>
              <option value='IT'>IT</option>
            </Form.Select>
          </FormGroup>
        </Container>
      </Navbar>
  )
}

export default Header