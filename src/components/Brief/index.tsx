import { Container, ImgWrapper, TextWrapper } from './styles'
interface BriefProps {
  title: string
  description: string
  icon: string
}

export function Brief({ title, description, icon }: BriefProps) {
  return (
    <Container>
      <div>
        <ImgWrapper>
          <img src={icon} alt={title} />
        </ImgWrapper>
        <TextWrapper>
          <h1>{title}</h1>
          <span>{description}</span>
        </TextWrapper>
      </div>
    </Container>
  )
}
