import React from 'react'
import Query from "../../components/Query";
import CULINARIES_QUERY from "../../queries/culinary/culinaries";
import { Link } from "react-router-dom";

const Kuliners = () => {
  return (
    <header className="py-5 px-3">
      <div className="container px-5">
        <h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link className="text-decoration-none text-reset" to="/">Kuliner</Link>
              </li>  
            </ol>
          </nav>
        </h1>
      </div>

      <Query query={CULINARIES_QUERY}>
        {({ data: { kuliners }, fetchMore  }) => {
          return (
            <div className="container px-5">
              <div class="row mb-3">
                {kuliners.edges.map((edge, i) => {
                  return (
                     
                      <div class="col-md-4 mt-3">
                        <Link to={`/kuliner/${edge.node.slug}`} className="text-decoration-none text-reset">
                          <div className="card h-100">
                            <div>
                              <img
                                className="card-img-top lazy-image"
                                src={`http://wisata-pekalongan.herokuapp.com/${edge.node.image}`}
                                alt={edge.node.image}
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
                              <h1>{edge.node.title}</h1> 
                              <p>{edge.node.description}</p> 
                            </div>
                          </div>
                        </Link>
                      </div>
                  );
                })}
              </div>

              
      
              <div>
                {kuliners.pageInfo.hasNextPage && (<button
                  className="btn btn-primary"
                    onClick={() => {
                      const { endCursor } = kuliners.pageInfo;
                      fetchMore({
                        variables: { after: endCursor },
                        updateQuery: (prevResult, { fetchMoreResult }) => {
                          fetchMoreResult.kuliners.edges = [
                            ...prevResult.kuliners.edges,
                            ...fetchMoreResult.kuliners.edges
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

export default Kuliners;