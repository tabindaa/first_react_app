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
    <div className="p-5 bg-pink-50 my-2">
      <input
        type="text"
        placeholder="Search"
        value={text}
        onChange={onChangeInput}
      />
      <button className="px-2 bg-purple-500 text-white rounded-lg" onClick={onBtnClick}>Search</button>
    </div>
  );
};
export default Search;
