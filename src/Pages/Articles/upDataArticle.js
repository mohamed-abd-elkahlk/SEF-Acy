import React from "react";
import Line from "../../Components/Line/Line";
import AdminSidebar from "../../Components/AdminComponents/AdminSidebar";
import FormUpDataArticle from "./FormUpDataArticle.js";

function UpDataArticle ()  {

    return (
    <div>
        <div className="col-11 m-auto overflow-hidden">
          <div className="ps-4 text-white py-2 my-5">
            <h3 className="fs-5">Create New Article</h3>
            <Line />
            <h5 className="fs-5 mt-2">6th June 2023</h5>
          </div>
          <div className="col-12 d-block d-lg-flex">
          <AdminSidebar/>
          <FormUpDataArticle />
          </div>
        </div>
    </div>
  );
};

export default UpDataArticle;
