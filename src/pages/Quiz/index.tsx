import { AiOutlineClockCircle } from 'react-icons/ai'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import {
  Range,
  Alternatives,
  StyledCheckbox,
  Container,
  NavButtons,
  Header,
} from './styles'
import img from '../../assets/pseudoimage.png'

export function Quiz() {
  const percent = 64
  const percentInDiv = percent - 100

  return (
    <Container>
      <Header>
        <div>
          <Link to="/details">
            <IoIosArrowBack size={15} />
          </Link>
          <h1>Detail Quiz</h1>
        </div>
        <div>
          <AiOutlineClockCircle />
          <span>16:35</span>
        </div>
      </Header>

      <main>
        <div>
          <Range>
            <div style={{ left: `${percentInDiv}%` }}></div>
          </Range>
          <span>Completed {percent}%</span>
        </div>

        <section>
          <h1>The image below is a field image used for?</h1>

          <div>
            <img src={img} alt="image question" />
          </div>

          <Alternatives>
            <button>
              <StyledCheckbox type="checkbox" name="a" id="a" />
              <label htmlFor="a">Football</label>
            </button>
            <button>
              <StyledCheckbox type="checkbox" name="b" id="b" />
              <label htmlFor="b">Basketball</label>
            </button>
            <button>
              <StyledCheckbox type="checkbox" name="c" id="c" wrong />
              <label htmlFor="c">Volleyball</label>
            </button>
            <button>
              <StyledCheckbox type="checkbox" name="d" id="d" />
              <label htmlFor="d">Shuttlecock</label>
            </button>
          </Alternatives>

          <NavButtons>
            <button>Previous</button>
            <button>Next</button>
          </NavButtons>
        </section>
      </main>
    </Container>
  )
}
