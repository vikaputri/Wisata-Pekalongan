import React from "react";
import Card from "../Card";
import Nav from "../Nav";

const Destinations = ({ articles }) => {
  const displayArticle = articles.edges.map((edge) => {
      return <Card article={edge.node} key={`article__${edge.node.id}`} />;
    });

  return (
    <header className="py-4">
      <div className="container px-5">
        <div className="row">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-body">
                {displayArticle}

              </div>
            </div>
          </div>
          <div className="col-md-4">
            <Nav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Destinations;