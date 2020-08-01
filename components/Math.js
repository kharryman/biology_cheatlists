import { StyleSheet, View, Text } from 'react-native';
//import Katex from 'react-native-katex';
import React, { Component, useState } from 'react';
import MathView from 'react-native-math-view';
//import MathJax from 'react-native-mathjax';

//const styles = StyleSheet.create({
//  katex: {
//    flex: 1,
//  }
//});

//const mmlOptions = {
//   jax: ['input/MathML'],
//};

const inlineStyle =`
html, body {
  display: flex;
  background-color: #fafafa;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0;
  padding: 0;
}
.katex {
  font-size: 4em;
  margin: 0;
  display: flex;
}
`;

const styles = StyleSheet.create({
   mathElement: {
      height: 50,
      width: 50
   }
});


export default function MathExpression(props) {
   //console.log("MathExpression props = " + JSON.stringify(props));
   //const [loaded, setLoaded] = useState(false);
   //const [expression, setExpression] = useState(props.expression);//"c=\\pm\\sqrt{a^2 + b^2}"
   //setTimeout(() => setExpression(), 2000);//"d=\\pm\\sqrt{a^2 + b^2}"

   //const [loaded, setLoaded] = useState(false);
   //const [expression, setExpression] = useState("a=b+c");
   //setTimeout(() => setExpression("a=b+c"), 2000);
   //<Katex expression="c=\pm\sqrt{a^2 + b^2}"></Katex>
   //'x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}'
   return (
      
      <MathView
         math={props.expression} style={{width:props.myWidth, height:props.myHeight}}
      />   
  );
}


/*export default class MathExpression extends Component {
   render () {
     let testExp = '<msqrt><mn>2</mn><mfrac bevelled="true"><mn>4</mn><mn>7</mn></mfrac></msqrt><mo>+</mo><mfrac><mn>5</mn><mn>8</mn></mfrac>'
     return (
       <View style={{flex:1}}>
         <MathJax
           mathJaxOptions={mmlOptions}
           html={'<math xmlns="http://www.w3.org/1998/Math/MathML">' + testExp + '</math>'}
         />
       </View>
     );
   }
 }
 */