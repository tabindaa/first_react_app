import { useState } from "react";

const Search = ({ onSearchClick }) => {
  const [text, setText] = useState("");
  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  const onBtnClick = () => {
    onSearchClick(text);
  };
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search"
        value={text}
        onChange={onChangeInput}
      />
      <button onClick={onBtnClick}>Search</button>
    </div>
  );
};
export default Search;
