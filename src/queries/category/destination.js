import gql from 'graphql-tag';

const CATEGORY_ARTICLES_QUERY = gql`
  query Categories($slug: String!, $after: String){
    categories(slug:$slug){
      article(first: 1, after: $after){
        pageInfo{
          startCursor
          hasNextPage
          endCursor
        }
        edges{
          node{
            title
            description
            slug
            image
          }
        }

      }
    }
  }
`;

export default CATEGORY_ARTICLES_QUERY;