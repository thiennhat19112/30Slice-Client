import { useEffect, useState } from "react";
import { getAllNews } from "../../app/services/user/news.service";
export default function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchNews = async () => {
    setLoading(true);
    const res = await getAllNews();
    console.log(res.data)
    if (res.status === 200) {
      setNews(res.data);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="shop-breadcrumb">
            <div className="breadcrumb-main">
              <h4 className="text-capitalize breadcrumb-title">Tất cả tin tức</h4>
            </div>
          </div>
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
      // layout ở đây
      <h1>nội dung here</h1>
    )}
    </>
  );
}
