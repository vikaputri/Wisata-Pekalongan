import gql from "graphql-tag";

const CULINARY_QUERY = gql`
  query Kuliner($slug:String!){
    kuliner(slug:$slug) {
      title
      content
      image
    }
  }
`;

export default CULINARY_QUERY;