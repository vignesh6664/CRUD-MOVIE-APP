import { Route, Routes } from "react-router-dom";
import "./App.css";
import MoviePage from "./MoviePage";
import UpdaeMovie from "./UpdaeMovie";
import AddMovie from "./AddMovie";


function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={<LoginPage />} /> */}
        <Route path="/" element={<MoviePage />} />
        <Route path="/update/:id" element={<UpdaeMovie />} />
        <Route path="/addMovie" element={<AddMovie />} />
      </Routes>
    </>
  );
}

export default App;
