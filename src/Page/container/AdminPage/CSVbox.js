import React, { FileReader, useEffect, useState } from "react";
import CSVReader from "react-csv-reader";

function CSVbox(props) {
  const [FilePath, setFilePath] = useState(null);
  console.log("CSVbox 들어옴");
  /*useEffect(() => {
    reader = new FileReader();
    reader.readAsText(props.csvfile, "UTF-8");
    reader.onload = function () {
      output = reader.result;
      console.log(output);
    };
  }, []);
  console.log(output);*/

  const onCSVChange = (e) => {
    setFilePath(e.target.files[0]);
    console.log("파일 업로드");
  };
  console.log(FilePath);
  return (
    <div>
      <div>csv파일 읽어서</div>
      <div>테이블 형태로 반환</div>
      <div>{props.csvfile}</div>
      {/*<div>{output}</div>*/}
      <input type="file" onChange={onCSVChange} />
      <textarea>{FilePath}</textarea>
    </div>
  );
}

export default CSVbox;
