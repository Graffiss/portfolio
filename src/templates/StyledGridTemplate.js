import React from 'react';
import styled from 'styled-components';

const StyledGrid = styled.div`
  position: absolute;
  display: grid;
  grid-template-rows: 1fr 2fr 0.25fr 1fr;
  grid-template-columns: 0.5fr 0.5fr 1fr 2fr 1fr;
  background: white;
  height: 100vh;
  width: 100vw;
  z-index: -2;

  div {
    border-bottom: 1px solid hsl(252, 6%, 32%, 13%);
    border-right: 1px solid hsl(252, 6%, 32%, 13%);
  }

  &.no-right-border {
    border-right: none;
  }

  &.no-bottom-border {
    border-bottom: none;
  }
`;

const StyledGridTemplate = () => (
  <StyledGrid className="no-right-border no-bottom-border">
    <div />
    <div />
    <div />
    <div />
    <div className="no-right-border" />
    <div />
    <div />
    <div />
    <div />
    <div className="no-right-border" />
    <div />
    <div />
    <div />
    <div />
    <div className="no-right-border" />
    <div className="no-bottom-border" />
    <div className="no-bottom-border" />
    <div className="no-bottom-border" />
    <div className="no-bottom-border" />
    <div className="no-right-border no-bottom-border" />
  </StyledGrid>
);

export default StyledGridTemplate;
