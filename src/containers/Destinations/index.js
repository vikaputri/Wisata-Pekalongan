import React from 'react'
import Destinations from "../../components/Destinations";
import Query from "../../components/Query";
import ARTICLES_QUERY from "../../queries/destination/destinations";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <header className="py-5 px-3">
      <div className="container px-5">
        <h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link className="text-decoration-none text-reset" to="/">Destination</Link>
              </li>  
            </ol>
          </nav>
        </h1>
      </div>

      <Query query={ARTICLES_QUERY}>
        {({ data: { articles }, fetchMore  }) => {
          return (
            <div>
              <Destinations articles={articles} />

              <div className="container px-5">
                {articles.pageInfo.hasNextPage && (<button
                  className="btn btn-primary"
                    onClick={() => {
                      const { endCursor } = articles.pageInfo;
                      fetchMore({
                        variables: { after: endCursor },
                        updateQuery: (prevResult, { fetchMoreResult }) => {
                          fetchMoreResult.articles.edges = [
                            ...prevResult.articles.edges,
                            ...fetchMoreResult.articles.edges
                          ];
                          return fetchMoreResult;
                        }
                      });
                    }}
                    >Lebih Banyak
                      <i className="fas fa-sync ms-2"></i>
                    </button>
                )}
              </div>
            </div>
          )
        }}
      </Query>
    </header>
  );
};

export default Home;