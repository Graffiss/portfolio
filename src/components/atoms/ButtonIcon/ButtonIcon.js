import styled from 'styled-components';

const ButtonIcon = styled.a`
  display: block;
  width: 35px;
  height: 35px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100% 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 20px;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    margin-left: 10px;
  }
`;

export default ButtonIcon;
