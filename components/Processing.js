import React from 'react';
import styled from 'styled-components/native';

const ProcessingBox = styled.Text`
  flex: 6;
  font-size: 30;
  text-align: center;
  text-align-vertical: center;
  font-family: Orbitron-Bold;
  color: red;
  background-color: rgb(29, 31, 33);
  padding-top: 10px;
  padding-bottom: 10px;
`;

export default () => (
  <ProcessingBox>Processing</ProcessingBox>
);