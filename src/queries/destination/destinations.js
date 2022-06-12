import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Articles($after: String, $name : String){
    articles(first: 1, after: $after, name: $name){
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

export default ARTICLES_QUERY;