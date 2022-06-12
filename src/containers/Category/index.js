import React from "react";
import { useParams } from "react-router";
import Destinations from "../../components/Destinations";
import Query from "../../components/Query";
import CATEGORY_ARTICLES_QUERY from "../../queries/category/destination";
import { Link } from "react-router-dom";

const Category = () => {
  let { id } = useParams();

  return (
    <Query query={CATEGORY_ARTICLES_QUERY} slug={id}>
      {({ data: { categories }, fetchMore}) => {
          return (
            <header className="py-5 px-2">
              
                <h1>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link className="text-decoration-none text-reset" to="/">Destination</Link>
                      </li>  
                      <li className="breadcrumb-item active" aria-current="page">{categories.name}</li>
                    </ol>
                  </nav>
                </h1>

              <Destinations articles={categories.article} />


                {categories.article.pageInfo.hasNextPage && (<button
                  className="btn btn-primary"
                    onClick={() => {
                      const { endCursor } = categories.article.pageInfo;
                      fetchMore({
                        variables: { after: endCursor },
                        updateQuery: (prevResult, { fetchMoreResult }) => {
                          fetchMoreResult.categories.article.edges = [
                            ...prevResult.categories.article.edges,
                            ...fetchMoreResult.categories.article.edges
                          ];
                          return fetchMoreResult;
                        }
                      });
                    }}
                  >Lebih Banyak
                  </button>
                )}

            </header>
          );
      }}
    </Query>
  );
};

export default Category;