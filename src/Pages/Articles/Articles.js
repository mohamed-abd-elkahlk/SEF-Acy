import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AdminSidebar from "../../Components/AdminComponents/AdminSidebar";
import PrgTableArticles from "../../Components/Table/PrgTableArticles";
import { fetchArticals } from "../../Redux/reducer/Articles";

function Articles({ Status }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchArticals());
  });
  var users = useSelector((state) => state.article.articles);
  if (Status !== "All") {
    users = users.filter((user) => user.Status === Status);
  }
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <p
            style={{
              width: "120px",
              borderBottom: "2px solid rgba(190,154,48,255)",
            }}
            className="py-2"
          >
            Admin Panel
          </p>
          <p className="mt-2">6th June 2023</p>
        </div>
        <div className="text-end">
          <Link to={"/admin/AddArticle"} className="btn btn-warning text-light">
            Add Article
          </Link>
        </div>
      </div>
      <div className="d-block d-lg-flex justify-content-between">
        <AdminSidebar type={"Articles"} />
        <div className="col-11 h-100 col-lg-9 m-auto ">
          <PrgTableArticles itemsPerPage={6} items={users} />
        </div>
      </div>
    </div>
  );
}

export default Articles;
