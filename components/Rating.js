import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import RateModal from 'react-native-store-rating'

export default class Rating extends Component {
   state = {
      isModalOpen: true
   }


   render() {
      return (
         <View style={styles.container}>
            <RateModal
               modalTitle="Give the app 5 stars?"
               rateBtnText={'Rate'}
               cancelBtnText={'Cancel'}
               totalStarCount={5}
               defaultStars={5}
               isVisible={true}
               sendBtnText={'Send'}
               commentPlaceholderText={'comments?'}
               emptyCommentErrorMessage={'No comments entered.'}
               iTunesStoreUrl={'market://details?id=${APP_PACKAGE_NAME}'}
               isModalOpen={this.state.isModalOpen}
               storeRedirectThreshold={6}
               style={{
                  paddingHorizontal: 30,
               }}
               onStarSelected={(e) => {
                  console.log('change rating', e);
               }}
               onClosed={() => {
                  console.log('pressed cancel button...')
                  this.setState({
                     isModalOpen: false
                  })
               }}
               sendContactUsForm={(state) => {
                  alert(JSON.stringify(state));
               }}
            />
         </View >
      )
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   }
});
