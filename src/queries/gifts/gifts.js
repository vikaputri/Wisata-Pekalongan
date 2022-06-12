import gql from "graphql-tag";

const Oleholehs_QUERY = gql`
  query Oleholehs($after: String, $name : String){
    oleholehs(first: 1, after: $after, name: $name){
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

export default Oleholehs_QUERY;