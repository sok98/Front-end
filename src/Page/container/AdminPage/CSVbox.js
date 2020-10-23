import React from "react";

function CSVbox(props) {
  return (
    <div>
      <div>csv파일 읽어서</div>
      <div>테이블 형태로 반환</div>
      <div>{props.csvfile}</div>
    </div>
  );
}

export default CSVbox;
