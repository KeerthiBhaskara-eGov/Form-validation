import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const View = ({employees,deleteEmployee}) => {
    
    return employees.map(employee=>(
        
        <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.address}</td>
            <td>{employee.mobileno}</td>
            <td>{employee.email}</td>
            <td className='delete-btn' onClick={()=>deleteEmployee(employee.id)}>
                <Icon icon={trash}/>
            </td>           
        </tr>            
    
))
}
