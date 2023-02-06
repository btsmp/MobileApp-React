import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme['gray-100']};
  padding: 16px;
  border-radius: 10px;

  > div:nth-child(1) {
    background-color: ${(props) => props.theme.white};
    border-radius: 10px;
    padding: 8px;
    width: fit-content;

    > svg {
      width: 24px;
    }
  }

  h1 {
    color: ${(props) => props.theme['gray-500']};
    font-size: 14px;
    line-height: 17px;
    margin-top: 16px;
  }

  span {
    font-size: 12px;
    line-height: 16px;
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
  }
`
