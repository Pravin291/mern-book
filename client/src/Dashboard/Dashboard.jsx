import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSideBar from "./DashSidebar";

import DashProfile from "./DashProfile";
import UploadBook from "./UploadBook";
import ManageBooks from "./Managebook";
import EditBook from "./EditBook";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if(tabFromUrl){
      setTab(tabFromUrl)
    }
  }, [location.search]);
  return <div className="min-h-screen mt-16 flex flex-col md:flex-row">
    <div className="md:w-56">
      <DashSideBar/>
    </div>
    {tab === 'profile' && <DashProfile/>}
    {tab === 'uploadbook' && <UploadBook/>}
    {tab === 'managebook' && <ManageBooks/>}
    {tab === 'editbook' && <EditBook/>}
    {tab === 'comments' && <ManageBooks/>}
  </div>;
}
