import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../redux/CategoriesSlice";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  const _isMounted = useRef(false);
  const dispatch = useDispatch();

  const loadDataCategories = async () => {
    const res = await fetch(
      process.env.REACT_APP_API_ENDPOINT + "category/getAllCategories"
    );
    const data = await res.json();
    const parent = data.filter((item) => item["Parent_Id"] === null);
    const treeData = parent.map((item) => ({
      ...item,
      Children: data.filter((x) => x["Parent_Id"] === item._id),
    }));
    dispatch(addCategory(treeData));
    _isMounted.current && setCategories(treeData);
  };



  useEffect(() => {
    _isMounted.current = true;
    return () => {
      _isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    loadDataCategories();
  }, [dispatch]);

  return (
    <li className="mega-item has-subMenu">
      <NavLink to="/category" className="">
        Danh mục
      </NavLink>
      <ul className="megaMenu-wrapper megaMenu-wide">
        {categories.length > 0 &&
          categories.map((category) => (
            <li>
              <Link key={category._id} className="mega-title">
                {category?.Name}
              </Link>
              <ul>
                {category?.Children.length > 0 &&
                  category?.Children.map((child) => (
                    <li>
                      <NavLink to={/category/ + child._id}>
                        {child?.Name}
                      </NavLink>
                    </li>
                  ))}
              </ul>
            </li>
          ))}
      </ul>
    </li>
  );
};

export default Categories;
