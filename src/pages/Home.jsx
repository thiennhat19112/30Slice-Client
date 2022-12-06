import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductsHome } from "../app/services/user/product.service";
import Product from "../components/Product";
function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchProducts = async () => {
    const res = await getProductsHome();
    console.log(res);

    setProducts(res);
    setLoading(false);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="container-fluid m-0 p-0">
        <div className="image-home">
          <Link to="/booking" className="offset">
            Đặt lịch
          </Link>
          <img
            src="/assets/images/dsc01875-8577.jpg"
            alt=""
            width="100%"
            height="100%"
          />
        </div>
        {loading ? (
          <div className="card-body">
            <div className="spin-container text-center">
              <div className="atbd-spin-dots spin-lg">
                <span className="spin-dot badge-dot dot-primary"></span>
                <span className="spin-dot badge-dot dot-primary"></span>
                <span className="spin-dot badge-dot dot-primary"></span>
                <span className="spin-dot badge-dot dot-primary"></span>
              </div>
            </div>
          </div>
        ) : (
          <div className="container-fluid w-80 pt-3">
            <h1>Sản phẩm mới nhất</h1>
            <div className="row product-page-list justify-content-center">
              {products?.productsNew?.map((product) => (
                <Product prod={product} />
              ))}
            </div>
            <h1>Sản phẩm nổi bật</h1>
            <div className="row product-page-list justify-content-center">
            {products?.productHot?.map((product) => (
                <Product prod={product} />
              ))}
            </div>
            <h1>Tin tức</h1>
            <div className="row">
              <div className="col-md-6 col-sm-12 mb-25">
                <div className="media  py-30  pl-30 pr-20 bg-white radius-xl users-list ">
                  <img
                    className=" mr-20 rounded-circle wh-80 bg-opacity-primary  "
                    src="/assets/img/tm1.png"
                    alt="Generic placeholder image"
                  />
                  <div className="media-body d-xl-flex users-list-body">
                    <div className="flex-1 pr-xl-30 users-list-body__title">
                      <h6 className="mt-0 fw-500">Duran Clayton </h6>
                      <span>Graphic Designer/ UI &amp; UX </span>
                      <p className="mb-0">
                        Lorem ipsum dolor amet, consetetur sadipscing elitr sed
                        diam nonumy eirmod.
                      </p>
                      <div className="users-list-body__bottom">
                        <span>
                          <span className="fw-600">$25/</span>hr
                        </span>
                        <span className="ml-15">
                          <span className="fw-600">$88K </span>earned
                        </span>
                      </div>
                    </div>
                    <div className="users-list__button mt-xl-0 mt-15">
                      <button className="btn btn-primary btn-default btn-squared text-capitalize px-20 mb-10 global-shadow">
                        view profile
                      </button>
                      <button
                        type="button"
                        className="border text-capitalize px-25 color-gray transparent shadow2 follow my-xl-0 radius-md"
                      >
                        message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 mb-25">
                <div className="media  py-30  pl-30 pr-20 bg-white radius-xl users-list ">
                  <img
                    className=" mr-20 rounded-circle wh-80 bg-opacity-primary  "
                    src="/assets/img/tm1.png"
                    alt="Generic placeholder image"
                  />
                  <div className="media-body d-xl-flex users-list-body">
                    <div className="flex-1 pr-xl-30 users-list-body__title">
                      <h6 className="mt-0 fw-500">Duran Clayton </h6>
                      <span>Graphic Designer/ UI &amp; UX </span>
                      <p className="mb-0">
                        Lorem ipsum dolor amet, consetetur sadipscing elitr sed
                        diam nonumy eirmod.
                      </p>
                      <div className="users-list-body__bottom">
                        <span>
                          <span className="fw-600">$25/</span>hr
                        </span>
                        <span className="ml-15">
                          <span className="fw-600">$88K </span>earned
                        </span>
                      </div>
                    </div>
                    <div className="users-list__button mt-xl-0 mt-15">
                      <button className="btn btn-primary btn-default btn-squared text-capitalize px-20 mb-10 global-shadow">
                        view profile
                      </button>
                      <button
                        type="button"
                        className="border text-capitalize px-25 color-gray transparent shadow2 follow my-xl-0 radius-md"
                      >
                        message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 mb-25">
                <div className="media  py-30  pl-30 pr-20 bg-white radius-xl users-list ">
                  <img
                    className=" mr-20 rounded-circle wh-80 bg-opacity-primary  "
                    src="/assets/img/tm1.png"
                    alt="Generic placeholder image"
                  />
                  <div className="media-body d-xl-flex users-list-body">
                    <div className="flex-1 pr-xl-30 users-list-body__title">
                      <h6 className="mt-0 fw-500">Duran Clayton </h6>
                      <span>Graphic Designer/ UI &amp; UX </span>
                      <p className="mb-0">
                        Lorem ipsum dolor amet, consetetur sadipscing elitr sed
                        diam nonumy eirmod.
                      </p>
                      <div className="users-list-body__bottom">
                        <span>
                          <span className="fw-600">$25/</span>hr
                        </span>
                        <span className="ml-15">
                          <span className="fw-600">$88K </span>earned
                        </span>
                      </div>
                    </div>
                    <div className="users-list__button mt-xl-0 mt-15">
                      <button className="btn btn-primary btn-default btn-squared text-capitalize px-20 mb-10 global-shadow">
                        view profile
                      </button>
                      <button
                        type="button"
                        className="border text-capitalize px-25 color-gray transparent shadow2 follow my-xl-0 radius-md"
                      >
                        message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 mb-25">
                <div className="media  py-30  pl-30 pr-20 bg-white radius-xl users-list ">
                  <img
                    className=" mr-20 rounded-circle wh-80 bg-opacity-primary  "
                    src="/assets/img/tm1.png"
                    alt="Generic placeholder image"
                  />
                  <div className="media-body d-xl-flex users-list-body">
                    <div className="flex-1 pr-xl-30 users-list-body__title">
                      <h6 className="mt-0 fw-500">Duran Clayton </h6>
                      <span>Graphic Designer/ UI &amp; UX </span>
                      <p className="mb-0">
                        Lorem ipsum dolor amet, consetetur sadipscing elitr sed
                        diam nonumy eirmod.
                      </p>
                      <div className="users-list-body__bottom">
                        <span>
                          <span className="fw-600">$25/</span>hr
                        </span>
                        <span className="ml-15">
                          <span className="fw-600">$88K </span>earned
                        </span>
                      </div>
                    </div>
                    <div className="users-list__button mt-xl-0 mt-15">
                      <button className="btn btn-primary btn-default btn-squared text-capitalize px-20 mb-10 global-shadow">
                        view profile
                      </button>
                      <button
                        type="button"
                        className="border text-capitalize px-25 color-gray transparent shadow2 follow my-xl-0 radius-md"
                      >
                        message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default Home;
