import styled from 'styled-components';

const ButtonStack = styled.button`
  display: block;
  width: 200px;
  height: 200px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50% 50%;
  background-color: white;
  border: 3px solid #db3340;
  border-radius: 50px;

  &:hover {
    border: 3px solid #e93f4c;
    box-shadow: 10px 10px 0 #9e2b35;
    fill: white;
    border: 3px solid #9e2b35;
    background-image: none;

    &:before {
      content: attr(data-content);
      color: #9e2b35;
      font-weight: 600;
      font-size: 25px;
    }
  }
`;

export default ButtonStack;
