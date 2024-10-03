import styled from "styled-components";

export const Slider = styled.div`
  max-width: 1150px;

  //tablet
  @media (max-width: 991px) {
    width: clamp(317px, 85vw, 550px);

  }
  //tablet
  @media (max-width: 767px) {
    /* max-width: 318px; */
    width: clamp(317px, 85vw, 500px);


  }
`;
