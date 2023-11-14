import React from "react";
import Person from "./Person";

const persons = [
  {  id: 1 ,name: "ali", family: "alavi", age: 23 },
  { id: 2 ,name: "ali", family: "alavi", age: 23 },
  { id: 3 ,name: "hasan", family: "alavi", age: 24 },
  {id: 4 , name: "ali", family: "alavi", age: 23 },
  { id: 5 ,name: "bahram", family: "alavi", age: 30 },
  { id: 6 ,name: "ali", family: "alavi", age: 23 },
  { id: 7 ,name: "ali", family: "alavi", age: 23 },
  { id: 8 ,name: "mohamad", family: "alavi", age: 26 },
  { id: 9 ,name: "ali", family: "alavi", age: 23 },
];
const Persons = () => {
  return (
    <div className="flex flex-wrap">
      {persons.map((person) => {
        return <Person data={person} />;
      })}
    </div>
  );
};

export default Persons;
