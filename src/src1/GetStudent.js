import React from "react";
import { gql, useQuery } from "@apollo/client";
import AddStudent from "./AddStudent";
import "./style/student.scss";

const Get_Student = gql(`
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
`);
const GetStudent = () => {
  const { loading, error, data } = useQuery(Get_Student);

  if (loading) return <p>Loading</p>;
  if (error) return <p>error</p>;
  //const filtered=data.students.filter(student => student.name=="behrooz")

  return (
    <div className="main_container">
      <h1 className="title">student will go here</h1>
      <div className="add-std">
        <AddStudent />
      </div>
        <table className="std-table">
          <thead className="head">
            <tr>
              <td className="td-head">Name</td>
              <td className="td-head">Family</td>
              <td className="td-head">Class</td>
              <td className="td-head">Teacher</td>
            </tr>
          </thead>
          <tbody className="body">
            {data.students.map((std) => (
              <tr key={std.id}>
                <td className="td-body">{std.name}</td>
                <td className="td-body">{std.family}</td>
                <td className="td-body">{std.class}</td>
                <td className="td-body">{std.teacher.teacher}</td>
              </tr>
            ))}
          </tbody>
        </table>
      
      
    </div>
  );
};

export default GetStudent;
