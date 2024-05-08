import Products from "./Products";
import { useState } from "react";
import "../styles/Home.scss";
export default function Home() {
  const [sort, setSort] = useState("none");
  const handleChange = (e) => {
    setSort(e.target.value);
    console.log(sort);
  };
  return (
    <>
      <div className="home_container">
        <div className="home_item">
          <h4>Sort By</h4>
          <select value={sort} onChange={handleChange}>
            <option value="none">Popularity</option>
            <option value="Asc">Price DSC</option>
            <option value="Dsc">Price ASC</option>
          </select>
        </div>
        <div className="home_item2">
          <Products sort={sort} />
        </div>
      </div>
    </>
  );
}
