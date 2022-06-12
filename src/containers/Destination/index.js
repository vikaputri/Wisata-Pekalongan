import React from "react";
import { useParams } from "react-router";
import Nav from "../../components/Nav";
import Query from "../../components/Query";
import ReactHtmlParser from "react-html-parser";
import ARTICLE_QUERY from "../../queries/destination/destination";
import {StickyShareButtons} from 'sharethis-reactjs';

const Destination = () => {
  let { id } = useParams();
  return (
    <header className="py-4">
      <div className="container px-5">
        <div className="row">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-body">
                <Query query={ARTICLE_QUERY} slug={id}>
                  {({ data: { article } }) => {
                    const imageUrl = article.image;
                    return (
                      <div className="container px-5 py-5">
                        <div className="jumbotron"> 
                          <h1 className="text-center mb-5">{article.title}</h1>   
                          <div className="mb-5">
                            <img src={`http://wisata-pekalongan.herokuapp.com/${imageUrl}`}
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
                            {ReactHtmlParser(article.content)}
                          </div>
                          <div class="table-responsive">
                            <table class="table table-borderless">
                                <tr>
                                  <th>Alamat</th>
                                  <td>:</td>
                                  <td rowspan="2">{article.alamat}</td>
                                </tr>
                                <tr>
                                  <th><br/></th>
                                  <td><br/></td>
                                </tr>
                                <tr>
                                  <th>Telepon</th>
                                  <td>:</td>
                                  <td>{article.telepon}</td>
                                </tr>
                                <tr>
                                  <th>Jam</th>
                                  <td>:</td>
                                  <td>{article.jam}</td>
                                </tr>
                                <tr>
                                  <th>Harga</th>
                                  <td>:</td>
                                  <td rowspan="3">{article.harga}</td>
                                </tr>
                                <tr>
                                  <th><br/></th>
                                  <td><br/></td>
                                </tr>
                                <tr>
                                  <th><br/></th>
                                  <td><br/></td>
                                </tr>
                            </table>
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
                              description: article.description,
                              title: article.title
                            }}
                          />
                      </div>
                    );
                  }}
                </Query>
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

export default Destination;