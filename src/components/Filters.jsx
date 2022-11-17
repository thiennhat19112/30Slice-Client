import Notiflix from "notiflix";
import { useEffect, useState } from "react";

const Filters = () => {
  const [listCate, setCate] = useState([]);

  const fetchCate = async () => {
    Notiflix.Loading.standard("Đang tải...");
    const res = await fetch(
      process.env.REACT_APP_API_ENDPOINT + "category/getAllCategories"
    );
    const data = await res.json();
    if (data) {
      Notiflix.Loading.remove();
    }
    setCate(data);
  };

  useEffect(() => {
    fetchCate();
  }, []);

  return (
    <div className="widget">
      <div className="widget-header-title px-20 py-15 border-bottom">
        <h6 className="d-flex align-content-center fw-500">
          <span data-feather="sliders" /> Filters
        </h6>
      </div>
      <div className="category_sidebar">
        {/* Start: Aside */}
        <aside className="product-sidebar-widget mb-30">
          {/* Title */}
          <div className="widget_title mb-20">
            <h6>Price Range</h6>
          </div>
          {/* Title */}
          {/* Body */}
          <div className="card border-0">
            <div className="product-price-ranges">
              <div id="price-range">
                <div className="section price">
                  <div className="price-slider" />
                  <p className="price-value" />
                </div>
              </div>
            </div>
          </div>
          {/* Body */}
        </aside>
        {/* End: Aside */}

        {/* Start: Aside */}
        <aside className="product-sidebar-widget mb-30">
          {/* Title */}
          <div className="widget_title mb-20">
            <h6>Loại sản phẩm (số bên phải lấy tạm ordinal)</h6>
          </div>
          {/* Title */}
          {/* Body */}
          <div className="card border-0">
            <div className="product-brands">
              <ul>
                {listCate.map((item, index) => (
                  <li key={item._id}>
                    <div className="checkbox-theme-default custom-checkbox ">
                      <input
                        className="checkbox"
                        type="checkbox"
                        id={`check-${item._id}`}
                      />
                      <label htmlFor={`check-${item._id}`}>
                        <span className="checkbox-text">
                          {item.Name}
                          <span className="item-numbers">{item.Ordinal}</span>
                        </span>
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-2">
                <a href="#" className=" fs-13 fw-500 text-capitalize">
                  Xem thêm
                </a>
              </div>
            </div>
          </div>
          {/* Body */}
        </aside>
        {/* End: Aside */}

        {/* Start: Aside */}
        <aside className="product-sidebar-widget mb-30">
          {/* Title */}
          <div className="widget_title mb-20">
            <h6>Category</h6>
          </div>
          {/* Title */}
          {/* Body */}
          <div className="card border-0">
            <div className="product-category">
              <ul>
                <li>
                  <div className="w-100">
                    <span className="fs-14 color-gray">
                      Accessories
                      <span className="item-numbers">25</span>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="w-100">
                    <span className="fs-14 color-gray">
                      Appliances
                      <span className="item-numbers">54</span>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="w-100">
                    <span className="fs-14 color-gray">
                      Bags<span className="item-numbers">78</span>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="w-100">
                    <span className="fs-14 color-gray">
                      Electronic
                      <span className="item-numbers">42</span>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="w-100">
                    <span className="fs-14 color-gray">
                      Entertainment
                      <span className="item-numbers">35</span>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="w-100">
                    <span className="fs-14 color-gray">
                      Induction
                      <span className="item-numbers">64</span>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="w-100">
                    <span className="fs-14 color-gray">
                      Mobile phone
                      <span className="item-numbers">92</span>
                    </span>
                  </div>
                </li>
              </ul>
              <div className="mt-2">
                <a href="#" className=" fs-13 fw-500 text-capitalize">
                  see more
                </a>
              </div>
            </div>
          </div>
          {/* Body */}
        </aside>
        {/* End: Aside */}
        {/* Start: Aside */}
        <aside className="product-sidebar-widget mb-30">
          {/* Title */}
          <div className="widget_title mb-20">
            <h6>Brands</h6>
          </div>
          {/* Title */}
          {/* Body */}
          <div className="card border-0">
            <div className="product-brands">
              <ul>
                <li>
                  <div className="checkbox-theme-default custom-checkbox ">
                    <input className="checkbox" type="checkbox" id="check-1" />
                    <label htmlFor="check-1">
                      <span className="checkbox-text">
                        Appliances
                        <span className="item-numbers">25</span>
                      </span>
                    </label>
                  </div>
                </li>
                <li>
                  <div className="checkbox-theme-default custom-checkbox ">
                    <input className="checkbox" type="checkbox" id="check-2" />
                    <label htmlFor="check-2">
                      <span className="checkbox-text">
                        Bags
                        <span className="item-numbers">54</span>
                      </span>
                    </label>
                  </div>
                </li>
                <li>
                  <div className="checkbox-theme-default custom-checkbox ">
                    <input className="checkbox" type="checkbox" id="check-3" />
                    <label htmlFor="check-3">
                      <span className="checkbox-text">
                        Electronic
                        <span className="item-numbers">78</span>
                      </span>
                    </label>
                  </div>
                </li>
                <li>
                  <div className="checkbox-theme-default custom-checkbox ">
                    <input className="checkbox" type="checkbox" id="check-4" />
                    <label htmlFor="check-4">
                      <span className="checkbox-text">
                        Entertainment
                        <span className="item-numbers">42</span>
                      </span>
                    </label>
                  </div>
                </li>
                <li>
                  <div className="checkbox-theme-default custom-checkbox ">
                    <input className="checkbox" type="checkbox" id="check-5" />
                    <label htmlFor="check-5">
                      <span className="checkbox-text">
                        Induction
                        <span className="item-numbers">35</span>
                      </span>
                    </label>
                  </div>
                </li>
                <li>
                  <div className="checkbox-theme-default custom-checkbox ">
                    <input className="checkbox" type="checkbox" id="check-6" />
                    <label htmlFor="check-6">
                      <span className="checkbox-text">
                        Laptops
                        <span className="item-numbers">64</span>
                      </span>
                    </label>
                  </div>
                </li>
              </ul>
              <div className="mt-2">
                <a href="#" className=" fs-13 fw-500 text-capitalize">
                  see more
                </a>
              </div>
            </div>
          </div>
          {/* Body */}
        </aside>
        {/* End: Aside */}
        {/* Start: Aside */}
        <aside className="product-sidebar-widget mb-30">
          {/* Title */}
          <div className="widget_title mb-20">
            <h6>Đánh giá</h6>
          </div>
          {/* Title */}
          {/* Body */}
          <div className="card border-0">
            <div className="product-ratings">
              <ul>
                <li>
                  <div className="checkbox-theme-default custom-checkbox ">
                    <input className="checkbox" type="checkbox" id="rating-1" />
                    <label htmlFor="rating-1">
                      <span className="stars-rating d-flex align-items-center">
                        <span className="star-icon las la-star active" />
                        <span className="star-icon las la-star active" />
                        <span className="star-icon las la-star active" />
                        <span className="star-icon las la-star active" />
                        <span className="star-icon las la-star active" />
                        <span className="checkbox-text">
                          and up
                          <span className="item-numbers">42</span>
                        </span>
                      </span>
                    </label>
                  </div>
                </li>
                <li>
                  <div className="checkbox-theme-default custom-checkbox ">
                    <input className="checkbox" type="checkbox" id="rating-3" />
                    <label htmlFor="rating-3">
                      <span className="stars-rating d-flex align-items-center">
                        <span className="star-icon las la-star active" />
                        <span className="star-icon las la-star active" />
                        <span className="star-icon las la-star active" />
                        <span className="star-icon las la-star active" />
                        <span className="star-icon las la-star inactive" />
                        <span className="checkbox-text">
                          and up
                          <span className="item-numbers">54</span>
                        </span>
                      </span>
                    </label>
                  </div>
                </li>
                <li>
                  <div className="checkbox-theme-default custom-checkbox ">
                    <input className="checkbox" type="checkbox" id="rating-4" />
                    <label htmlFor="rating-4">
                      <span className="stars-rating d-flex align-items-center">
                        <span className="star-icon las la-star active" />
                        <span className="star-icon las la-star active" />
                        <span className="star-icon las la-star active" />
                        <span className="star-icon las la-star inactive" />
                        <span className="star-icon las la-star inactive" />
                        <span className="checkbox-text">
                          and up
                          <span className="item-numbers">78</span>
                        </span>
                      </span>
                    </label>
                  </div>
                </li>
                <li>
                  <div className="checkbox-theme-default custom-checkbox ">
                    <input className="checkbox" type="checkbox" id="rating-5" />
                    <label htmlFor="rating-5">
                      <span className="stars-rating d-flex align-items-center">
                        <span className="star-icon las la-star active" />
                        <span className="star-icon las la-star active" />
                        <span className="star-icon las la-star inactive" />
                        <span className="star-icon las la-star inactive" />
                        <span className="star-icon las la-star inactive" />
                        <span className="checkbox-text">
                          and up
                          <span className="item-numbers">42</span>
                        </span>
                      </span>
                    </label>
                  </div>
                </li>
                <li>
                  <div className="checkbox-theme-default custom-checkbox ">
                    <input className="checkbox" type="checkbox" id="rating-6" />
                    <label htmlFor="rating-6">
                      <span className="stars-rating d-flex align-items-center">
                        <span className="star-icon las la-star active" />
                        <span className="star-icon las la-star inactive" />
                        <span className="star-icon las la-star inactive" />
                        <span className="star-icon las la-star inactive" />
                        <span className="star-icon las la-star inactive" />
                        <span className="checkbox-text">
                          and up
                          <span className="item-numbers">35</span>
                        </span>
                      </span>
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Body */}
        </aside>
        {/* End: Aside */}
      </div>
    </div>
  );
};
export default Filters;
