import {gql} from '@apollo/client';

const qAddStudent=gql`
mutation addStudent(
    $Name:String! 
    $Family:String! 
    $Class:String! 
    $TeacherId:ID!
    ) {
        addStudent(
            name:$Name
            family:$Family
            class:$Class
            teacherId:$TeacherId
            ){
        id
        
        
    }
}
`
const qGetTeacher=gql(`
query{
    teachers{
        id
        teacher
        
    }
}
`)

const qAddTeacher=gql`
mutation addTeacher(
    $Teacher:String! 
    $Book:String! 
   
    ) {
        addTeacher(
            teacher:$Teacher
            book:$Book
        ){
        id
        
        
    }
}
`
export {qAddStudent,qGetTeacher,qAddTeacher}