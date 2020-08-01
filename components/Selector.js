import React, { Component } from "react";
import { Picker, View, Text, StyleSheet } from "react-native";

export default class Selector extends Component {
   state = {
      selectedcat: "",
      category: [
         {
            index: 0,
            itemName: "Biology"
         },
         {
            index: 1,
            itemName: "Chemistry"
         },
         {
            index: 2,
            itemName: "Geology"
         },
         {
            index: 3,
            itemName: "Physics"
         }
      ]
   };

   async onValueChangeCat(value) {
      this.setState({ selectedcat: value });
      this.props.callback(value);
   }

   render() {
      return (
         <View style={styles.viewStyle}>
            <View style={{ flex: 1.0, fontSize: 14 }}>
               <Picker
                  itemStyle={styles.itemStyle}
                  mode="dropdown"
                  style={styles.pickerStyle}
                  selectedValue={this.state.selectedcat}
                  onValueChange={this.onValueChangeCat.bind(this)}
               >
                  {this.state.category.map((item, index) => (
                     <Picker.Item
                        color="#0087F0"
                        label={item.itemName}
                        value={item.itemName}
                        index={index}
                     />
                  ))}
               </Picker>
            </View>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   viewStyle: {
      flex: 1,
      alignSelf: "center",
      flexDirection: "row",
      width: "92%",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginTop: 40
   },
   itemStyle: {
      fontSize: 10,
      fontFamily: "Roboto-Regular",
      color: "#007aff",
      textAlign: 'right'
   },
   pickerStyle: {
      width: "100%",
      height: 40,
      color: "#007aff",
      fontSize: 14,
      fontFamily: "Roboto-Regular",
      textAlign: 'right'
   },
   textStyle: {
      fontSize: 14,
      fontFamily: "Roboto-Regular",
      textAlign: 'right'
   }
});