
# WordBalloon - 동영상 말풍선 자막 서비스

📝 말풍선 형태의 동영상 자막 서비스 **워드벌룬**은 영상 속 화자를 구별하는데 어려움을 겪는 시각장애인을 위한 서비스로, 영상 속 인물들 간의 대화를 텍스트로 변환한 후 말풍선 형식으로 자막을 띄워 정확하고 편리한 시청을 도와줍니다. 

🏆 2020 한이음 공모전 입선, 2020 WISET ICT 팀 프로젝트 결과발표대회 장려상

🎬 [실행 영상 보러가기](https://youtu.be/3_EpyhLw_CI)

➡ [Front-end Repository 바로가기](https://github.com/sok98/Front-end), [영상처리 Repository 바로가기](https://github.com/sok98/openCV)

📅 2020. 03 ~ 2020. 11

👭 서예슬, 강신비, 장혜정, 최수진

* * *

## 📱 실행 화면

![image](https://user-images.githubusercontent.com/43838027/132805254-426292f5-d49c-42c6-b87e-8e9b403bc093.png)



## 💡 주요 기능   
- AWS에서 제공하는 Transcribe API를 사용하여 영상 속 음성을 텍스트로 변환합니다.
- 추출한 텍스트에서 화자를 구분하고 타임 스탬프와 함께 스크립트를 csv 파일로 구성합니다.
- 입술의 움직임을 분석하여 화자를 찾고 화자 근처에 말풍선 형태의 자막을 삽입합니다.
- TextRank Algorithm을 이용하여 시청 영상들의 키워드를 추출하여 사용자의 관심 대상을 파악합니다.
- 영상의 좋아요 기능, 업로드 기능을 포함합니다.


## 🛠 사용 스킬
- **AWS Transcribe API**를 이용하여 대화 내용 추출
- **OpenCV**를 이용한 영상 말풍선 합성
- **Dlib**을 이용하여 화자 구분

- - -

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
