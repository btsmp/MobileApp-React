import styled from 'styled-components'

export const Container = styled.div`
  padding: 24px;
  color: ${(props) => props.theme['gray-300']};
  display: flex;
  flex-direction: column;
  gap: 32px;

  header {
    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
      p {
        font-weight: 500;
        span {
          font-weight: 600;
          color: ${(props) => props.theme['gray-500']};
        }
      }

      button {
        background: none;
        border: none;
        cursor: pointer;
        > svg {
          color: ${(props) => props.theme['gray-500']};
        }
      }
    }

    #welcome {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 16px;
    }
  }
`
export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 32px;

  section > h1 {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 16px;
  }
`
export const ResultSection = styled.section`
  background-color: ${(props) => props.theme['blue-100']};
  color: ${(props) => props.theme['blue-200']};
  border-radius: 10px;

  display: flex;
  align-items: center;
  gap: 24px;
  padding: 16px;
  svg {
    width: 80px;
  }

  > div {
    width: 160px;
    h1 {
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 8px;
    }
    span {
      font-size: 12px;
      line-height: 18px;
    }
  }
`
export const SectionRecentQuizzes = styled.section`
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
export const SectionPopularQuizzes = styled.section`
  > div {
    display: flex;
    gap: 16px;
    align-items: center;
    flex-direction: column;

    > a {
      width: 100%;
      text-decoration: none;
    }
  }
`
