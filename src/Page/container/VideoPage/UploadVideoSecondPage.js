import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components"; /*npm i styled-components */
import { Link } from "react-router-dom";
import {
  Typography,
  Button,
  Form,
  message,
  Input,
} from "antd"; /*antd다운 필요  npm i antd*/

import Header from "../../component/Header.js";
import Navi from "../../component/Navi.js";

import "./UploadVideoSecondPage.css";

//태그 디자인
const TagBoxBlock = styled.div`
  width: 100%;
  padding-top: 0.5rem;
  margin-top: 0;
  h4 {
    color: #fab404
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`;
const TagForm = styled.form`
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  width: 256px;
  margin-top: 0;
  input,
  button {
    outline: none;
    border: none;
    font-size: 1rem;
  }
  input {
    padding: 0px;
    flex: 1;
  }
  button {
    cursor: pointer;
    padding-right: 1rem;
    padding-left: 1rem;
    border: none;
    background: #fab404;
    color: white;
    font-weight: bold;
    &:hover {
      background: #fab404;
    }
  }
`;
const Tag = styled.div`
  margin-right: 0.5rem;
  color: #fcde94;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
const TagListBlock = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

// React.memo를 사용하여 tag 값이 바뀔 때만 리렌더링되도록 처리
const TagItem = React.memo(({ tag, onRemove }) => (
  <Tag onClick={() => onRemove(tag)}>#{tag}</Tag>
));

// React.memo를 사용하여 tags 값이 바뀔 때만 리렌더링되도록 처리
const TagList = React.memo(({ tags, onRemove }) => (
  <TagListBlock>
    {tags.map((tag) => (
      <TagItem key={tag} tag={tag} onRemove={onRemove} />
    ))}
  </TagListBlock>
));

const { Title } = Typography;

function UploadVideoSecondPage() {
  //정보나타내주기 위해 local에서 정보 get
  var video_thumbnail = localStorage.getItem("thumbnail");
  var video_category = localStorage.getItem("inbucket");
  var video_title = localStorage.getItem("pvideotitle");
  var video_userid = localStorage.getItem("userid");

  //태그관련
  const [input, setInput] = useState("");
  const [localTags, setLocalTags] = useState([]);
  const insertTag = useCallback(
    (tag) => {
      if (!tag) return;
      if (localTags.includes(tag)) return;
      setLocalTags([...localTags, tag]);
    },
    [localTags]
  );
  const onRemove = useCallback(
    (tag) => {
      setLocalTags(localTags.filter((t) => t !== tag));
    },
    [localTags]
  );
  const onChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);
  const onSubmittag = useCallback(
    (e) => {
      e.preventDefault();
      insertTag(input.trim());
      setInput("");
    },
    [input, insertTag]
  );

  /*submit버튼 누르면 페이지 넘어감  */
  const onSubmit = (e) => {};
  return (
    <div>
      <Header />
      <Navi />
      <div class="UploadVideoSecondPage">
        <Title level={2} id="uploadpage2_title">
          {" "}
          Upload Video
        </Title>
        <div id="video_thumbnail_info">
          <img
            src={video_thumbnail}
            width="550px"
            height="300px"
            alt="thumbnail"
          />
        </div>
        <table id="video_info">
          <tr>
            <td id="video_table_h">제목</td>
            <td id="video_table_b">{video_title}</td>
          </tr>
          <tr>
            <td id="video_table_h">카테고리</td>
            <td id="video_table_b">{video_category}</td>
          </tr>
          <tr>
            <td id="video_table_h">게시자</td>
            <td id="video_table_b">{video_userid}</td>
          </tr>
        </table>

        <Form onSubmit={onSubmit}>
          <TagBoxBlock>
            <label id="tag_label">태그</label>
            <TagForm id="tag_upload" onSubmit={onSubmittag}>
              <input
                id="tag_input"
                placeholder="태그를 입력하세요"
                value={input}
                onChange={onChange}
              />
              <button id="tag_add_btn" type="submit">
                추가
              </button>
            </TagForm>
            <TagList
              id="tag_list"
              tags={localTags}
              onRemove={onRemove}
            ></TagList>
          </TagBoxBlock>
          {/*버튼*/}
          <br />
          <Link to="/UploadVideoThird">
            <Button
              id="uploadpage2_submit_btn"
              type="primary"
              onClick={onSubmit}
            >
              Submit
            </Button>
          </Link>
        </Form>
      </div>
    </div>
  );
}
export default UploadVideoSecondPage;
