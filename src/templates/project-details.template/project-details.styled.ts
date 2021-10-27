import styled from "styled-components"

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  @media (max-width: 1068px) {
    grid-template-columns: 1fr;
    padding: 20px 0;
  }
`
export const StyledFlex = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const StyledHeader = styled.h1`
  color: ${({ theme }) => theme.lightRed};
  font-size: 46px;
  font-weight: 600;
  padding: 30px 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 32px;
    padding: 15px 0;
  }
`
export const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 24px;
  font-weight: 300;
  padding: 0px 20px 30px 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
    padding-bottom: 15px;
  }
`
export const StyledImage = styled.img`
  height: 406px;
  width: 750px;
  border-radius: 25px;
  border: 3px solid ${({ theme }) => theme.darkRed};

  @media (max-width: 1260px) {
    height: 271px;
    width: 500px;
    border-radius: 10px;
  }

  @media (max-width: 600px) {
    height: 116px;
    width: 215px;
    border-radius: 10px;
  }
`
export const StyledButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  Button {
    margin: 10px 10px;
  }
`
