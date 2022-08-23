import React from "react";
import Rating from "@mui/material/Rating";
import Card from "react-bootstrap/Card";

const MovieCard = ({ el }) => {
  return (
    <div>
      <Card style={{ width: "18rem", height: "40rem" }}>
        <Card.Img
          variant="top"
          src={el && el.image}
          style={{ height: "20rem" }}
        />
        <Card.Body>
          <Card.Title>{el && el.name}</Card.Title>
          <Card.Text>
            {el && el.date}|{el && el.type}
          </Card.Text>
          <Card.Text>{el && el.description}</Card.Text>
          <Rating
            name="half-rating-read"
            defaultValue={el && el.rating}
            precision={0.5}
            readOnly
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
