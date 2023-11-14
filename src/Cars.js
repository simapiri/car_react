import Car from "./Car";

const cars = [
  { id: 1, title: "benz", price: "19000", model: 2020, img: "/car1.jpeg" },
  { id: 2, title: "audi", price: "29000", model: 2023, img: "/car2.jpeg" },
  { id: 3, title: "bmw", price: "49000", model: 2018, img: "/car3.png" },
  { id: 4, title: "bmw", price: "49000", model: 2018, img: "/car1.jpeg" },
  { id: 5, title: "bmw", price: "49000", model: 2018, img: "/car1.jpeg" },
  { id: 6, title: "bmw", price: "49000", model: 2018, img: "/car1.jpeg" },
];

const carsActive = [
  { id: 1, active: true },
  { id: 1, active: true },
  { id: 1, active: true },
  { id: 1, active: true },
  { id: 1, active: true },
  { id: 1, active: true },
  { id: 1, active: true },
];

const Cars = () => {
  return (
    <div className="flex flex-col">
      {cars.map((car, index) => {
        return <Car data={car} active={carsActive[index]} />;
      })}
    </div>
  );
};
export default Cars;
