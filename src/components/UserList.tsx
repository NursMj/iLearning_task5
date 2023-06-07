import { Table, Button } from "react-bootstrap"
import { useSelector, useDispatch } from 'react-redux'
import { generateUserData, clearUsersData, applyErrors } from '../store/usersDataSlice'
import { useEffect, useState } from "react"
import User from '../interfaces/User'
import exportToCSV from "../utils/exportToCSV"

function UserList() {
    const [loadedDataCount, setLoadedDataCount] = useState(20)
    const seed = useSelector((state:any) => state.seed.seed)
    const selectedRegion = useSelector((state:any) => state.region.region)
    const errorNumber = useSelector((state:any) => state.errorNumber.errorNumber)
    const usersData: User[] = useSelector((state:any) => state.usersData.usersData)
    const dispatch = useDispatch()

    function generateDozenUserData(number:number) {
        for(let i = 0; i < number; i++) {
            dispatch(generateUserData({seed: seed + i, region: selectedRegion}))
        }
    }

    function handleScroll() {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        if (scrollTop + clientHeight === scrollHeight) {
            setLoadedDataCount((prevCount) => prevCount + 10)
        }
    }

    function handleExportToCSV() {
        exportToCSV(usersData, 'data.csv')
    }

    useEffect(() => {
        dispatch(clearUsersData())
        generateDozenUserData(loadedDataCount)
        dispatch(applyErrors({errorNumber, selectedRegion}))
        usersData.forEach(user=>console.log(user))
    }, [seed, selectedRegion, loadedDataCount, errorNumber])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <>
        <h5>Number of error per record: {errorNumber}</h5>
        <h5>Number of records: {usersData.length}</h5>
        <Button variant="primary" onClick={handleExportToCSV}>Export CSV</Button>
        <Table 
            style={{width: '100%',}} 
            striped 
            bordered 
            hover 
            className='mb-5 mt-3'>
        <thead>
          <tr>
            <th>Index</th>
            <th>ID</th>
            <th>Full Name</th>
            <th>Address</th>
            <th>Phone number</th>
          </tr>
        </thead>
        <tbody>
            {usersData.map((u:User, i: number) => {
                return (
                    <tr 
                        key={u._id}
                    >
                        <td>{i + 1}</td>
                        <td>{u._id}</td>
                        <td style={{wordBreak: 'break-all'}}>{u.fullName}</td>
                        <td style={{wordBreak: 'break-all'}}>{u.address}</td>
                        <td style={{wordBreak: 'break-all'}}>{u.phoneNumber}</td>
                    </tr>
                )
            })}
        </tbody>
      </Table>
      </>
    )
}

export default UserList