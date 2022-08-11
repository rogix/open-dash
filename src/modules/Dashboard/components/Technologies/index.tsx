import { IntroductionBox } from './style'
import { useQuery, gql } from '@apollo/client'
import { ResponsiveBar } from '@nivo/bar'
import { Loader } from '@/components/Loader'
import { User } from '../../types/githubUser'

type Language = {
  id: string
  name: string
  color: string
  count: number
}

export function Technologies({ data }: User) {
  const { user } = data

  const languagesCount = user.repositories.edges.reduce(
    (acc: any, { node }: any) => {
      node.languages?.edges.forEach(({ node }: any) => {
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
