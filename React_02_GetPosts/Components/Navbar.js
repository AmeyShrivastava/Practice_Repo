import React from "react";
import { useState } from "react";
import "regenerator-runtime/runtime";
import axios from "axios";

function Navbar({ setJsonArray }) {
  const [SpecificPostNumber, setSpecificPostNumber] = useState("");

  return (
    <>
      <nav className="navbar navbar-light bg-light border-1 border-bottom border-danger">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Get Posts Demo</span>
          <form className="d-flex">
            <input
              className="form-control me-2 w-100"
              id="requestSpecificPost"
              type="number"
              placeholder="Enter Post ID"
              onChange={(e) => setSpecificPostNumber(e.target.value)}
            />
            {/* <!-- calls the getSpecificPost function --> */}
            <button
              className="btn btn-outline-success btn-block w-100 me-2"
              type="button"
              onClick={async () => {
                try {
                  const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/posts/${parseInt(
                      SpecificPostNumber
                    )}`
                  );

                  const specificPostAxios = response.data;
                  console.log(specificPostAxios, typeof specificPostAxios);
                  setJsonArray([specificPostAxios]);
                } catch (errors) {
                  console.error(errors);
                }
              }}
            >
              Get Post
            </button>
            {/* <!-- fetches all posts available in the API --> */}
            <button
              className="d-flex btn btn-outline-primary btn-block w-100 me-2"
              type="button"
              onClick={async () => {
                try {
                  const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts"
                  );

                  const allPostsAxios = response.data;

                  setJsonArray(allPostsAxios);
                } catch (errors) {
                  console.error(errors);
                }
              }}
            >
              Get All Posts
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
