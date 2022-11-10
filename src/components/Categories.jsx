import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const _isMounted = useRef(false);

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
    _isMounted.current && setCategories(treeData);
  };

  console.log(categories);

  useEffect(() => {
    _isMounted.current = true;
    return () => {
      _isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    loadDataCategories();
  }, []);

  return (
    <li className="mega-item has-subMenu">
      <a href="#" className="">
        Danh mục
      </a>
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
                      <Link>{child?.Name}</Link>
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
