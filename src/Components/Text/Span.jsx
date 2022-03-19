import styled from 'styled-components';

const Text = styled.span`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800&display=swap');
  
  font-size: ${({ size }) => size};
  font-family: ${({ family }) => family};
  color: ${({ color }) => color};
  text-align: ${({ align = 'left' }) => align};
  font-weight: ${({ weight }) => weight || '400'};
`;

export default Text;