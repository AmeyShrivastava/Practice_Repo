import React from "react";
import PostCard from "./PostCard";

function MainBody(JsonArray) {
  console.log(JsonArray, typeof JsonArray);
  console.log(JsonArray.JsonArray);
  let collectionToRender = [];
  if (JsonArray.JsonArray) {
    try {
      for (let index = 0; index < JsonArray.JsonArray.length; index++) {
        collectionToRender.push(
          <PostCard
            json_ID={JsonArray.JsonArray[index].id}
            json_title={JsonArray.JsonArray[index].title}
            json_body={JsonArray.JsonArray[index].body}
            key={index}
          />
        );

        // console.log(collectionToRender);
      }
      return (
        <div className="w-75 mx-auto" id="appendTarget">
          {collectionToRender}
        </div>
      );
    } catch (error) {
      console.log(error);
    }
  } else {
    return <></>;
  }
}

export default MainBody;
