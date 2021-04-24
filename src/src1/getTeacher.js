import React from 'react'
import {gql,useQuery} from '@apollo/client';
import AddTeacher from './addTeacher'
import './style/teacher.scss';


const Get_Teacher=gql(`
{
    teachers{
        id
      teacher
        book
    }
     
    
      
    }
`)

function GetTeacher() {

    const {loading,error,data}=useQuery(Get_Teacher);

if(loading) return <p>Loading</p>
if(error) return <p>error</p>


    return (
        <div className="main_container">
            <h1 className="title">Teacher will go here</h1>
            <div>
                <AddTeacher/>
            </div>
            <table className="std-table">
                <thead className="head">
                    <tr>
                        <td className="td-head">Name</td>
                        <td className="td-head">Book</td>
                       
                    </tr>
                </thead> 
                <tbody className="body">
                    {data.teachers.map((teacher) => (
                      <tr key={teacher.id}>
                          <td className="td-body">{teacher.teacher}</td>
                          <td className="td-body">{teacher.book}</td>
                                                    
                      </tr>
                    ))}

                </tbody>
            </table>
            
        </div>
    )
}

export default GetTeacher
