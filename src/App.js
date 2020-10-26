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
import Admin2Page from "./Page/container/AdminPage/Admin2Page";
import Admin3Page from "./Page/container/AdminPage/Admin3Page";
import Admin4Page from "./Page/container/AdminPage/Admin4Page";
import UploadVideoPage from "./Page/container/VideoPage/UploadVideoPage";
import UploadVideoSecondPage from "./Page/container/VideoPage/UploadVideoSecondPage";
import UploadVideoThirdPage from "./Page/container/VideoPage/UploadVideoThirdPage";
import CategoryEngPage from "./Page/container/VideoPage/CategoryEngPage";
import CategoryKorPage from "./Page/container/VideoPage/CategoryKorPage";
import UserLikePage from "./Page/container/VideoPage/UserLikePage";
import UserWatchedPage from "./Page/container/VideoPage/UserWatchedPage";

const App = () => {
  return (
    <div>
      <Route path="/" component={HomePage} exact={true} />
      <Route path="/Login" component={LoginPage} />
      <Route path="/Join" component={JoinPage} />
      <Route path="/View/:videoid" component={ViewPage} />
      <Route path="/List" component={ListPage} />
      <Route path="/Admin" component={AdminPage} />
      <Route path="/Admin2/:videoid" component={Admin2Page} />
      <Route path="/Admin3/:videoid" component={Admin3Page} />
      <Route path="/Admin4/:videoid" component={Admin4Page} />
      <Route path="/Mypage" component={MyPage} />
      <Route path="/Change" component={ChangePage} />
      <Route path="/UploadVideo" component={UploadVideoPage} />
      <Route path="/UploadVideoSecond" component={UploadVideoSecondPage} />
      <Route path="/UploadVideoThird" component={UploadVideoThirdPage} />
      <Route path="/CategoryEng" component={CategoryEngPage} />
      <Route path="/CategoryKor" component={CategoryKorPage} />
      <Route path="/UserLike" component={UserLikePage} />
      <Route path="/UserWatched" component={UserWatchedPage} />
    </div>
  );
};

export default App;
