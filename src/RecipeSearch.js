import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import load from './loading.gif'
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import spinn from "./spinn.gif";
import spine from "./spine.svg";
import styles from "./h2.module.css";

function RecipeSearch() {
  let baseUrl = "https://dummyjson.com/recipes/search";
  let [data, setData] = useState([]);
  let params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  let searchQuery = location.search.split("=")[1];
  let id = params.id;
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${baseUrl}?q=${searchQuery}`)
      .then((res) => res.data)
      .then((res2) => {
        if (res2.recipes && res2.recipes.length > 0) {
          setData(res2.recipes);
          setIsLoading(false);

          setError(false);
        } else {
          console.log("couldn't find it");

          setIsLoading(false);
          setError(true); // Set error if no recipes found
          setData(null);
        }
      })
      .catch((err) => {
        setError(true);
      });
  }, [searchQuery]);
  return (
    <>
      <Link to="/" className="goback">
        Go back to recipe page
      </Link>

      {isLoading ? (
        <>
          <div className="load">
            <div className="loader"></div>
            {/* <img src={spine} alt='loading'/> */}
            <p>Searching for the food...</p>
          </div>{" "}
        </>
      ) : (
        <>
          {
            error ? (
              <h1 className={styles.h1}>
                Please don't be annoyed we don't have a recipe for ({searchQuery}){" "}
                available
              </h1>
            ) : (
              <div className="recipes">
                {
                  data.map((eachData, index) => (
                    <Link
                      to={`/eachrecipe/${eachData.id}`}
                      key={index}
                      className="eachFood"
                    >
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
                      {/* <img src={eachData.image} alt={eachData.image}/> */}
                      <div>
                        <h2 className={styles.h2}>{eachData.name}</h2>
                        {/* <h2 className={styles.h2}>Difficulty : {eachData.difficulty}</h2> */}
                        <h2 className={styles.h2}>
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
                  )) || <h2>Recipe not found</h2> // if data is empty, display a message to the user.  || is a logical OR operator in JavaScript. If the first operand is truthy, it returns that operand; otherwise, it returns the second operand.  In this case, it checks if data is empty before rendering the map.  If it is empty, it renders a message saying "Recipe not found".  Otherwise, it renders the mapped data.  If you want to display a different message when data
                }
              </div>
            )
            // <h1></h1>
          }
        </>
      )}
    </>
  );
}

export default RecipeSearch;
