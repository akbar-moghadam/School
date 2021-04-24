import React,{useState} from 'react'
import {useMutation,useQuery,gql} from '@apollo/client'
import {qAddStudent,qGetTeacher} from './Query'
import './style/add.scss';


function AddStudent(){
    const [fname, setFName] = useState("");
    const [family, setFamily] = useState("");
    const [cclass, setCclass] = useState("");
    const [teacher, setTeacher] = useState('607963266958de12bc282724');
   
    const [createUser, {error}] = useMutation(qAddStudent);
    const addStudents= () => {
        createUser({
            variables:{
                Name:fname,
                Family:family,
                Class: cclass,
                TeacherId:teacher
            },
            refetchQueries:[{
               query: gql(`
{
    students{
        id
        name
        family
        class
        teacher{
            teacher
        }
      
       
        
    }
}
`)
            }]
        });
            if(error){
                console.log(error);
            }
    };

    const {loading,data}=useQuery(qGetTeacher);
    if(loading) return <p>Loading</p>

    const changeTeacher = (newTeacher) => {
        setTeacher(newTeacher)
      }
   
    return(
        <div className="container-in">
           
                <input 
                type="text"
                placeholder="Name"
                onChange={(e) => {
                    setFName(e.target.value)
                }}
                />
                <input 
                type="text"
                placeholder="Family"
                onChange={(e) => {
                    setFamily(e.target.value)
                }}
                />
                <input 
                type="text"
                placeholder="Class Name"
                onChange={(e) => {
                    setCclass(e.target.value)
                }}
                />
               
               {/* <GetSelectTeacher onChange={(e) => { setTeacher(e.target.value); console.log({teacher})} } onClick={(e) => { setTeacher(e.target.value);console.log({teacher})}} /> */}
                  <select onChange={(e) => changeTeacher(e.target.value)}
                  
                  
                  >
                      
                      {data.teachers.map((teacher) => (
                          
                          <option value={teacher.id} key={teacher.id} >
                              {teacher.teacher}
                               </option>
                      )

                      )}
                      
                    </select> 
                
                <button onClick={addStudents}>Add Student</button>
               
            
        </div>
    )
}

const AddStudents = () => {
    return (
        <div>
            <AddStudent/>
            
        </div>
    )
}

export default AddStudents
