import ball from '../../assets/ball.svg'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { RectangleQuiz } from '../../components/RectangleQuiz'
import { useTheme } from 'styled-components'
import { Brief } from '../../components/Brief'
import clock from '../../assets/clock.svg'
import note from '../../assets/note.svg'
import { Container, BriefDiv } from './styles'

export function Details() {
  const theme = useTheme()
  return (
    <Container>
      <header>
        <div>
          <Link to="/">
            <IoIosArrowBack size={15} />
          </Link>
          <h1>Detail Quiz</h1>
        </div>
        <BsThreeDotsVertical />
      </header>

      <RectangleQuiz
        title="Sport"
        questions={10}
        note={4.8}
        icon={ball}
        color={theme['purple-100']}
      />

      <main>
        <section>
          <h1>Brief explanation about this quiz</h1>
          <BriefDiv>
            <Brief
              title="10 Question"
              description="10 point for a correct answer"
              icon={clock}
            />
            <Brief
              title="1 hour 20 min"
              description="Total duration of the quiz"
              icon={note}
            />
          </BriefDiv>
        </section>
        <section>
          <h1>Please read the text below carefully so you can understand it</h1>
          <div>
            <ul>
              <li>
                10 point awarded for a correct answer and no marks for a
                incorrect answer
              </li>
              <li>Tap on options to select the correct answer</li>
              <li>
                Click submit if you are sure you want to complete all the
                quizzes
              </li>
            </ul>
          </div>
        </section>
        <button>
          <Link to="/quiz">Get Started</Link>
        </button>
      </main>
    </Container>
  )
}
