import gql from "graphql-tag";

const ARTICLE_QUERY = gql`
  query Article($slug:String!){
    article(slug:$slug) {
      title
      content
      alamat
      telepon
      jam
      harga
      image
    }
  }
`;

export default ARTICLE_QUERY;