import { useQuery } from "@tanstack/react-query";
import React from "react";
import newRequest from "../../helpers/newRequest";
import "./Review.scss";

const Review = ({ review }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [review.userId],
    queryFn: () =>
      newRequest.get(`/users/${review.userId}`).then((res) => {
        return res.data;
      }),
  });

  return (
    <div className="review">
      <div className="user">
        <img
          className="pp"
          src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <div className="info">
          <span>Garner David</span>
          <div className="country">
            <img
              src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
              alt=""
            />
            <span>United States</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
