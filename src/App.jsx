import { useState } from 'react';
import { sculptureList } from './data.jsx';
import './App.css';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  
  const hasNext = index < sculptureList.length - 1;
  const hasPrev = index > 0;

  function handleNextClick() {
    setIndex((prevIndex) => (hasNext ? prevIndex + 1 : 0));
  }

  function handlePrevClick() {
    setIndex((prevIndex) => (hasPrev ? prevIndex - 1 : sculptureList.length - 1));
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <div className="gallery-container">
      <div className="button-group">
        <button onClick={handlePrevClick} disabled={!hasPrev}>
          Back
        </button>
        <button onClick={handleNextClick}>
          Next
        </button>
      </div>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p className="details">{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </div>
  );
}