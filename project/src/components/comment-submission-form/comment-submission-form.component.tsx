import {ChangeEvent, useState} from 'react';


function CommentSubmissionFormComponent() {
  const [review, setReview] = useState<{ rating: string, reviewText: string }>({ rating: '', reviewText: '' });
  const handleRating = (event: ChangeEvent<HTMLInputElement>) => setReview({...review, rating: event.target.value});
  const handleReviewText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setReview({...review, reviewText: event.target.value});
  };
  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            <input className="rating__input" id="star-10" type="radio" name="rating" value="10" onChange={handleRating}/>
            <label className="rating__label" htmlFor="star-10">Rating 10</label>

            <input className="rating__input" id="star-9" type="radio" name="rating" value="9" onChange={handleRating} />
            <label className="rating__label" htmlFor="star-9">Rating 9</label>

            <input className="rating__input" id="star-8" type="radio" name="rating" value="8" onChange={handleRating} />
            <label className="rating__label" htmlFor="star-8">Rating 8</label>

            <input className="rating__input" id="star-7" type="radio" name="rating" value="7" onChange={handleRating}/>
            <label className="rating__label" htmlFor="star-7">Rating 7</label>

            <input className="rating__input" id="star-6" type="radio" name="rating" value="6" onChange={handleRating}/>
            <label className="rating__label" htmlFor="star-6">Rating 6</label>

            <input className="rating__input" id="star-5" type="radio" name="rating" value="5" onChange={handleRating}/>
            <label className="rating__label" htmlFor="star-5">Rating 5</label>

            <input className="rating__input" id="star-4" type="radio" name="rating" value="4" onChange={handleRating}/>
            <label className="rating__label" htmlFor="star-4">Rating 4</label>

            <input className="rating__input" id="star-3" type="radio" name="rating" value="3" onChange={handleRating}/>
            <label className="rating__label" htmlFor="star-3">Rating 3</label>

            <input className="rating__input" id="star-2" type="radio" name="rating" value="2" onChange={handleRating}/>
            <label className="rating__label" htmlFor="star-2">Rating 2</label>

            <input className="rating__input" id="star-1" type="radio" name="rating" value="1" onChange={handleRating}/>
            <label className="rating__label" htmlFor="star-1">Rating 1</label>
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            value={review.reviewText}
            onChange={handleReviewText}
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default CommentSubmissionFormComponent;
