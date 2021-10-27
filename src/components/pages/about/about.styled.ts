import styled from "styled-components"

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 430px 1fr;
  max-width: 1400px;
  padding: 20px 80px;

  @media (min-width: 1101px) {
    justify-content: center;
    align-items: center;
    justify-self: center;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    padding: 20px 20px;
  }
`

export const StyledPicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;

  @media (min-width: 1101px) {
    padding-top: 20px;
  }

  img {
    height: 400px;
    width: 400px;
    border-radius: 100%;
    border: 15px solid ${({ theme }) => theme.lightRed};

    @media (max-width: 768px) {
      height: 300px;
      width: 300px;
      border: 8px solid ${({ theme }) => theme.lightRed};
    }

    @media (max-width: 430px) {
      height: 200px;
      width: 200px;
    }
  }
`

export const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;

  h2 {
    color: ${({ theme }) => theme.darkRed};
    font-size: 60px;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 28px;
      text-align: center;
    }
  }

  p {
    color: ${({ theme }) => theme.text};
    font-size: 30px;
    font-weight: 300;
    padding-top: 30px;

    @media (max-width: 768px) {
      font-size: 16px;
      padding-top: 15px;
    }
  }

  @media (min-width: 1101px) {
    justify-content: center;
    align-items: flex-start;
  }

  @media (max-width: 1100px) {
    align-items: center;
    padding-left: 0;
  }
`
