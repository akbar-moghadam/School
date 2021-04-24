import React from 'react';
import {gql,useQuery} from '@apollo/client';


const Get_Teacher=gql(`
query{
    teachers{
        id
        teacher
        
    }
}
`)
const GetSelectTeacher=() =>{
const {loading,error,data}=useQuery(Get_Teacher);

if(loading) return <p>Loading</p>
if(error) return <p>error</p>
//const filtered=data.students.filter(student => student.name=="behrooz")

    return(
        <div className="main_container">
           <select>
               {data.teachers.map((teacher) => {
                   return(
                       <option value={teacher.id} key={teacher.id} >{teacher.teacher}</option>
                   )
               })}
           </select>
        </div>
    )
}

export default GetSelectTeacher