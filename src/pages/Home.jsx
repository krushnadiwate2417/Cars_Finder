import { FETCH_URL } from "../constants/constant";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Card from "../components/Cards";
import ShowDetails from "./ShowDetails";
import SelectFilter from "../components/SelectFilters";

const Home = () => {
  const [cars, setCars] = useState([]);
  const [startCount, setStartCount] = useState(0);
  const [endCount, setEndCount] = useState(10);
  const [errorOccured, setErrorOccured] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [selectedCar, setSelectedCar] = useState({});
  const [filteredList, setFilteredList] = useState([]);
  const [search, setSearch] = useState("");

  const brandOptions = [
    { value: 'Toyota', label: 'Toyota' },
    { value: 'Honda', label: 'Honda' },
    { value: 'Hyundai', label: 'Hyundai' },
    { value: 'Kia', label: 'Kia' },
    { value: 'Chevrolet', label: 'Chevrolet' },
    { value: 'Nissan', label: 'Nissan' },
    { value: 'Ford', label: 'Ford' },
    { value: 'BMW', label: 'BMW' },
    { value: 'Mercedes-Benz', label: 'Mercedes-Benz' },
    { value: 'Jeep', label: 'Jeep' },
  ];
  
  const priceOptions = [
    { value: '10000-15000', label: '$10,000 - $15,000' },
    { value: '15000-20000', label: '$15,000 - $20,000' },
    { value: '20000-30000', label: '$20,000 - $30,000' },
    { value: '30000-40000', label: '$30,000 - $40,000' },
    { value: '40000-50000', label: '$40,000 - $50,000' },
    { value: '50000+', label: 'Over $50,000' },
  ];

  const [filters, setFilters] = useState({
    brand: "",
    priceRange: "",
    fuelType: "",
    seatingCapacity: "",
  });

  useEffect(() => {
    handleFetch();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters, search, cars]);

  const handleFetch = async () => {
    try {
      const response = await fetch(FETCH_URL);
      const result = await response.json();
      if (!response.ok) return setErrorOccured(result.message);
      setCars(result.data);
    } catch (error) {
      setErrorOccured(error.message);
    }
  };

  const handleNext = () => {
    setStartCount((curr) => curr + 10);
    setEndCount((curr) => curr + 10);
  };

  const handleBack = () => {
    setStartCount((curr) => curr - 10);
    setEndCount((curr) => curr - 10);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const applyFilters = () => {
    let updatedList = [...cars];

    if (search) {
      updatedList = updatedList.filter((car) =>
        car?.brand.toLowerCase().includes(search.toLowerCase())
      );
    }


    if (filters.brand) {
      updatedList = updatedList.filter((car) => car.brand === filters.brand);
    }
    if (filters.fuelType) {
      updatedList = updatedList.filter((car) => car.fuelType === filters.fuelType);
    }
    if (filters.seatingCapacity) {
      updatedList = updatedList.filter(
        (car) => String(car.seatingCapacity) === filters.seatingCapacity
      );
    }
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split("-");
      updatedList = updatedList.filter((car) => {
        const price = car.price;
        if (max === "+") return price > Number(min);
        return price >= Number(min) && price <= Number(max);
      });
    }

    setFilteredList(updatedList);
    setStartCount(0);
    setEndCount(10);
  };

  return (
    <>
      {cars.length === 0 ? (
        <Loader text={"Fetching Data"} />
      ) : errorOccured ? (
        <div className="text-center mt-10 text-red-600">
          <h1 className="text-2xl font-semibold">Something Went Wrong:</h1>
          <p>{errorOccured}</p>
        </div>
      ) : showDetails ? (
        <ShowDetails setShowDetails={setShowDetails} carsData={selectedCar} />
      ) : (
        <div className="p-6 bg-gray-100 min-h-screen">

          <form
            onSubmit={(e) => {
              e.preventDefault();
              applyFilters();
            }}
            className="flex flex-col sm:flex-row items-center gap-3 mb-6"
          >
            <input
              type="text"
              placeholder="Search by Brand"
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:w-auto border border-gray-300 rounded-md p-3 shadow-sm focus:outline-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-3 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow transition duration-200"
            >
              Search
            </button>
          </form>
  
 
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white p-4 rounded-lg shadow mb-6">
            <SelectFilter
              label="Brand"
              name="brand"
              options={brandOptions}
              value={filters.brand}
              onChange={handleFilterChange}
            />
            <SelectFilter
              label="Fuel Type"
              name="fuelType"
              value={filters.fuelType}
              onChange={handleFilterChange}
              options={[
                { label: "Petrol", value: "Petrol" },
                { label: "Diesel", value: "Diesel" },
                { label: "CNG", value: "CNG" },
                { label: "Electric", value: "Electric" },
                { label: "Hybrid", value: "Hybrid" },
              ]}
            />
            <SelectFilter
              label="Seating Capacity"
              name="seatingCapacity"
              value={filters.seatingCapacity}
              onChange={handleFilterChange}
              options={[
                { label: "2 Seater", value: "2" },
                { label: "4 Seater", value: "4" },
                { label: "5 Seater", value: "5" },
                { label: "7 Seater", value: "7" },
                { label: "8+ Seater", value: "8+" },
              ]}
            />
            <SelectFilter
              label="Price Range"
              name="priceRange"
              options={priceOptions}
              value={filters.priceRange}
              onChange={handleFilterChange}
            />
          </div>
  

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {(filteredList.length > 0 ? filteredList : cars)
              .slice(startCount, endCount)
              .map((car) => (
                <div
                  key={car._id}
                  onClick={() => {
                    setSelectedCar(car);
                    setShowDetails(true);
                  }}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer transition duration-300"
                >
                  <Card carsData={car} />
                </div>
              ))}
          </div>
  

          <div className="flex justify-between items-center mt-8">
            {startCount > 0 && (
              <button
                onClick={handleBack}
                className="px-6 py-2 cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-md shadow"
              >
                ⬅️ Back
              </button>
            )}
            {endCount < (filteredList.length || cars.length) && (
              <button
                onClick={handleNext}
                className="ml-auto cursor-pointer px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-md shadow"
              >
                Next ➡️
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
  
};

export default Home;
