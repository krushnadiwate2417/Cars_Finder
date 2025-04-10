import { useState } from "react";
import { FALLBACK_IMG } from "../constants/constant";

const Card = ({ carsData }) => {
  const [imageErr, setImageErr] = useState(false);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
      <img
        onError={() => setImageErr(true)}
        src={imageErr ? FALLBACK_IMG : carsData?.image}
        alt={`${carsData?.brand} ${carsData?.model}`}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 space-y-1">
        <h2 className="text-lg font-semibold text-gray-800">
          {carsData?.brand} {carsData?.model}
        </h2>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Price:</span> ${carsData?.price.toLocaleString()}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Fuel Type:</span> {carsData?.fuelType}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Seating:</span> {carsData?.seatingCapacity} Seater
        </p>
      </div>
    </div>
  );
};

export default Card;
