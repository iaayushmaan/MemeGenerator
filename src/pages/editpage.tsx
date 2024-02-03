import React, { createRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Text from "../components/text/text";
import { exportComponentAsJPEG } from "react-component-export-image";

const EditPage = () => {
  const [params] = useSearchParams();
  const [count, setcount] = useState<number>(0);
  const addText = () => {
    setcount(count + 1);
  };
  const imgRef = createRef<HTMLDivElement>();
  return (
    <div className="mt-2 mx-4">
      <div
        style={{ width: "50%", border: "2px", borderStyle: "solid " }}
        ref={imgRef}
      >
        <img style={{ width: 450 }} src={params.get("url") ?? ""} alt=""></img>
        {Array(count)
          .fill(0)
          .map((e) => (
            <Text />
          ))}
      </div>
      <Button variant="primary" className="mt-2 mx-2" onClick={addText}>
        Add Text
      </Button>
      <Button
        variant="success"
        className="mt-2"
        onClick={(e) => exportComponentAsJPEG(imgRef)}
      >
        Save
      </Button>
    </div>
  );
};

export default EditPage;
