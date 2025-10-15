import React from 'react';
import styled from 'styled-components';

const Pattern = () => {
  return (
    <StyledWrapper>
      <div className="container" />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* full-page height */
  pointer-events: none; /* ensures clicks pass through */

  .container {
    width: 100%;
    height: 50%;
    background-color: #000; /* full black background */
    background-image: radial-gradient(rgba(255, 255, 255, 0.3) 10%, transparent 1%);
    background-size: 11px 11px;

    /* fade from top to bottom */
    -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: cover;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
    mask-repeat: no-repeat;
    mask-size: cover;

    opacity: 0.6; /* adjust visibility of the pattern */
  }
`;

export default Pattern;
