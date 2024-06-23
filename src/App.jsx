import { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import ImageCard from "./components/ImageCard";
import VideoCard from "./components/VideoCard";
import SearchVideo from "./components/SearchVideo";
import Home from "./components/Home";
const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoding] = useState(true);
  const [searchWord, setSearchWord] = useState("");
  const [search, setSearch] = useState("");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=42200693-a193887006d55d0f72fa4f8a1&q=${searchWord}&image_type=photo&pretty=true&per_page=10`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoding(false);
      })
      .catch((error) => console.error(error));
  }, [searchWord]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://pixabay.com/api/videos/?key=42200693-a193887006d55d0f72fa4f8a1&q=${search}&pretty=true_page=6`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setVideos(data.hits);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [search]);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/photo"
            element={
              <>
                <Searchbar searchText={(text) => setSearchWord(text)} />
                {!isLoading && !images.length && (
                  <div className="relative top-56 w-full flex justify-center items-center">
                    <h1 className="text-2xl text-white">Image Not Found...</h1>
                  </div>
                )}
                {isLoading ? (
                  <div className="relative top-56 w-full flex justify-center items-center">
                    <h1 className="text-2xl text-white">Loading...</h1>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-3 relative top-40 justify-items-center w-full my-4 px-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                    {images.map((image) => (
                      <ImageCard key={image.id} image={image} />
                    ))}
                  </div>
                )}
              </>
            }
          />
          <Route
            path="/video"
            element={
              <>
                <SearchVideo search={(text) => setSearch(text)} />
                {!loading && !videos.length && (
                  <div className="relative top-56 w-full flex justify-center items-center">
                    <h1 className="text-2xl text-white"> Vodeo Not Found...</h1>
                  </div>
                )}
                {loading ? (
                  <div className="relative top-56 w-full flex justify-center items-center">
                    <h1>Loading...</h1>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-3 relative top-40 justify-items-center w-full my-4 px-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                    {videos.map((video) => (
                      <VideoCard key={video.id} video={video} />
                    ))}
                  </div>
                )}
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
