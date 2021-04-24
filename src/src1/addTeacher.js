import React,{useState} from 'react'
import {useMutation,gql} from '@apollo/client'
import {qAddTeacher} from './Query'
import './style/add.scss';




const AddTeacher = () => {

    const [fname, setFName] = useState("");
    const [book, setBook] = useState("");

    const [createUser, {error}] = useMutation(qAddTeacher);

    const addTeachers= () => {
        createUser({
            variables:{
                Teacher:fname,
                Book:book,
                
            },
            refetchQueries:[{
                query: gql`
               { teachers{
                    id
                  teacher
                    book
                }
            }
    `
            }]
        });
            if(error){
                console.log(error);
            }
    };

   

    return (
        <div className="container-in">
             <input 
                type="text"
                placeholder="Teacher Name"
                onChange={(e) => {
                    setFName(e.target.value)
                }}
                />
                <input 
                type="text"
                placeholder="Book"
                onChange={(e) => {
                    setBook(e.target.value)
                }}
                />
                  <button onClick={addTeachers}>Add Teacher</button>
        </div>
    )
}

export default AddTeacher
