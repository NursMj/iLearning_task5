import { Row, Col, Form } from "react-bootstrap"
import RangeSlider  from 'react-bootstrap-range-slider'
import { useSelector, useDispatch } from 'react-redux'
import { changeErrorNumber } from '../store/errorNumberSlice'
import _ from 'lodash'


function ErrorNumberForm() {
    const errorNumber = useSelector((state:any) => state.errorNumber.errorNumber)
    const dispatch = useDispatch()
    function handleErrorNumberChange(e: any) {
      dispatch(changeErrorNumber(+(e.target.value)))
    }

    return (
        <Row>
            <Col>
                <Form.Label>Specify the number of error 0-10</Form.Label> <br />
                <RangeSlider
                    value={errorNumber}
                    onChange={handleErrorNumberChange}
                    step={0.25}
                    min={0}
                    max={10}
                />
            </Col>
            <Col>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Specify the number error 0-1000 </Form.Label>
                <Form.Control 
                    value={errorNumber} 
                    onChange={handleErrorNumberChange} 
                    type="number" 
                    placeholder="Enter number of error" />
                </Form.Group>
            </Col>
        </Row>
    )
}

export default ErrorNumberForm