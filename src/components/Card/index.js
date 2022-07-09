import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const Card = ({ article }) => {
  const imageUrl = article.image;
  return (
    <Link to={`/article/${article.slug}`} className="text-decoration-none text-reset">
      <div className="card mb-4">
        <div>
          <img
            className="card-img-top lazy-image"
            src={`http://wisata-pekalongan.herokuapp.com${imageUrl}`}
            alt={imageUrl}
            onError={
              (e) => 
              {
                e.target.src = 'https://media-exp1.licdn.com/dms/image/C4D16AQGZW0ACUdKwdQ/profile-displaybackgroundimage-shrink_350_1400/0/1654087416132?e=1660176000&v=beta&t=EnFxwanPhelBktPnHjLF50WF0Tmx2OPUFofRjZyoCn0';
                e.target.onError = null;
              }
            } 
          />
        </div>
        <div className="card-body">
          <h1>{article.title}</h1> 
          <p>{article.description}</p> 
        </div>
      </div>
    </Link>
  );
};

export default Card;
