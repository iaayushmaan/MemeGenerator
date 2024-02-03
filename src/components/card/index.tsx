import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  url: string;
}

const MyCard: React.FC<Props> = ({ title, url }) => {
  const navigate = useNavigate();
  return (
    <Card className="mt-4 mb-10" style={{ width: "18rem" }}>
      <Card.Img variant="top" className="mt-2" src={url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button variant="primary" onClick={(e) => navigate(`/edit?url=${url}`)}>
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
