import React, { useEffect, useState } from "react";
import { Sidebar, SidebarItem } from "flowbite-react";
import { HiAnnotation, HiArrowSmRight, HiBookOpen, HiBookmark, HiChartPie, HiCloudUpload, HiDocumentText, HiOutlineUserGroup, HiUser } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { signoutSuccess } from "../redux/user/UserSlice";
import { useDispatch, useSelector } from "react-redux";
export default function DashSidebar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const {currentUser} = useSelector(state=>state.user);
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "GET",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup className="flex flex-col gap-1">
      
          <Link to="/dashboard?tab=profile">
            <Sidebar.Item
              active={tab === "profile"}
              icon={HiUser}
              label={currentUser.isAdmin ? 'Admin':'User'}
              labelColor="dark"
              as="div"
            >
              Profile
            </Sidebar.Item>
          </Link>
          {currentUser.isAdmin && (
            <Link to={"/dashboard?tab=uploadbook"}>
              <Sidebar.Item 
                active={tab === "uploadbook"}
                icon={HiCloudUpload}
                as="div"
              >
                Upload Book
              </Sidebar.Item>
            </Link>
          )}
           
           {currentUser.isAdmin && (
            <>
            <Link to={"/dashboard?tab=managebook"}>
              <Sidebar.Item 
                active={tab === "managebook"}
                icon={HiBookmark}
                as="div"
              >
                Manage Book
              </Sidebar.Item>
            </Link>
            </>
          )}
         
          <SidebarItem
            onClick={handleSignout}
            icon={HiArrowSmRight}
            className="cursor-pointer"
          >
            Sign Out
          </SidebarItem>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
