import Breadcrumb from "../../components/Breakcumb";
import { GetOrderHistory } from "../../app/services/user/order.service";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function OrderInfo (){
    const [order, setOrder] = useState([]);
    const [loading, setLoading] = useState(false);
    return (
        <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="shop-breadcrumb">
                <div className="breadcrumb-main">
                  <h4 className="text-capitalize breadcrumb-title">
                    Thông tin đơn hàng
                  </h4>
                </div>
              </div>
              <Breadcrumb BreadName="Thông tin đơn hàng" />
            </div>
          </div>
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
                            placeholder="Tìm kiếm..."
                            aria-label="Search"
                          />
                        </form>
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
                                <span className="checkbox-text ml-3">
                                  Mã đơn hàng
                                </span>
                              </th>
                              <th>
                                <span className="userDatatable-title">
                                  Tên người nhận
                                </span>
                              </th>
                              <th>
                                <span className="userDatatable-title">
                                  Trạng thái
                                </span>
                              </th>
                              <th>
                                <span className="userDatatable-title">
                                  Trạng thái thanh toán
                                </span>
                              </th>
                              <th>
                                <span className="userDatatable-title">
                                  Phương thức thanh toán
                                </span>
                              </th>
                              <th>
                                <span className="userDatatable-title">
                                  Tổng cộng
                                </span>
                              </th>
                              <th>
                                <span className="userDatatable-title float-right">
                                  Ngày đặt hàng
                                </span>
                              </th>
                              <th>
                                <span className="userDatatable-title float-right">
                                  Hành động
                                </span>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* {orderHistory.map((item) => (
                              <tr key={item._id}>
                                <td>
                                  <div className="orderDatatable-title">
                                    <Link to={/order/ + item._id}>
                                      <p className="d-block mb-0">#{item._id}</p>
                                    </Link>
                                  </div>
                                </td>
                                <td>
                                  <div className="orderDatatable-title">
                                    {item.Receiver}
                                  </div>
                                </td>
                                <td>
                                  <div className="orderDatatable-status d-inline-block">
                                    {item.Status === "Pending" ? (
                                      <span className="order-bg-opacity-warning  text-warning rounded-pill active">
                                        Chờ xác nhận
                                      </span>
                                    ) : (
                                      <span className="order-bg-opacity-success  text-success rounded-pill active">
                                        Đang giao hàng
                                      </span>
                                    )}
                                  </div>
                                </td>
  
                                <td>
                                  <div className="orderDatatable-status d-inline-block">
                                    {item.Payment_Status === "completed" ? (
                                      <span className="order-bg-opacity-success  text-success rounded-pill active">
                                        Đã thanh toán
                                      </span>
                                    ) : (
                                      <span className="order-bg-opacity-danger  text-danger rounded-pill active">
                                        Chưa thanh toán
                                      </span>
                                    )}
                                  </div>
                                </td>
                                <td>
                                  <div className="orderDatatable-title">
                                    {item.Payment_Method.toUpperCase()}
                                  </div>
                                </td>
                                <td>
                                  <div className="orderDatatable-title">
                                    {item.Amount.toLocaleString("vi-VN")}đ
                                  </div>
                                </td>
                                <td>
                                  <div className="orderDatatable-title float-right">
                                    {new Date(
                                      item.createdAt
                                    ).toLocaleDateString()}
                                  </div>
                                </td>
                                <td>
                                  <ul className="orderDatatable_actions mb-0 d-flex flex-wrap float-right">
                                    <button className="btn btn-danger">
                                      Huỷ
                                    </button>
                                  </ul>
                                </td>
                              </tr>
                            ))} */}
                          </tbody>
                        </table>
                      </div>
                      {/* Table Responsive End */}
                    </div>
                  </div>
                </div>
                {/* End: .userDatatable */}
              </div>
              {/* End: .col */}
            </div>
          </div>
        )}
      </>
    )
}