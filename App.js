import React from 'react';
import { Container, Header, GoButton, Input, Processing, Prompt } from './components';
//import { Content, Form, Label, Item } from 'react-native-base';
//import Dropdown from './components/Dropdown';
import Selector from './components/Selector';
import SubSelector from './components/SubSelector';
import Cheatlist from './components/Cheatlist';
import Rating from './components/Rating';
import { Alert, AppState, BackHandler, Button, Navigator, Text, View, Image, ImageBackground, StyleSheet } from "react-native";
import Loader from './components/Loader';
import styled from 'styled-components/native';
import SplashScreen from 'react-native-splash-screen';
import { Dimensions } from "react-native";
import { InterstitialAd, TestIds, AdEventType } from '@react-native-firebase/admob';
import Rate, { AndroidMarket } from 'react-native-rate'
//import { useNavigation } from '@react-navigation/native';
//
const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-8514966468184377/6888473916';
//const adUnitId = 'ca-app-pub-8514966468184377/6888473916';


//AD_MOBS APP_ID:ca-app-pub-8514966468184377/6888473916
const isAllScience = false;
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

class App extends React.Component {

   adClickedListener;
   componentDidMount() {
      SplashScreen.hide();
      //AppState.addEventListener('change', this.handleAppStateChange);
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
      this.state.isAppClosing = false;
      this.setState({ isAppClosing: false });
   }

   componentWillUnmount() {
      //AppState.removeEventListener('change', this.handleAppStateChange);
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
   }

   handleBackButtonClick() {
      console.log("handleBackButtonClick called");      
      //this.props.navigation.goBack(null);
      //const navigation = useNavigation();
      //navigation.goBack(null);      
      this.state.isAppClosing = true;
      this.setState({ isAppClosing: true });      
      Alert.alert(
         'Leaving?',
         'Give Biology Cheatlists 5 Stars?',
         [
           {
             text: 'Bye',
             onPress: () => {
                console.log('Bye pressed');
                this.state.isAppClosing = true;
                this.setState({ isAppClosing: true });
                BackHandler.exitApp();
                //return true;
             }
           },
           {
             text: 'Yes!',
             onPress: () => {
                console.log('Yes! Pressed');
                this.state.isAppClosing = true;
                this.setState({ isAppClosing: true });
                const options = {
                  AppleAppID:"2193813192",
                  GooglePackageName:"com.lfq.biology_cheatlists",
                  //AmazonPackageName:"com.mywebsite.myapp",
                  //OtherAndroidURL:"http://www.randomappstore.com/app/47172391",
                  preferredAndroidMarket: AndroidMarket.Google,
                  preferInApp:true,
                  openAppStoreIfInAppFails:true,
                  //fallbackPlatformURL:"http://www.mywebsite.com/myapp.html",
                }
                Rate.rate(options, success=>{
                  if (success) {
                    // this technically only tells us if the user successfully went to the Review Page. Whether they actually did anything, we do not know.
                    this.setState({rated:true})
                  }
                })                
                BackHandler.exitApp();
                //return true;
             },
             style: 'cancel'
           }
         ],
         { cancelable: false }
       );      
       console.log("handleBackButtonClick ALERT CREATED???!!!!");       
       return true;
       
   }   

   handleAppStateChange = (nextAppState) => {
      if (nextAppState === 'inactive') {
         console.log('the app is closed');

      }
   }


   constructor(props) {
      super(props);
      this.state = {
         processing: false,
         headerTitle: this.props.title,
         cheatList: "Biology",
         cheatListRendered: false,
         staticCheatListView: null,
         subtopic: "Basic",
         listOpen: false,
         screenWidth: screenWidth,
         screenWidth: screenHeight,
         isAppClosing: false
      };
      this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
      //this.goBack = this.goBack.bind(this);
      //this.props.navigation.goBack = this.props.navigation.goBack(this);
   }

   setSubject(subject) {
      console.log("setSubject called, subject = " + subject);
      this.state.cheatList = subject;
      this.setState({ cheatList: subject });
   }

   setSubtopic(subtopic) {
      console.log("setSubtopic called, subject = " + subtopic);
      this.state.subtopic = subtopic;
      this.setState({ subtopic: subtopic });
   }

   onLayout() {
      screenWidth = Dimensions.get('window').width;
      screenHeight = Dimensions.get('window').height;
      console.log("onLayout called, screenWidth = " + screenWidth + ", screenHeight = " + screenHeight);
      this.state.screenWidth = screenWidth;
      this.state.screenHeight = screenHeight;
      this.setState({
         screenWidth: screenWidth,
         screenWidth: screenHeight,
      })
   }

   render() {
      const listOpen = this.state.listOpen;
      let header = "Science Cheatsheet";
      let subheader = this.state.subtopic + " Cheatlists";
      if (isAllScience === false) {
         header = this.state.cheatList + " Cheatlists";
      }
      //styles.backgroundImage.width = this.state.screenWidth;
      //styles.backgroundImage.height = this.state.screenHeight * 0.66;
      let aspectRatio = screenHeight / screenWidth;
      let bgImageHeight = listOpen === true ? (screenHeight) : (screenHeight * 0.66);
      let bgStyle = {
         position: 'absolute',
         aspectRatio: aspectRatio,
         resizeMode: 'stretch',
         width: screenWidth,
         height: bgImageHeight,
         opacity: 0.2
      };
      return (
         <Container style={styles.container} onLayout={this.onLayout.bind(this)}>
            <Image source={require('./images/DNA.png')} style={bgStyle} />
            {!listOpen && this.state.isAppClosing === false && (
               <View style={{ flex: 1.0 }}>
                  <Header>{header}</Header>
                  <Prompt>Please select a subject:</Prompt>
                  {isAllScience && (
                     <Selector callback={this.setSubject.bind(this)} />
                  )}
                  <SubSelector topic={this.state.cheatList} subtopic={this.state.subtopic} callback={this.setSubtopic.bind(this)} />
                  <GoButton text="Go" callback={() => { this.press() }}>
                  </GoButton>
               </View >
            )}
            {!listOpen && this.state.isAppClosing === true && (
               <Rating />
            )}
            {
               listOpen && (
                  <View style={{ flex: 1 }}>
                     {this.state.cheatListRendered === true && (
                        <Button onPress={() => { this.backUp() }} title="Back Up"></Button>
                     )}
                     <Prompt>{subheader}</Prompt>
                     <Loader isLoading={!this.state.cheatListRendered} />
                     {this.state.cheatListRendered && (
                        <Cheatlist staticCheatListView={this.state.staticCheatListView} cheatList={this.state.cheatList} subtopic={this.state.subtopic}></Cheatlist>
                     )}
                  </View>
               )
            }
         </Container >
      );
   }

   setCheatListRendered(staticCheatListView) {
      console.log("setCheatListRendered called");
      this.state.staticCheatListView = staticCheatListView;
   }

   onChangeHandler(value) {
      console.log(`Selected value: ${value}`);
      //this.state.cheatList = value;
      //this.setState({cheatList: this.state.cheatList});
   }

   backUp() {
      this.state.listOpen = false;
      this.setState({ listOpen: this.state.listOpen });
   }

   press() {
      console.log("press called, this.state.listOpen = " + this.state.listOpen);
      console.log("doPress called");
      this.state.listOpen = true;
      this.state.cheatListRendered = false;
      //alert("Hello?");
      this.setState({ listOpen: true, cheatListRendered: false });
      //this.showInterstitialAd();
      this.doPress();
   };
   doPress() {
      Cheatlist.setCheatListData(this.state.cheatList, this.state.subtopic, this.setCheatListRendered.bind(this));
      setTimeout(() => {
         this.state.cheatListRendered = true;
         this.setState({ cheatListRendered: true });
      });
      //this.setState(
      //   {
      //      processing: false,
      //      listOpen: !this.state.listOpen,
      //      headerTitle: this.props.title,
      //      cheatList: this.state.cheatList
      //
      //   }
      //);
   }

   showInterstitialAd = () => {
      // Create a new instance
      const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
         requestNonPersonalizedAdsOnly: true
      });
      interstitial.onAdEvent((type) => {
         if (type === AdEventType.LOADED) {
            console.log("AD LOADED!!");
            interstitial.show();
         } else if (type === AdEventType.CLOSED || type === AdEventType.ERROR) {
            console.log("AD CLOSED!!");
            this.doPress();
         }
      });
      interstitial.load();
   }
}

let styles = StyleSheet.create({
   container: {
      backgroundColor: "#EA66FF"
   },
   backgroundImage: {
      flex: 1,
      resizeMode: "stretch", // or 'stretch'
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      opacity: 0.2,
      width: screenWidth,
      height: screenHeight * 0.66,
   }
});


export default App;