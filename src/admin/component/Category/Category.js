import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../../store/categorySlice";

export const Category = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const categories = useSelector((state) => state.category.category);

  return (
    <div>
      <h1>Category</h1>
      <div>
        <ul>
          {categories.map((c) => (
            <li>{c.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
