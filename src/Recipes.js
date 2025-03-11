import React, { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import "./App.css";
import { Link } from "react-router-dom";
import Paginate from "./Paginate";
// import load from './loading.gif'
import spinn from "./spinn.gif";
import "./index.css";
import styles from "./h2.module.css";

function Recipes() {
  let [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("asc");
  const totalRecipes = 50;
  // const limit = 30
  const [perPage, setPerPage] = useState(30);
  const totalPages = Math.ceil(totalRecipes / perPage);
  // let [link,setLink] = useState('https://dummyjson.com/recipes')
  useEffect(() => {
    setIsLoading(true);
    try {
      const skip = (page - 1) * perPage;
      let apiUrl = `https://dummyjson.com/recipes?limit=${perPage}&skip=${skip}`;

      if (sortBy) {
        apiUrl = `https://dummyjson.com/recipes?limit=${perPage}&skip=${skip}&sortBy=${sortBy}&order=${order}`;
      }
      axios
        .get(apiUrl)
        .then((res) => res.data)
        .then((res2) => {
          // console.log(res2.recipes);
          setData(res2.recipes);
          setIsLoading(false);
          console.log(apiUrl);
        });
    } catch (error) {
      console.log(error);
    }
  }, [page, sortBy, order, perPage]);

  return (
    <div>
      {isLoading ? (
        <div className="load">
          <div className="loader"></div>
          {/* <img src={spine} alt='loading'/> */}
          <p>Loading some interesting recipes...</p>
        </div>
      ) : (
        <>
          <div className={`${styles.wrapper} max-sm:flex-col max-sm:w-[100%]`}>
            <div>
              <label>Sort By:</label>
              <select
                value={sortBy}
                className={styles.select}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="">Nothing</option> {/* No sorting initially */}
                <option value="name">Name</option>
                <option value="cuisine">Cuisine</option>
              </select>
            </div>
            <div>
              <label>Order:</label>
              <select
                value={order}
                className={styles.select}
                onChange={(e) => setOrder(e.target.value)}
                disabled={!sortBy} // Disable if no sorting is selected
              >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
            <div>
              Perpage:
              <select
                value={perPage}
                className={styles.select}
                onChange={(e) => {
                  setPerPage(e.target.value);
                }}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="30">30</option>
              </select>
            </div>
          </div>
          <div className="recipes max-sm:grid-cols-1">
            {data.map((eachData, index) => (
              <Link to={`/eachrecipe/${eachData.id}`} className="eachFood ">
                <div
                  style={{
                    all: "revert",
                    backgroundImage: `url(${eachData.image})`,
                    width: "8em",
                    height: "7em",
                    backgroundSize: "contain",
                    borderRadius: "999px",
                    backgroundPosition: "center",
                    margin: "0 10px",
                  }}
                ></div>
                <div className="text-white">
                  <h2 key={index + 1} className={styles.h2}>
                    Name: {eachData.name}
                  </h2>
                  {/* <h2 key={index +2}>Difficulty : {eachData.difficulty}</h2> */}
                  <h2 key={index + 3} className={styles.h2}>
                    Cuisine : {eachData.cuisine}
                  </h2>
                  <h2 className={styles.h2}>
                    Rating{" "}
                    <Stack>
                      <Rating
                        name="half-rating-read"
                        defaultValue={eachData.rating}
                        precision={0.5}
                        readOnly
                      />
                    </Stack>
                  </h2>
                  {/* <Link to={`/eachrecipe/${eachData.id}`}>learn more</Link> */}
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
      <Paginate
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
      {/* <div className='w-[5em] h-[5em] bg-white rounded-full'></div> */}
    </div>
  );
}

export default Recipes;
