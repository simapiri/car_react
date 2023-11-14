import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
const Car = (props) => {
  return (
    <>
      {props.active.active ? (
        <Link to={`/details/${props.data.id}`}>
          <div className="flex  overflow-hidden relative flex-col  justify-start m-3 bg-gray-300 h-72 rounded-lg hover:scale-75 transition duration-300">
            <div className="text-center text-xl font-bold">
              {props.data.title}
            </div>
            <div className="text-center text-xl font-bold text-yellow-900">
              {props.data.price}
            </div>
            <div className="flex justify-center">
              <img className="rounded-lg w-48 h-48 " src={props.data.img} />
            </div>

            <h4 className="bg-purple-600   absolute top-0  right-0 rotate-45 translate-x-7 -translate-y-3  w-[90px] px-8 pt-4 h-[50px] text-center font-bold text-white">
              {props.data.model}
            </h4>
          </div>
        
        </Link>
      ) : null}
    </>
  );
};
export default Car;
