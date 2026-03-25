import React, { useState } from 'react';
import './Rating.css';

export const Rating = () => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const ratings = [
    { id: 'bad', label: 'Bad', emoji: '😞' },
    { id: 'ok', label: 'Ok', emoji: '😐' },
    { id: 'good', label: 'Good', emoji: '😊' },
    { id: 'great', label: 'Great', emoji: '😍' }
  ];
  
  const handleRatingSelect = (ratingId) => {
    setSelectedRating(ratingId);
  };
  
  const handleSubmit = () => {
    if (selectedRating) {
      setIsSubmitted(true);
    }
  };
  
  const handleReset = () => {
    setSelectedRating(null);
    setIsSubmitted(false);
  };
  
  return (
    <div className="rating-page">
      <div className="rating-container">
        <div className="rating-card">
          <h1 className="rating-title">Rate our service</h1>
          
          {isSubmitted ? (
            <div className="thank-you-message">
              <div className="thank-you-icon">✨</div>
              <p>Thank you for your feedback!</p>
              <p className="selected-rating-text">
                You rated us as: <span className="rating-label">{selectedRating.toUpperCase()}</span>
              </p>
              <button onClick={handleReset} className="reset-button">
                Submit Another Rating
              </button>
            </div>
          ) : (
            <>
              <div className="rating-options">
                {ratings.map((rating) => (
                  <div
                    key={rating.id}
                    onClick={() => handleRatingSelect(rating.id)}
                    className={`rating-option ${selectedRating === rating.id ? 'selected' : ''}`}
                  >
                    <span className="rating-emoji">{rating.emoji}</span>
                    <span className="rating-label-text">{rating.label}</span>
                  </div>
                ))}
              </div>
              
              <button
                onClick={handleSubmit}
                disabled={!selectedRating}
                className="submit-button"
              >
                SUBMIT YOUR RATING
              </button>
              
              {!selectedRating && (
                <p className="hint-text">Please select a rating before submitting</p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rating;