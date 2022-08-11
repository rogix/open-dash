import { DetailsBox } from './style'
import { useQuery, gql } from '@apollo/client'
import { ResponsivePie } from '@nivo/pie'
import { Loader } from '@/components/Loader'
import { User } from '../../types/githubUser'

export type Language = {
  id: string
  name: string
  color: string
  count: number
  label: string
  value: number
}

export function Details({ data }: User) {
  const { user } = data

  const languagesCount = user.pinnedItems.edges.reduce(
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
          })
        }
      })

      return acc
    },
    [],
  )

  const languages = languagesCount
    .map(({ id, name, count, color }: Language) => ({
      color: color,
      label: name,
      value: count,
      id: name,
    }))
    .slice(0, 5)

  return (
    <DetailsBox>
      <h2>Pinned Reps Main Technologies</h2>
      <ResponsivePie
        data={languages}
        margin={{ top: 10, right: 40, bottom: 80, left: 40 }}
        innerRadius={0.5}
        padAngle={0.7}
        arcLinkLabelsTextColor="#fff"
        // enableArcLinkLabels={false}
        activeOuterRadiusOffset={4}
        enableArcLabels={false}
        theme={{
          tooltip: {
            container: {
              color: '#000',
              fontSize: '12px',
            },
          },
        }}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: -10,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: '#999',
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 16,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#fff',
                },
              },
            ],
          },
        ]}
      />
    </DetailsBox>
  )
}
