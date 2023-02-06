import { AiOutlineBell } from 'react-icons/ai'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { RecentQuizCard } from '../../components/RecentQuizCard'
import bookSvg from '../../assets/book.svg'
import megaPhone from '../../assets/speak.svg'
import { useTheme } from 'styled-components'
import { RectangleQuiz } from '../../components/RectangleQuiz'
import ball from '../../assets/ball.svg'
import musicNote from '../../assets/musicnote.svg'
import notebook from '../../assets/notebook.svg'
import profile from '../../assets/profile.png'
import {
  Container,
  ResultSection,
  SectionPopularQuizzes,
  SectionRecentQuizzes,
  MainContainer,
} from './styles'

import { Link } from 'react-router-dom'

export function Home(props: any) {
  const theme = useTheme()
  const percentage = 75
  return (
    <Container>
      <header>
        <div>
          <div id="wellcome">
            <img src={profile} alt="Jéssica's photo" />
            <p>
              Hello, <span>Jéssica</span>
            </p>
          </div>
          <button>
            <AiOutlineBell size="20px" />
          </button>
        </div>

        <ResultSection>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            counterClockwise
            strokeWidth={15}
            styles={buildStyles({
              textColor: theme['blue-200'],
              pathColor: theme['blue-300'],
              trailColor: theme['gray-100'],
            })}
          />
          <div>
            <h1>Good Result!</h1>
            <span>Share your achievement with your friend</span>
          </div>
        </ResultSection>
      </header>

      <MainContainer>
        <SectionRecentQuizzes>
          <h1>Recent Quiz</h1>
          <div>
            <RecentQuizCard
              percent={65}
              title="Reading"
              icon={bookSvg}
              color={theme['blue-400']}
            />
            <RecentQuizCard
              percent={85}
              title="Speaking"
              icon={megaPhone}
              color={theme['purple-400']}
            />
          </div>
        </SectionRecentQuizzes>
        <SectionPopularQuizzes>
          <h1>Popular Quiz</h1>
          <div>
            <RectangleQuiz
              title="Technology"
              questions={10}
              note={4.8}
              icon={notebook}
              color={theme['yellow-200']}
            />
            <Link to="/details">
              <RectangleQuiz
                title="Sport"
                questions={10}
                note={4.8}
                icon={ball}
                color={theme['purple-100']}
              />
            </Link>
            <RectangleQuiz
              title="Music"
              questions={10}
              note={4.8}
              icon={musicNote}
              color={theme['red-100']}
            />
          </div>
        </SectionPopularQuizzes>
      </MainContainer>
    </Container>
  )
}
