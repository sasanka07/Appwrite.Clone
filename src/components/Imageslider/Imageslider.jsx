import React from 'react';
import postImage from '../../assets/post.png'; // Correct path to the image
import './Imageslider.css'; // Ensure CSS path is correct

const Imageslider = ({ data }) => {
  const { label } = data; // Destructure data props without number and duration

  return (
    <div className="image-container">
      <img src={postImage} alt="Post" className="background-image" /> {/* Background image */}
      <div className="overlay">
        <div className="text-container">
          <h2 className="title">See your products grow</h2>
          <p className="description">
            Keep track of your projects' progress on the Appwrite Console and <br />
            see them grow into products users love and use every day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Imageslider;
