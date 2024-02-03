import React, { useState } from "react";
import Draggable from "react-draggable";

const Text: React.FC = () => {
  const [value, setValue] = useState<string>("Double Click To Edit text");
  const [edit, setEdit] = useState<boolean>(false);
  return (
    <Draggable>
      {edit ? (
        <input
          onDoubleClick={(e) => setEdit(false)}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      ) : (
        <h1 onDoubleClick={(e) => setEdit(true)}>{value}</h1>
      )}
    </Draggable>
  );
};

export default Text;
