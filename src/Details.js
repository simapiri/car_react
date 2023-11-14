import { useParams } from "react-router-dom";

const cars = [
  { id: 1, title: "benz", price: "19000", model: 2020, img: "/car1.jpeg" },
  { id: 2, title: "audi", price: "29000", model: 2023, img: "/car2.jpeg" },
  { id: 3, title: "bmw", price: "49000", model: 2018, img: "/car3.png" },
  { id: 4, title: "bmw", price: "49000", model: 2018, img: "/car1.jpeg" },
  { id: 5, title: "bmw", price: "49000", model: 2018, img: "/car1.jpeg" },
  { id: 6, title: "bmw", price: "49000", model: 2018, img: "/car1.jpeg" },
];

const Details = () => {
  let { id } = useParams();

  let item = cars.find((car) => car.id == id);

  return (
    <div>
      <h1>Details {id}</h1>
      <h2>{item.title}</h2>

      <img src={item.img} />
    </div>
  );
};
export default Details;
