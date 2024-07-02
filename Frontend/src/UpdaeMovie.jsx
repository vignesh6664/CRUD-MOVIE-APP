import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdaeMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    id: id,
    name: "",
    year: "",
    rating: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    axios.get("http://localhost:3001/movies/" + id).then((res) => {
      setValues({
        ...values,
        name: res.data[0].name,
        year: res.data[0].year,
        rating: res.data[0].rating,
        description: res.data[0].description,
        image: res.data[0].image,
      });
      console.log(res.data[0].name);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:3001/movies/" + id, values).then((res) => {
      navigate("/");
    });
  };
  return (
    <div className=" mt-5 flex flex-col bg-white md:w-[400px] m-auto rounded-xl border-4 border-blue-600">
      <h2 className="mb-5 text-xl font-bold mt-4 text-blue-600">
        Update Movie
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mt-4 mb-5">
          <input
            className="shadow appearance-none border rounded w-[270px] py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="name"
            placeholder="Enter Movie Name"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
        </div>
        <div className="mb-5">
          <input
            className="shadow appearance-none border rounded w-[270px] py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="year"
            placeholder="Enter Movie Year"
            value={values.year}
            onChange={(e) => setValues({ ...values, year: e.target.value })}
          />
        </div>
        <div className="mb-5">
          <input
            className="shadow appearance-none border rounded w-[270px] py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="rating"
            placeholder="Enter Movie Rating"
            value={values.rating}
            onChange={(e) => setValues({ ...values, rating: e.target.value })}
          />
        </div>
        <div className="mb-5">
          <input
            className="shadow appearance-none border rounded w-[270px] py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="description"
            placeholder="Enter Movie Description"
            value={values.description}
            onChange={(e) =>
              setValues({ ...values, description: e.target.value })
            }
          />
        </div>
        <div className="mb-5">
          <input
            className="shadow appearance-none border rounded w-[270px] py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="image"
            placeholder="Enter Movie Image Link"
            value={values.image}
            onChange={(e) => setValues({ ...values, image: e.target.value })}
          />
        </div>
        <button
          className="bg-blue-600 p-2 mb-4 rounded-lg font-medium text-white"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdaeMovie;
