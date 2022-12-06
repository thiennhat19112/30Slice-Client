import { useEffect, useState } from "react";
import { getCombo } from "../../app/services/user/combo.service";
export default function News() {
  const [combo, setCombo] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchComo = async () => {
    setLoading(true);
    const res = await getCombo();
    console.log(res)
    if (res.status === 200) {
      setCombo(res);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchComo();
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="shop-breadcrumb">
            <div className="breadcrumb-main">
              <h4 className="text-capitalize breadcrumb-title">Tất cả combo</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
