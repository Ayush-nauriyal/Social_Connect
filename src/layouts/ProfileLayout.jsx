import React, { useMemo, useState } from "react";
import Topbar from '../components/common/Topbar'
import { getCurrentUser } from "../api/FireStoreApi";
import Profile from "../Pages/Profile";


function ProfileLayout() {
    const [currentUser, setCurrentUser] = useState({});
  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return (
<div>
      <Topbar/>
      <Profile   currentUser={currentUser}/>
    </div>  )
}

export default ProfileLayout