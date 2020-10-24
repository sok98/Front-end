import React, { useState } from "react";
import CSVReader from "react-csv-reader";

function CSVbox(props) {
  const [FilePath, setFilePath] = useState(null);
  console.log("CSVbox 들어옴");
  var filecontent;

  const onCSVChange = (e) => {
    setFilePath(e.target.files[0]);
    console.log("파일 업로드");
    let file = e.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = () => {
      console.log(fileReader.result);
    };
    fileReader.readAsText(file);
    filecontent = fileReader.result;
  };
  console.log(FilePath);

  return (
    <div>
      <a href={props.csvfile}>csv 파일 다운로드 하기</a>
      <div>수정된 csv 파일 업로드</div>
      <input type="file" accept=".csv" onChange={onCSVChange} />
    </div>
  );
}

export default CSVbox;
