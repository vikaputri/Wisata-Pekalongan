import gql from "graphql-tag";

const CULINARIES_QUERY = gql`
  query Kuliners($after: String, $name : String){
    kuliners(first: 1, after: $after, name: $name){
      pageInfo {
        startCursor
        hasNextPage
        endCursor
      }
      edges {
        node{
          title
          description
          slug
          image
        }
      }
      
    }
  }
`;

export default CULINARIES_QUERY;