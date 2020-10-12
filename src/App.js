import React from "react";
import { Route } from "react-router-dom";

import HomePage from "./Page/container/HomePage/HomePage.js";
import LoginPage from "./Page/container/UserPage/LoginPage.js";
import JoinPage from "./Page/container/UserPage/JoinPage";
import ViewPage from "./Page/container/VideoPage/ViewPage";
import MyPage from "./Page/container/UserPage/MyPage";
import ChangePage from "./Page/container/UserPage/ChangePage";
import ListPage from "./Page/container/VideoPage/ListPage";
import AdminPage from "./Page/container/AdminPage/AdminPage";
import UploadVideoPage from "./Page/container/VideoPage/UploadVideoPage";
import UploadVideoSecondPage from "./Page/container/VideoPage/UploadVideoSecondPage";
import UploadVideoThirdPage from "./Page/container/VideoPage/UploadVideoThirdPage";

const App = () => {
  return (
    <div>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/Login" component={LoginPage} />
      <Route path="/Join" component={JoinPage} />
      <Route path="/View/:videoid" component={ViewPage} />
      <Route path="/List" component={ListPage} />
      <Route path="/Admin" component={AdminPage} />
      <Route path="/Mypage" component={MyPage} />
      <Route path="/Change" component={ChangePage} />
      <Route path="/UploadVideo" component={UploadVideoPage} />
      <Route path="/UploadVideoSecond" component={UploadVideoSecondPage} />
      <Route path="/UploadVideoThird" component={UploadVideoThirdPage} />
    </div>
  );
};

export default App;
