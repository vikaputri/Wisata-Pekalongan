import React from "react";
import { useParams } from "react-router";
import Query from "../../components/Query";
import ReactHtmlParser from "react-html-parser";
import CULINARY_QUERY from "../../queries/culinary/culinary";
import {StickyShareButtons} from 'sharethis-reactjs';

const Kuliner = () => {
  let { id } = useParams();
  return (
    <header className="py-4">
      <div className="container px-5">
        <div className="row">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-body">
                <Query query={CULINARY_QUERY} slug={id}>
                  {({ data: { kuliner } }) => {
                    const imageUrl = kuliner.image;
                    return (
                      <div className="container px-5 py-5">
                        <div className="jumbotron"> 
                          <h1 className="text-center mb-5">{kuliner.title}</h1>   
                          <div className="mb-5">
                            <img src={`http://wisata-pekalongan.herokuapp.com${imageUrl}`}
                              alt={imageUrl}
                              onError={
                                (e) => {
                                  e.target.src = 'https://media-exp1.licdn.com/dms/image/C4D16AQGZW0ACUdKwdQ/profile-displaybackgroundimage-shrink_350_1400/0/1654087416132?e=1660176000&v=beta&t=EnFxwanPhelBktPnHjLF50WF0Tmx2OPUFofRjZyoCn0';
                                  e.target.onError = null;
                                }
                              }
                              width="98%"
                            />
                          </div>
                          <div className="mb-5">
                            {ReactHtmlParser(kuliner.content)}
                          </div>
                        </div>

                          <StickyShareButtons
                            config={{
                              alignment: 'left',
                              color: 'social',
                              enabled: true,
                              font_size: 16,
                              hide_desktop: false,
                              labels: 'counts',    
                              language: 'en',
                              min_count: 0,
                              networks: [
                                'whatsapp',
                                'telegram',
                                'linkedin',
                                'instagram',
                                'messenger',
                                'facebook',
                                'twitter',
                              ],
                              padding: 12,
                              radius: 4,
                              show_total: false, 
                              show_mobile: false,
                              show_toggle: true,
                              size: 48,
                              top: 140,
                              url: window.location.href,
                              image: imageUrl,
                              description: kuliner.description,
                              title: kuliner.title
                            }}
                          />
                      </div>
                    );
                  }}
                </Query>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Kuliner;
