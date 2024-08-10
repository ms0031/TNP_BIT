import React, { useContext } from "react";
import StudentNavbar from "../StudentNavbar/StudentNavbar";
import BottomDrawer from "../BottomDrawer/BottomDrawer";

function Profile() {
  return (
    <div className="bg-gray-900 h-screen">
      <div>
        <StudentNavbar />
      </div>
      <div>Hey {}</div>
      <div>
        <BottomDrawer />
      </div>
    </div>
  );
}

export default Profile;
