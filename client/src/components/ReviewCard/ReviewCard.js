import React from "react";
import "./ReviewCard.css"

function ReviewCard({ review_text, reviewer, date }) {
    return (
        <div className="review">
            <strong>{reviewer}</strong> -- {date}
            <div>{review_text}</div>
        </div>
    );
}

export default ReviewCard;