import { useState } from "react";
import { FALLBACK_IMG } from "../constants/constant";

const ShowDetails = ({ carsData, setShowDetails }) => {
  const [imageErr, setImageErr] = useState(false);
  const [addedToWishlist, setAddedToWishlist] = useState(false);

  const handleWishList = () => {
    const localStorageCars = localStorage.getItem("storedCars");
    const carsArray = localStorageCars ? JSON.parse(localStorageCars) : [];


    const alreadyExists = carsArray.some(car => car._id === carsData._id);
    if (!alreadyExists) {
      carsArray.push(carsData);
      localStorage.setItem("storedCars", JSON.stringify(carsArray));
      setAddedToWishlist(true);
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex justify-center">
          <img
            onError={() => setImageErr(true)}
            src={imageErr ? FALLBACK_IMG : carsData?.image}
            alt="Car"
            className="w-full max-w-md rounded-lg shadow-md"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm text-gray-800">
          <div className="space-y-2">
            <h2><strong>Brand:</strong> {carsData?.brand}</h2>
            <h2><strong>Model:</strong> {carsData?.model}</h2>
            <h2><strong>Price:</strong> ${carsData?.price}</h2>
            <h2><strong>Fuel Type:</strong> {carsData?.fuelType}</h2>
            <h2><strong>Seating Capacity:</strong> {carsData?.seatingCapacity}</h2>
            <h2><strong>Year:</strong> {carsData?.year}</h2>
          </div>
          <div className="space-y-2">
            <h2><strong>Body Type:</strong> {carsData?.bodyType}</h2>
            <h2><strong>Color:</strong> {carsData?.color}</h2>
            <h2><strong>Engine:</strong> {carsData?.engine}</h2>
            <h2><strong>Horsepower:</strong> {carsData?.horsepower} HP</h2>
            <h2><strong>Mileage:</strong> {carsData?.mileage} km/l</h2>
            <h2><strong>Transmission:</strong> {carsData?.transmission}</h2>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={() => setShowDetails(false)}
          className="px-6 py-2 cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-all"
        >
          Back
        </button>

        {!addedToWishlist ? (
          <button
            onClick={handleWishList}
            className="px-6 py-2 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all"
          >
            Add to Wishlist
          </button>
        ) : (
          <span className="text-green-600 font-medium self-center">
            ✔ Added to Wishlist
          </span>
        )}
      </div>
    </div>
  );
};

export default ShowDetails;
