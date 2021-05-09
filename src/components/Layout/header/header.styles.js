import styled from "styled-components"

export const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font: 2rem 'roboto';
  margin: auto;

  @media screen and(max-width: 800px){
    font: 1rem 'roboto';
  }
`;