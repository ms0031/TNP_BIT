import React, { useContext, useEffect, useState } from "react";
import StudentNavbar from "../StudentNavbar/StudentNavbar";
import BottomDrawer from "../BottomDrawer/BottomDrawer";
import { StudentContext } from "../../../../../LoginContext/StudentContext";

function Profile() {
  useEffect(() => {
    const context = useContext(StudentContext);
    console.log(context.user);
    const storedData = localStorage.getItem("studentUser");
    const parsedData = JSON.parse(storedData);
    context.setuser(parsedData);
  }, []);

  return (
    <div className="bg-gray-900 h-screen">
      <div>
        <StudentNavbar />
      </div>
      <div>
        <h2 className="text-white">Heyy {}</h2>
      </div>
      <div>
        <BottomDrawer />
      </div>
    </div>
  );
}

export default Profile;
