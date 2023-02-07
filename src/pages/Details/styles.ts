import styled from 'styled-components'

export const Container = styled.div`
  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 40px;
    padding-bottom: 34px;

    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 24px;

      h1 {
        font-size: 16px;
        line-height: 20px;
        font-weight: 600;
      }
    }
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 24px;

    section > h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 16px;
    }
  }

  ul li {
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    font-family: 'Nunito';
    color: ${(props) => props.theme['gray-400']};
    padding: 16px;
  }

  button {
    padding: 15px;
    border-radius: 10px;
    background-color: ${(props) => props.theme['blue-400']};
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    border: none;
    margin-bottom: 40px;
    cursor: pointer;
    a {
      text-decoration: none;
      color: ${(props) => props.theme.white};
    }
  }
`

export const BriefDiv = styled.div`
  > div:nth-child(1) {
    margin-bottom: 16px;
  }
`
