import { IntroductionBox } from './style'
import { useQuery, gql } from '@apollo/client'
import { ResponsiveBar } from '@nivo/bar'

const GET_USER = gql`
  query QueryLanguage {
    viewer {
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
`

type Language = {
  id: string
  name: string
  color: string
  count: number
}

export function Technologies() {
  const { loading, error, data } = useQuery(GET_USER)

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error :(</p>
  }

  const { viewer } = data

  const languagesCount = viewer.repositories.edges.reduce(
    (acc: any, { node }: any) => {
      node.languages.edges.forEach(({ node }: any) => {
        const language = acc.find(({ name }: any) => name === node.name)
        if (language) {
          language.count++
        } else {
          acc.push({
            name: node.name,
            count: 1,
            color: node.color,
            id: node.id,
            value: node.count,
          })
        }
      })

      return acc
    },
    [],
  )

  const languages = languagesCount
    .map(({ id, name, count, color }: Language) => ({
      [name]: count,
      color: color,
      tech: name,
      count: count,
      id: id,
    }))
    .sort((a: Language, b: Language) => b.count - a.count)
    .slice(0, 10)

  return (
    <IntroductionBox>
      <h2>Most Used Languages</h2>
      <ResponsiveBar
        data={languages}
        keys={languages.map(({ tech }: { tech: string }) => tech)}
        indexBy="tech"
        margin={{ top: 50, right: 0, bottom: 50, left: 0 }}
        enableLabel={false}
        label={d => `${d.id}: ${d.value}`}
        axisLeft={null}
        theme={{
          tooltip: {
            container: {
              color: '#000',
              fontSize: '12px',
            },
          },
          axis: {
            ticks: {
              text: {
                fill: '#fff',
                fontSize: '12px',
              },
            },
          },
        }}
      />
    </IntroductionBox>
  )
}
