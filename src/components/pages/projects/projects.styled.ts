import styled from "styled-components"

export const StyledWrapper = styled.div`
  grid-area: content;
  padding: 20px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: ${({ theme }) => theme.pink};
    border-bottom: 2px solid ${({ theme }) => theme.darkRed};
    font-weight: 300;
    font-size: 30px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`

export const StyledProjectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 20px;
`
