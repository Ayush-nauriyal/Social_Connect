import React, { useMemo, useState } from "react";
import Topbar from '../components/common/Topbar'
import { getCurrentUser } from "../api/FireStoreApi";
import Home from '../Pages/home'

function HomeLayout() {
  const [currentUser, setCurrentUser] = useState({});
  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return (
    <div>
      <Topbar/>
        <Home currentUser={currentUser}/>
    </div>
  )
}

export default HomeLayout