import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.white};
  box-shadow: 10px 24px 54px rgba(51, 51, 51, 0.03);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  color: ${(props) => props.theme['gray-500']};

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }

  svg {
    color: ${(props) => props.theme['yellow-400']};
  }
  #note {
    font-size: 14px;
    line-height: 19px;
  }
`
export const ImgWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 0 auto;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 16px;
  position: relative;
  background-color: rgba(255, 159, 36, 0.1);

  img {
    z-index: 123;
    position: absolute;
    opacity: 1;
    width: 32px;
  }
`
export const TextWrapper = styled.div`
  h1 {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    padding-bottom: 8px;
  }

  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: ${(props) => props.theme['gray-300']};
  }
`
