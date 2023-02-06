import { useSelector } from 'react-redux'

const EmployeList = () => {
    const employes = useSelector(state => state.employes)
    console.log(employes)
  return (
    <div> 
        {employes.map( (empleado) => {
           return <div> 
                    <h2>{empleado.first_name}</h2>
                    <h3>{empleado.last_name}</h3>
                    <p> {empleado.email} </p>
                    <p> {empleado.phone_number} </p>
                    <p> {empleado.hire_date} </p>
                    <p> {empleado.commission_pct} </p>
                 </div>
        })}
    </div>
  )
}
export default EmployeList