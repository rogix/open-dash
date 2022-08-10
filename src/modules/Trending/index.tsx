import {
  Box,
  Container,
  Item,
  ItemColor,
  ItemInfo,
  LangItem,
  Main,
  SecondSection,
  ThirdSection,
} from './style'

import { Header } from './Header'
import { SideNav } from '@/components/Sidenav'
import { RiGitRepositoryLine, RiStarSLine } from 'react-icons/ri'
import { BiGitRepoForked } from 'react-icons/bi'

type Repository = {
  name: string
  stars: number
  description: string
  starsToday: number
  forks: number
  programmingLanguage: string
}

export function Trending({ data }: { data: Repository[] }) {
  return (
    <Container>
      <SideNav />
      <Main>
        <Header />
        <SecondSection></SecondSection>
        <ThirdSection>
          <Box>
            <Item>
              {data.map(
                ({
                  name,
                  description,
                  stars,
                  forks,
                  starsToday,
                }: Repository) => (
                  <li key={name}>
                    <ItemInfo>
                      <div className="name">
                        <RiGitRepositoryLine />
                        <div>{name} Name</div>
                      </div>
                      <div className="description">
                        <div>{description}</div>
                      </div>
                      <div className="numbers">
                        <div>
                          <div className="stars">
                            <RiStarSLine />
                            <span>{stars}</span>
                          </div>
                          <div className="forks">
                            <BiGitRepoForked />
                            <span>{forks}</span>
                          </div>
                        </div>
                        <div className="stars-today">{starsToday}</div>
                      </div>
                    </ItemInfo>
                  </li>
                ),
              )}
            </Item>
          </Box>
        </ThirdSection>
      </Main>
    </Container>
  )
}
