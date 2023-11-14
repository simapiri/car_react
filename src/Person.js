import React from "react";
import { Link } from "react-router-dom";

const Person = (props) => {
  const handleClick = () => {
    alert("test");
  };

  return (
    <Link
      className="flex flex-col items-center   justify-center rounded-lg gap-4 bg-green-300 m-5 w-1/4 h-[200px] relative overflow-hidden"
      to={`/person/${props.data.id}`}
    >
      <div className="md:flex-grow">
        <h2 className=" absolute left-5  py-4 rotate-90">{props.data.name}</h2>
        <h3 className="py-4 absolute right-15 -rotate-90">
          {props.data.family}
        </h3>
        <h4 className="bg-red-400 w-1/2 text-center absolute top-0 right-0 rotate-45 translate-x-6 text-white">
          {props.data.age}
        </h4>
      </div>
    </Link>
  );
};

export default Person;
