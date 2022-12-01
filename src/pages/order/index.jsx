import Breadcrumb from "../../components/Breakcumb";

const Order = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="shop-breadcrumb">
              <div className="breadcrumb-main">
                <h4 className="text-capitalize breadcrumb-title">
                  Lịch sử đặt hàng
                </h4>
              </div>
            </div>
            <Breadcrumb />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="userDatatable orderDatatable global-shadow border py-30 px-sm-30 px-20 bg-white radius-xl w-100 mb-30">
              <div className="project-top-wrapper d-flex justify-content-between flex-wrap mb-25 mt-n10">
                <div className="d-flex align-items-center flex-wrap justify-content-center">
                  <div className="project-search order-search  global-shadow mt-10">
                    <form action="/" className="order-search__form">
                      <span data-feather="search" />
                      <input
                        className="form-control mr-sm-2 border-0 box-shadow-none"
                        type="search"
                        placeholder="Filter by keyword"
                        aria-label="Search"
                      />
                    </form>
                  </div>
                </div>
                {/* End: .d-flex */}
                <div className="content-center mt-10">
                  <div className="button-group m-0 mt-xl-0 mt-sm-10 order-button-group">
                    <button
                      type="button"
                      className="order-bg-opacity-secondary text-secondary btn radius-md"
                    >
                      Export
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-primary mr-0 radius-md"
                    >
                      <i className="la la-plus" /> Add order
                    </button>
                  </div>
                </div>
                {/* End: .content-center */}
              </div>
              {/* End: .project-top-wrapper */}
              <div className="tab-content" id="ap-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="ap-overview"
                  role="tabpanel"
                  aria-labelledby="ap-overview-tab"
                >
                  {/* Start Table Responsive */}
                  <div className="table-responsive">
                    <table className="table mb-0 table-hover table-borderless border-0">
                      <thead>
                        <tr className="userDatatable-header">
                          <th>
                            <span className="checkbox-text ml-3">order id</span>
                          </th>
                          <th>
                            <span className="userDatatable-title">
                              Customers
                            </span>
                          </th>
                          <th>
                            <span className="userDatatable-title">Status</span>
                          </th>
                          <th>
                            <span className="userDatatable-title">Amount</span>
                          </th>
                          <th>
                            <span className="userDatatable-title float-right">
                              Date
                            </span>
                          </th>
                          <th>
                            <span className="userDatatable-title float-right">
                              Actions
                            </span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="orderDatatable-title">
                              <p className="d-block mb-0">#02-0001</p>
                            </div>
                          </td>
                          <td>
                            <div className="orderDatatable-title">
                              Kellie Marquot
                            </div>
                          </td>
                          <td>
                            <div className="orderDatatable-status d-inline-block">
                              <span className="order-bg-opacity-success  text-success rounded-pill active">
                                shiped
                              </span>
                            </div>
                          </td>
                          <td>
                            <div className="orderDatatable-title">
                              $4,248.66
                            </div>
                          </td>
                          <td>
                            <div className="orderDatatable-title float-right">
                              January 01, 2020
                            </div>
                          </td>
                          <td>
                            <ul className="orderDatatable_actions mb-0 d-flex flex-wrap float-right">
                              <li>
                                <a href="#" className="view">
                                  <span data-feather="eye" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="edit">
                                  <span data-feather="edit" />
                                </a>
                              </li>
                              <li>
                                <a href="#" className="remove">
                                  <span data-feather="trash-2" />
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* Table Responsive End */}
                </div>
              </div>
              <div className="d-flex justify-content-sm-end justify-content-start mt-15 pt-25 border-top">
                <nav className="atbd-page ">
                  <ul className="atbd-pagination d-flex">
                    <li className="atbd-pagination__item">
                      <a
                        href="#"
                        className="atbd-pagination__link pagination-control"
                      >
                        <span className="la la-angle-left" />
                      </a>
                      <a href="#" className="atbd-pagination__link">
                        <span className="page-number">1</span>
                      </a>
                      <a href="#" className="atbd-pagination__link active">
                        <span className="page-number">2</span>
                      </a>
                      <a href="#" className="atbd-pagination__link">
                        <span className="page-number">3</span>
                      </a>
                      <a
                        href="#"
                        className="atbd-pagination__link pagination-control"
                      >
                        <span className="page-number">...</span>
                      </a>
                      <a href="#" className="atbd-pagination__link">
                        <span className="page-number">12</span>
                      </a>
                      <a
                        href="#"
                        className="atbd-pagination__link pagination-control"
                      >
                        <span className="la la-angle-right" />
                      </a>
                      <a href="#" className="atbd-pagination__option"></a>
                    </li>
                    <li className="atbd-pagination__item">
                      <div className="paging-option">
                        <select name="page-number" className="page-selection">
                          <option value={20}>20/page</option>
                          <option value={40}>40/page</option>
                          <option value={60}>60/page</option>
                        </select>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            {/* End: .userDatatable */}
          </div>
          {/* End: .col */}
        </div>
      </div>
    </>
  );
};
export default Order;
