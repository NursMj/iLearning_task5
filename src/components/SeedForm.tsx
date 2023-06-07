import {Form, InputGroup, Button} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { changeSeed } from '../store/seedSlice'
import _ from 'lodash'

function SeedForm() {
    const seed = useSelector((state:any) => state.seed.seed)
    const dispatch = useDispatch()
    function handleSeedChange(e: any) {
      dispatch(changeSeed(+(e.target.value)))
    }
    function handleRandomSeedChange() {
        dispatch(changeSeed(_.random(100)))
    }

    return (
        <>
            <Form.Label>Define seed value</Form.Label>
            <InputGroup>
            <Form.Control
                placeholder="Seed value"
                value={seed}
                aria-describedby="basic-addon2"
                onChange={handleSeedChange}
            />
            <Button 
                variant="dark" 
                id="button-addon2"
                onClick={handleRandomSeedChange}
            >
                Random
            </Button>
            </InputGroup>
        </>
    )
}

export default SeedForm