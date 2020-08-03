import React from 'react';
import styled from 'styled-components/native';

/* https://kylewbanks.com/blog/react-native-tutorial-part-2-designing-a-calculator */

/* https://github.com/styled-components/styled-components/issues/149 */

let buttonHeight

const ButtonBox = styled.TouchableHighlight.attrs({
  underlayColor: '#193441',
  
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgb(39, 41, 43);  
  border-radius: 10px;
  margin: 5px;
`;

const ButtonText = styled.Text`
  font-size: 30;
  font-family: Orbitron-Bold;
  color: ${props => props.text=="Go" ? "green" : "orange"};
`;


export default GoButton = ({text, callback}) => (
  <ButtonBox onPress={callback}>
    <ButtonText text={text}>{text}</ButtonText>
  </ButtonBox>
);