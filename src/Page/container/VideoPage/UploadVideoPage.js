import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Button,
  Form,
  message,
  Input,
} from "antd"; /*antd다운 필요  npm i antd*/
import Dropzone from "react-dropzone"; /*react-dropzone다운필요 npm install react-dropzone --save*/
import styled from "styled-components"; /*npm i styled-components */
import axios from "axios"; /*npm i --save axios */
import Header from "../../component/Header.js";
import Navi from "../../component/Navi.js";
import "./UploadVideoPage.css";

/*태그 디자인 일부 입니다*/
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

const CatogoryOptions = [
  { value: 0, label: "한국영상" },
  { value: 1, label: "영어영상" },
  { value: 2, label: "독일영상" },
];

function UploadVideoPage() {
  const [VideoTitle, setVideoTitle] = useState("");
  const [Categories, setCategories] = useState("한국");
  const [FilePath, setFilePath] = useState("");
  const [Duration, setDuration] = useState("");
  const [Thumbnail, setThumbnail] = useState("");

  /*UploadVidoPage2 에서 가져온애들*/
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
  /*UploadVidoPage2 에서 가져온애들 여기까지*/

  /* 제목 작동(이벤트)*/
  const onTitleChange = (e) => {
    setVideoTitle(e.currentTarget.value);
  };
  /* 카테고리 작동(이벤트)*/
  const onCategoryChange = (e) => {
    setCategories(e.currentTarget.value);
  };
  /*submit버튼 누르면 페이지 넘어감  */
  const onSubmit = (e) => {};
  /*드래그앤드롭  */
  const onDrop = (files) => {
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", files[0]);

    /*서버에 request보낼껀데 */
    /*영상 2분30초*/
    axios.post("/api/video/uploadVideo", formData, config).then((response) => {
      if (response.data.success) {
        alert("업로드 성공");
        console.log(response.data);

        {
          /*업로드 성공시 썸네일 */
        }
        let variable = {
          filePath: response.data.filePath,
          fileName: response.data.fileName,
        };
        setFilePath(response.data.filePath);

        axios.post("/api/video/thumbnail", variable).then((response) => {
          if (response.data.success) {
            setDuration(response.data.fileDuration);
            setThumbnail(response.data.thumbsFilePath);
          } else {
            alert("썸네일 업로드 실패");
          }
        });
      } else {
        alert("업로드 실패");
      }
    });
  };

  return (
    <div>
      <Header />
      <Navi />
      <div
        class="UploadVideoPage"
        style={{ maxWidth: "700px", margin: "0.5rem auto" }}
      >
        <div class="UploadVideoPag_2">
          <Title level={2} id="upload_title">
            {" "}
            Upload Video
          </Title>
        </div>
        <Form onSubmit>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {/*Drop 영상부분*/}
            <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
              {({ getRootProps, getInputProps }) => (
                <div class="dropzone_video" {...getRootProps()}>
                  <input {...getInputProps()} />
                </div>
              )}
            </Dropzone>

            {/*Thumbnail썸네일부분*/}
            {/*강의영상은  썸네일을 서버에서 가져와서 하는 부분 (동영상 강의 처럼) */}
            {Thumbnail && (
              <div>
                <img
                  src={`http://localhost:5000/${Thumbnail}`}
                  alt="Thumbnail"
                />
              </div>
            )}

            {/*이것은 썸네일을 파일업로드 식으로 한경우 파일업로드식으로 안할꺼면 지워도 됨
                    <Dropzone
                        id="thumbnail_dropzone"
                        onDrop={onDrop}
                        multiple={false}
                        maxSize={800000000}>
                        {({ getRootProps, getInputProps }) => (
                            <div style={{
                                width: '300px', height: '240px', border: '1px solid lightgray', display: 'flex',
                                alignItems: 'center', justifyContent: 'center'
                            }}{...getRootProps()}>
                                <input {...getInputProps()} />
                                <Icon type="PlusOutlined" style={{ fontSize: '3rem' }} />
                            </div>
                        )}
                    </Dropzone>*/}
          </div>

          {/*카테고리*/}
          <br class="aa" />
          <br />
          <select
            id="category_select"
            style={{ width: "705px", height: "40px" }}
            onChange={onCategoryChange}
          >
            {CatogoryOptions.map((item, index) => (
              <option key={index} value={item.valuel}>
                {item.label}
              </option>
            ))}
          </select>

          {/*제목*/}
          <br class="aa" />
          <br />
          <label style={{ color: "#fab404" }}>Tittle</label>
          <br />
          <input
            id="title_input"
            style={{ width: "700px", height: "30px" }}
            onChange={onTitleChange}
            value={VideoTitle}
          />
          {/*태그 */}
          <TagBoxBlock>
            <label style={{ color: "#fab404" }}>태그</label>
            <TagForm
              onSubmit={onSubmittag}
              style={{ width: "700px", height: "30px" }}
              id="tagform_upload"
            >
              <input
                id="tag_input"
                placeholder="태그를 입력하세요"
                value={input}
                onChange={onChange}
              />
              <button type="submit" id="tag_add_btn">
                추가
              </button>
            </TagForm>
            <TagList
              tags={localTags}
              onRemove={onRemove}
              id="tag_list"
            ></TagList>
          </TagBoxBlock>
          {/*버튼*/}
          <br />
          {/*<Link to="/UploadVideoSecond">  두번쨰페이지 필요없어서 링크넘길필요없어짐*/}
          <Button
            id="submit_btn"
            style={{ width: "60px", height: "30px" }}
            type="primary"
            onClick={onSubmit}
          >
            Submit
          </Button>
          {/*</Link>*/}
        </Form>
      </div>
    </div>
  );
}
export default UploadVideoPage;
