import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <>
      <div class="input-group">
        <input
          type="email"
          class="input"
          id="Email"
          name="Email"
          placeholder="uiverse@verse.io"
          autocomplete="off"
        />
        <input class="button--submit" value="Subscribe" type="submit" />
      </div>
    </>
  );
};

export default Search;
