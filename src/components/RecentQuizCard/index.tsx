import { Container, Range } from './styles'
interface RecentQuizCardProps {
  title: string
  percent: number
  icon: string
  color: string
}
export function RecentQuizCard({
  title,
  percent,
  icon,
  color,
}: RecentQuizCardProps) {
  const percentInDiv = percent - 100
  return (
    <Container>
      <div>
        <img src={icon} alt={`Icon of ${title}`} />
      </div>
      <div>
        <h1>{title}</h1>
        <span>You completed {percent}%</span>
      </div>
      <Range>
        <div style={{ backgroundColor: color, left: `${percentInDiv}%` }}></div>
      </Range>
    </Container>
  )
}
