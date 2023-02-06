import { Container, ImgWrapper, TextWrapper } from './styles'
import { AiFillStar } from 'react-icons/ai'

interface RectangleQuizProps {
  title: string
  questions: number
  icon: string
  note: number
  color: string
}

export function RectangleQuiz({
  title,
  questions,
  icon,
  note,
  color,
}: RectangleQuizProps) {
  return (
    <Container>
      <div>
        <ImgWrapper style={{ backgroundColor: color }}>
          <img src={icon} alt={title} />
        </ImgWrapper>
        <TextWrapper>
          <h1>{title}</h1>
          <span>{questions} Question</span>
        </TextWrapper>
      </div>
      <div>
        <AiFillStar />
        <span id="note">{note.toFixed(1)}</span>
      </div>
    </Container>
  )
}
