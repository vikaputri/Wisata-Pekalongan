import gql from "graphql-tag";

const Oleholeh_QUERY = gql`
  query Oleholeh($slug:String!){
    oleholeh(slug:$slug) {
      title
      content
      image
    }
  }
`;

export default Oleholeh_QUERY;