const Pool = require("pg").Pool;
const dotenv = require("dotenv");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "moviesData",
  password: "1234",
  port: 5432,
});

const getMovies = (req, res) => {
  pool.query("SELECT * FROM movies", (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
};

// const getUsers = (req, res) => {
//   pool.query("SELECT * FROM users", (error, result) => {
//     if (error) {
//       throw error;
//     }
//     res.status(200).json(result.rows);
//   });
// };

// const getUserById = (req, res) => {
//   const id = parseInt(req.params.id);
//   pool.query("SELECT * FROM users WHERE ID=$1", [id], (error, result) => {
//     if (error) {
//       throw error;
//     }
//     res.status(200).json(result.rows);
//   });
// };
const getMoviesById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("SELECT * FROM movies WHERE id=$1", [id], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
};

// const getLoginInfo = (req, res) => {
//   pool.query("SELECT * FROM logininfo", (error, result) => {
//     if (error) {
//       throw error;
//     }
//     res.status(200).json(result.rows);
//   });
// };

// const createLoginInfo = (req, res) => {
//   const { email, password } = req.body;

//   pool.query(
//     "INSERT INTO logininfo (email,password) VALUES ($1,$2)",
//     [email, password],
//     (error) => {
//       if (error) {
//         throw error;
//       }
//       res.status(200).send("Saved Login Details");
//     }
//   );
// };
// const createUser = (req, res) => {
//   const { username, email, password } = req.body;

//   pool.query(
//     "INSERT INTO users (userName,email,password) VALUES ($1,$2,$3)",
//     [username, email, password],
//     (error, result) => {
//       if (error) {
//         throw error;
//       }
//       res.status(200).send("User Created Successfully");
//     }
//   );
// };

const createMovies = (req, res) => {
  const { name, year, description, image, rating } = req.body;

  pool.query(
    "INSERT INTO movies (name,year,description,image,rating) VALUES ($1,$2,$3,$4,$5)",
    [name, year, description, image, rating],
    (error) => {
      if (error) {
        throw error;
      }
      res.status(200).send("Movie Created Successfully");
    }
  );
};

const updateMovies = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, year, description, image, rating } = req.body;
  pool.query(
    "UPDATE movies SET name=$1,year=$2,description=$3,image=$4,rating=$5 WHERE id=$6",
    [name, year, description, image, rating, id],
    (error) => {
      if (error) {
        throw error;
      }
      res.status(200).send("Movie Updated Successfully");
    }
  );
};

const deleteMovies = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("DELETE FROM movies WHERE id=$1", [id], (error) => {
    if (error) {
      throw error;
    }
    res.status(200).send("Movie Deleted Successfully");
  });
};

module.exports = {
  getMovies,
  getMoviesById,
  createMovies,
  updateMovies,
  deleteMovies,
};
