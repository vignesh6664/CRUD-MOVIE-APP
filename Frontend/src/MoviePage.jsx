import React, { useEffect, useState } from "react";
import axios from "axios";
import UpdaeMovie from "./UpdaeMovie";
import { Link, json } from "react-router-dom";

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  // Read or gets the data from database
  const getMovie = () => {
    axios
      .get("http://localhost:3001/movies/")
      .then((response) => {
        const result = response.data;
        //localeCompare()
        //-1 if the string is sorted before the compareString
        //0 if the two strings are equal
        //  1 if the string is sorted after the compareString

        console.log(result);
        setMovies(result);
        setFiltered(result.sort((a, b) => a.name.localeCompare(b.name)));
        localStorage.setItem("movies", JSON.stringify(movies));

        // setMovies(response.data);
        // setFiltered(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMovie();
  }, []);

  // delets the data
  const deleteMovies = (id) => {
    axios.delete(`http://localhost:3001/movies/${id}`).then((response) => {
      console.log(response);
      console.log(id);
      setMovies(movies.filter((movie) => movie.id !== id));
      setFiltered(movies.filter((movie) => movie.id !== id));
    });
  };

  const handleSearch = (e) => {
    setFiltered(
      movies.filter((movie) =>
        movie.name.toLowerCase().includes(e.target.value)
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
    console.log(movies, "check");
  }, [movies]);
  return (
    <>
      <div className="flex ">
        <Link
          className=" md:mx-3  bg-red-500 p-2 rounded-lg text-white font-medium"
          to="/addMovie"
        >
          Add Movies
        </Link>
      </div>
      {/* Heading */}
      <h1 className="text-3xl  text-white font-bold font-mono shadow-md md:-mt-8">
        Welcome To <span className="text-4xl text-red-600">M</span>ovie{" "}
        <span className="text-4xl text-red-600">G</span>allary
      </h1>
      {/* Search Bar */}
      <div className="sm:m-auto md:m-auto mt-4 md:mt-4 lg:flex lg:justify-end lg:-mt-10">
        <input
          onChange={handleSearch}
          placeholder="Search Your Movies"
          className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="search"
        />
      </div>
      {/* Mapping the data and Creating in card*/}
      {movies.length > 0 ? (
        <div className="container mx-auto  p-4 ">
          <h1 className="text-4xl font-bold mb-6 text-white ">
            Your Movie List
          </h1>
          <div className="grid w-full md:grid-cols-3 gap-4 sm:grid-cols-2 lg:grid-cols-5 leading-6  ">
            {filtered.map((movie) => (
              <div
                key={movie.id}
                className="p-4 bg-white rounded-lg shadow-2xl hover:bg-purple-200 "
              >
                <img
                  className="img w-16 h-16 mx-auto -mt-7 -mb-5"
                  src="https://png.pngtree.com/png-clipart/20230405/original/pngtree-five-stars-flat-icons-design-template-png-image_9028003.png"
                  alt=""
                />
                <h1 className=" text-black font-bold uppercase mb-1  ">
                  {movie.name} <p>{movie.year}</p>
                </h1>
                <hr className="border border-black" />

                <p className="font-medium mt-2">IMDB</p>
                <p className="mb-3 font-medium">
                  {movie.rating}
                  <span className="font-semibold">/10 </span>
                </p>

                <img
                  style={{ width: "190px", height: "140px " }}
                  className=" rounded-lg shadow-2xl m-auto border-4 border-red-500 transition-all duration-500 hover:scale-110 cursor-pointer "
                  src={movie.image}
                  alt=""
                />
                <div className="flex flex-col items-center gap-2 mt-3">
                  <p className="text-black">
                    <span className="font-medium">Category : </span>
                    {movie.description}
                  </p>
                </div>
                {/* Update and delete button */}
                <div className="flex  items-center justify-between mt-4 ">
                  <Link
                    to={`/update/${movie.id}`}
                    className="bg-blue-500 shadow-md  p-1 rounded-lg text-white font-medium hover:bg-green-600 transition-all duration-500 hover:scale-110"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => deleteMovies(movie.id)}
                    className="bg-blue-500 shadow-md p-1 rounded-lg text-white font-medium hover:bg-red-600 transition-all duration-500 hover:scale-110 "
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <h2 className="text-3xl font-bold text-white mt-16">
          No Movies Available : )
        </h2>
      )}
    </>
  );
};

export default MoviePage;
