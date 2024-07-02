import axios from "axios";
import React, { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/movies", {
        name,
        year,
        description,
        image,
        rating,
      })
      .then((response) => {
        navigate("/");
        console.log(response);
      });
    console.log("check");
  };

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  return (
    <>
      <h1 className=" text-3xl font-bold text-white">Add Your Movies</h1>
      <hr className="border-4 rounded-lg  mt-1 w-[300px] m-auto" />
      <div className="max-w-md mx-auto mt-4 ">
        <form
          className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 opacity-90"
          onSubmit={handleSubmit}
        >
          <div className="mb-1">
            <label
              className="text-blue-600 block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              value={name}
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Movie Name"
              name="name"
            />
          </div>
          <div className="mb-1">
            <label
              className="text-blue-600 block text-gray-700 text-sm font-bold mb-2"
              htmlFor="year"
            >
              Year
            </label>
            <input
              value={year}
              required
              onChange={(e) => setYear(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="year"
              type="text"
              placeholder="Release Year"
              name="year"
            />
          </div>
          <div className="mb-1">
            <label
              className="text-blue-600 block text-gray-700 text-sm font-bold mb-2"
              htmlFor="year"
            >
              Rating
            </label>
            <input
              value={rating}
              required
              onChange={(e) => setRating(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="year"
              type="text"
              placeholder="Enter The Rating"
              name="rating"
            />
          </div>
          <div className="mb-1">
            <label
              className="text-blue-600 block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              placeholder="Movie Description"
              name="description"
            />
          </div>
          <label className="text-black font-medium ">
            Image
            <input
              className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Movie Image Link"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              type="text"
            />
          </label>
          <button
            className="bg-red-500 m-auto mt-4 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Movie
          </button>
        </form>
      </div>
    </>
  );
};

export default AddMovie;
