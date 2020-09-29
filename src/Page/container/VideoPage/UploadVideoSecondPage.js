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
import SizeContext from "antd/lib/config-provider/SizeContext";

import Header from "../../component/Header.js";
import Navi from "../../component/Navi.js";

import "./UploadVideoSecondPage.css";
const TagBoxBlock = styled.div`
  width: 100%;
  border-top: 1px solid  #fab404;
  padding-top: 2rem;
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
  border: 1px solid #fab404; /* 스타일 초기화 */
  input,
  button {
    outline: none;
    border: none;
    font-size: 1rem;
  }
  input {
    padding: 0.5rem;
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
  color: #fab404;
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
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      insertTag(input.trim());
      setInput("");
    },
    [input, insertTag]
  );

  return (
    <div>
      <Header />
      <Navi />
      <div
        class="UploadVideoSecondPage"
        style={{ maxWidth: "700px", margin: "0.5rem auto" }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            color: "#fab404",
          }}
        >
          <Title level={2}> Upload </Title>
        </div>

        <Form onSubmit>
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
          ></div>
          {/*키워드*/}

          <label style={{ color: "#fab404" }}>키워드</label>
          <Input
            id="keyword_input"
            style={{ width: "700px", height: "30px" }}
          />

          {/*#태그기능.....어케해..하루종일해도 못하겠네 */}
          {/*
                <br />
                <br />
                <div class="inner">
                    <label style={{ color: '#fab404' }}>태그</label>
                    <div class="tag_input_wrap">
                        <span class="sharp" style={{ color: '#fab404' }}>#</span>
                <input id="tag_input" style={{ width: '610px', height: '30px' }} onChange /> */}
          {/*<Input type="text" class="_tagInput" value="질문에 맞는 태그를 입력해주세요 (최대 10개)" title="태그 입력" />*/}
          {/*<button href="#" id="tag_add_btn" style={{ width: '50px', height: '35px' }}>추가</button>
                </div>
                    <div class="tag_srch _tagAutoCompleteArea" style={{ display: 'none' }}></div>
                    <div class="tag_list" style={{ display: 'block' }}>
                        <ul >
                            <li style={{ color: '#fab404' }}>
                                <span class="tag">#이용</span>
                                <a href="#" class="_clickcode:tag.del _tagDelete _param('이용')">
                                    <span class="ico_cancel">(태그 추가 취소)</span>
                                </a>
                                <span class="tag">#워드벌룬</span>
                                <a href="#" class="_clickcode:tag.del _tagDelete _param('워드벌룬')">
                                    <span class="ico_cancel">(태그 추가 취소)</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    </div>*/}
          {/*<div class="wrap_tag">
                    <div class="_param(false|false|4)" id="tagList_221516749265" style={{ cursor: 'default' }}>
                        <strong class="blind">태그</strong>
                        <a href="/PostListByTagName.nhn?blogId=pjok1122&amp;logType=mylog&amp;tagName=html" class="item pcol2 itemTagfont _setTop" onclick="clickcr(this,'tag.list','','',event)">
                            <span class="ell">#html</span>
                            <i class="pcol2b"></i>
                        </a>
                    </div>
                </div>*/}
          <br />
          <br />
          <TagBoxBlock>
            <label style={{ color: "#fab404" }}>태그</label>
            <TagForm
              onSubmit={onSubmit}
              style={{ width: "700px", height: "30px" }}
            >
              <input
                placeholder="태그를 입력하세요"
                value={input}
                onChange={onChange}
              />
              <button type="submit">추가</button>
            </TagForm>
            <TagList tags={localTags} onRemove={onRemove}></TagList>
          </TagBoxBlock>

          {/*등장인물 */}
          <br />
          <label style={{ color: "#fab404" }}>등장인물</label>
          <Input
            id="character_input"
            style={{ width: "700px", height: "30px" }}
          />
          {/*버튼*/}
          <br />
          <br />
          <Button
            id="save_btn"
            style={{ width: "60px", height: "30px" }}
            type="primary"
            onClick
          >
            저장
          </Button>
        </Form>
      </div>
    </div>
  );
}
export default UploadVideoSecondPage;
