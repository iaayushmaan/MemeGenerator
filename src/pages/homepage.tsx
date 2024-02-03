import React, { useState, useEffect } from "react";
import MyCard from "../components/card";

import { getAllMemes } from "../getMemes";
interface Memes {
  id: Number;
  name: string;
  url: string;
  width: Number;
  height: Number;
  box_count: Number;
  captions: Number;
}

const HomePage = () => {
  const [data, setMeme] = useState<Memes[]>([]);
  useEffect(() => {
    getAllMemes().then((res) => setMeme(res.data.memes));
  }, []);
  return (
    <div className="row d-flex justify-content-around">
      {data.map((el) => (
        <MyCard url={el.url} title={el.name} />
      ))}
    </div>
  );
};

export default HomePage;
