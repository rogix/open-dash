import { gql } from '@apollo/client'

function githubUser(username: string) {
  return {
    query: gql`
      query {
      user(login: "${username}") {
        id
        bio
        avatarUrl
        company
        location
        websiteUrl
        createdAt
        name
        login
        pinnedItems(last: 6) {
          edges {
            node {
              ... on Repository {
                id
                name
                description
                url
                createdAt
                languages(last: 10) {
                  edges {
                    node {
                      id
                      name
                      color
                    }
                  }
                }
              }
            }
          }
        }
        repositories(affiliations: OWNER, last: 100) {
          edges {
            node {
              id
              description
              name
              languages(last: 100) {
                edges {
                  node {
                    id
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
    }
  `,
  }
}

export { githubUser }
