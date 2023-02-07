import styled from 'styled-components'

export const Container = styled.div`
  margin: 42px 0;
  main div > span {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: ${(props) => props.theme['gray-300']};
  }
  main section h1 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-top: 24px;
  }
  main section img {
    width: 100%;
    margin: 24px 0;
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      margin-left: 24px;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
    }
  }
  > div:nth-child(2) {
    padding: 8px;
    background-color: ${(props) => props.theme['blue-100']};

    border-radius: 999999px;

    color: ${(props) => props.theme['blue-400']};

    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    gap: 4px;
  }
`

export const Range = styled.div`
  background-color: ${(props) => props.theme['gray-50']};
  height: 6px;
  width: 100%;
  margin-top: 16px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;

  > div {
    border-radius: 10px;
    height: 6px;
    width: 100%;
    position: absolute;
    background-color: ${(props) => props.theme['blue-400']};
  }
`

export const Alternatives = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  button {
    background-color: ${(props) => props.theme.white};
    box-shadow: 10px 24px 54px rgba(51, 51, 51, 0.05);
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    border: none;
    padding: 16px;
    border: 10px;
    width: 100%;
    text-align: start;
    border-radius: 10px;

    display: flex;
    gap: 16px;
  }
  button:nth-child(1) {
    border: 1px ${(props) => props.theme.green} solid;
  }

  button:nth-child(3) {
    background-color: ${(props) => props.theme['red-100']};
  }
`

export const StyledCheckbox = styled.input`
  appearance: none;
  background-color: ${(props) =>
    props.wrong ? props.theme['red-300'] : 'none'};
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #d4d4d4;
  position: relative;
  transition: all 150ms;

  &:after {
    content: '';
    display: ${(props) => (props.checked ? 'block' : 'none')};
    width: 12px;
    height: 12px;
    background: #000;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:checked {
    background: #d4d4d4;
  }
`
export const NavButtons = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  gap: 16px;

  button {
    width: 50%;
    padding: 16px;
    border-radius: 10px;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    cursor: pointer;
    transition: all 0.2s;
  }

  button:hover {
    filter: brightness(0.9);
  }

  button:nth-child(1) {
    color: ${(props) => props.theme['blue-400']};
    background-color: #fafafa;
    border: 1px solid ${(props) => props.theme['blue-400']};
  }
  button:nth-child(2) {
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme['blue-400']};
    border: none;
  }
`
