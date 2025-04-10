import { useEffect, useState } from "react";
import Card from "../components/Cards";
import { useNavigate } from "react-router-dom";

const WishList = () => {
  const [storedCars, setStoredCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const carsArray = localStorage.getItem("storedCars");
    if (carsArray) setStoredCars(JSON.parse(carsArray));
  }, []);

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Your Saved Cars
      </h1>

      {storedCars.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {storedCars.map((car) => (
            <div
              key={car._id}
              className="transition-transform hover:scale-[1.01]"
            >
              <Card carsData={car} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-20">
          <p className="text-xl text-gray-600 mb-4">
            No Cars in WishList, Please Add Some 🚗
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md"
          >
            Browse Cars
          </button>
        </div>
      )}
    </div>
  );
};

export default WishList;
