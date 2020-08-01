import React, { Component } from "react";
import { Picker, View, Text, StyleSheet } from "react-native";
//BIOLOGY, CHEMISTRY, COMPUTERS(computer science), ECOLOGY, OCEANOGRAPHY, GEOLOGY, METEOROLOGY, PHYSICS
import biologyCheatlistData from '../helpers/biology_cheatlist_data';
import chemistryCheatlistData from '../helpers/chemistry_cheatlist_data';
import computersCheatlistData from '../helpers/computers_cheatlist_data';
import ecologyCheatlistData from '../helpers/ecology_cheatlist_data';
import oceanographyCheatlistData from '../helpers/oceanography_cheatlist_data';
import geologyCheatlistData from '../helpers/geology_cheatlist_data';
import meteorologyCheatlistData from '../helpers/meteorology_cheatlist_data';
import physicsCheatlistData from '../helpers/physics_cheatlist_data';
import helpers from '../helpers/helper_functions';

export default class SubSelector extends Component {

   //BIOLOGY, CHEMISTRY, COMPUTERS(computer science), ECOLOGY, GEOLOGY, METEOROLOGY, OCEANOGRAPHY, PHYSICS
   BiologySubtopics = [];
   ChemistrySubtopics = [];
   ComputersSubtopics = [];
   EcologySubtopics = [];
   GeologySubtopics = [];
   MeteorologySubtopics = [];
   OceanographySubtopics = [];
   PhysicsSubtopics = [];

   constructor(props) {
      super(props);
      console.log("SubSelector constructor called.");
      var index = 0;
      //BIOLOGY, CHEMISTRY, COMPUTERS(computer science), ECOLOGY, GEOLOGY, METEOROLOGY, OCEANOGRAPHY, PHYSICS
      //console.log("biologyCheatlistData = " + JSON.stringify(biologyCheatlistData));
      /*
      biologyCheatlistData.data.forEach((subtopic) => {
         //subtopic.entries.sort(function (a, b) {
         //console.log("A TITLE = " + a.title + ", B TITLE = " + b.title);
         //   if (a.title && b.title) {
         //console.log("A & B TITLE EXIST!!!");
         //      if (a.title.toUpperCase() < b.title.toUpperCase()) { return -1; }
         //      else if (a.title.toUpperCase() < b.title.toUpperCase()) { return 1; }
         //      else { return 0; }
         //   } else {
         //      return 0;
         //   }
         //});
         //if (subtopic.itemName === 'Ecology') {
         //   subtopic.entries.forEach((entry) => {
         //      console.log(subtopic.itemName + ":" + entry.title);
         //   });
         //}

         if (subtopic.itemName === 'Systems Biology(Organs & Organisms)') {
            var orderedSubtopics = ["Anatomy", "Anatomy Body Organization", "Anatomy Cycle", "Anatomy Homeostasis Components", "Maintaining Homeostatis", "Anatomy Terminology", "Functions of Organs", "Types of TIssues", "The perception of taste", "The sense of smell", "The sense of pain", "Action Potentials(nervous system)", "The actuator(nervous system)", "Action Potentials(nervous system)", "Taste, Smell & Leather Movement Vegetative Nerves Common Features", "Vegetative function of the nervous system", "Hearing", "Tab structure(ears)", "Perception of balance", "The structure of the eye", "Retinal and eye function", "Optic nerves", "Looking up and far(eyes)", "Adrenal gland", "Endocrine System", "Endocr­ine­/Ne­rvous System Coordi­nation", "Thymus(lymphatic)", "Enzymes", "Gonads", "Hormone Pathway: Insulin", "Hormones", "Pituitary gland - control gland", "Thyroid", "Neurons", "Nonspe­cific Immune Defense", "Specific Immune Defenses", "Operation sentient", "Pancreas", "pH Differences", "The Respiration System and Ventillation", "Regulation of respiration", "Positioning(digestion)", "Bile Purpose", "Breakdown of starch", "Digestive system", "Digestive System", "Digestive System: Degradation", "Digestive System: Human Mouth", "Digestve system: Anal opening", "Digestve system: Catabolic reactions in the cell", "Digestve system: Colon", "Digestve system: lipids", "Digestve system: Pharynx and Esophagus", "Digestve system: Small intestine", "Digestve system: Stomach", "Digestve system: Tongue and Salivary Glands", "Digestve system:: Tooth Division", "Digestve system:Metabolic system", "Small intestine adaptations", "Physical vs Chemical Digestion"];
            orderedSubtopics = orderedSubtopics.filter((value, index, self)=>{
               return self.indexOf(value) === index;
            });
            var orderedSubtopicsIndex = 0;
            var entriesCopy = [];
            for (var i = 0; i < subtopic.entries.length; i++) {
               //console.log("subtopic.entries[i] = " + JSON.stringify(subtopic.entries[i]));
               entriesCopy.push(subtopic.entries[i]);
            }
            //console.log("entriesCopy = " + JSON.stringify(entriesCopy));
            var foundIndex = -1;
            var newEntries = [];
            console.log(subtopic.itemName + " orderedSubtopics.length = " + orderedSubtopics.length);
            console.log(subtopic.itemName + " OLD ENTRIES LENGTH BEFORE = " + entriesCopy.length + ", subtopic.entries.length = " + subtopic.entries.length);
            for (var i = 0; i < subtopic.entries.length; i++) {
               //console.log("TITLE["+ i + "]=" + subtopic.entries[i].title.trim().toUpperCase().replace(/-/g,''));
               //helpers.sayHello();
               if (orderedSubtopicsIndex < orderedSubtopics.length) {
                  foundIndex = helpers.getIndex(entriesCopy, "title", orderedSubtopics[orderedSubtopicsIndex]);
                  //console.log("foundIndex = " + foundIndex);
                  if (foundIndex !== "FALSE") {
                     if (!entriesCopy[foundIndex]) {
                        console.log("entriesCopy[foundIndex] UNDEFINED!!!");
                     } else {
                        newEntries.push(entriesCopy[foundIndex]);
                        entriesCopy.splice(foundIndex, 1);
                     }
                     //console.log(subtopic.itemName + " OLD ENTRIES LENGTH NOW = " + entriesCopy.length);                  
                  } else {
                     console.log("NOT FOUND: '" + orderedSubtopics[orderedSubtopicsIndex].trim().toUpperCase().replace(/-/g, '') + "'");
                  }
                  orderedSubtopicsIndex++;
               }
               //console.log("TITLE:'" + subtopic.entries[i].title + "'");
            }
            //console.log("NEW ENTRIES!!! = " + JSON.stringify(newEntries));
            console.log("NEW entriesCopy.length = " + entriesCopy.length);
            entriesCopy.map((entry)=>{
                console.log("ENTRIES COPY TITLE NOT FOUND = " + entry.title);
            });
            console.log("NEW ENTRIES = " + JSON.stringify(newEntries));
            console.log(subtopic.itemName + " OLD ENTRIES LENGTH = " + subtopic.entries.length + ", NEW ENTRIES LENGTH = " + newEntries.length);
            //var titlesHyphen = subtopic.entries.map((entry)=>{return entry.title}).filter((title)=>{
            //     return title.indexOf("-")>=0;
            //});
            //console.log("HYPHENATED ENTRIES COUNT = " + titlesHyphen.length + " titlesHyphen = " + titlesHyphen);
            //console.log("NEW ENTRIES = " + JSON.stringify(newEntries));
         }
      });
      */

      this.BiologySubtopics = biologyCheatlistData.data.map((subtopic) => {
         return { index: ++index, itemName: subtopic.itemName, type: subtopic.type };
      });

      this.ChemistrySubtopics = chemistryCheatlistData.data.map((subtopic) => {
         return { index: ++index, itemName: subtopic.itemName, type: subtopic.type };
      });
      this.ComputerSubtopics = computersCheatlistData.data.map((subtopic) => {
         return { index: ++index, itemName: subtopic.itemName, type: subtopic.type };
      });
      this.EcologySubtopics = ecologyCheatlistData.data.map((subtopic) => {
         return { index: ++index, itemName: subtopic.itemName, type: subtopic.type };
      });
      this.GeologySubtopics = geologyCheatlistData.data.map((subtopic) => {
         return { index: ++index, itemName: subtopic.itemName, type: subtopic.type };
      });
      this.MeteorologySubtopics = meteorologyCheatlistData.data.map((subtopic) => {
         return { index: ++index, itemName: subtopic.itemName, type: subtopic.type };
      });
      this.OceanographySubtopics = oceanographyCheatlistData.data.map((subtopic) => {
         return { index: ++index, itemName: subtopic.itemName, type: subtopic.type };
      });
      this.PhysicsSubtopics = physicsCheatlistData.data.map((subtopic) => {
         return { index: ++index, itemName: subtopic.itemName, type: subtopic.type };
      });
      /*
      {index:0, name:"Animals with Differing Names"},
      {index:0, name:"Antimicrobial Chemotherapy"},
      {index:0, name:"Biochemistry"},
      {index:0, name:"Biochemical Pathways Template"},
      {index:0, name:"Cells And Cell Membranes"},
      {index:0, name:"Cell Communication and Cell Cycle"},
      {index:0, name:"Cell Energetics"},
      {index:0, name:"Cell Processes"},   
      {index:0, name:"Cell Structure and Function"},  
      {index:0, name:"Cell Theory"},
      {index:0, name:"Cell Transport"},
      {index:0, name:"Chemistry of Life"},
      {index:0, name:"Chromosomal Basis of Hereditary"},
      {index:0, name:"DNA"},
      {index:0, name:"DNA Structure and Replication"},   
      {index:0, name:"Ecology and Animal Behavior"},
      {index:0, name:"Gene Expression and Regulation"},
      {index:0, name:"Genetics"},
      {index:0, name:"Genetics Fundamentals"},
      {index:0, name:"Hereditary"},
      {index:0, name:"Homesostasis"},
      {index:0, name:"HS Cells and Energy"},
      {index:0, name:"Malaria"},
      {index:0, name:"Meiosis"},
      {index:0, name:"Metabolism"},
      {index:0, name:"Mitosis"},
      {index:0, name:"Osmosis & Water Potential"},
      {index:0, name:"Photosynthesis & Cellular Respiration"},
      {index:0, name:"Plant Physiology"},
      {index:0, name:"Polymers and Carbs"},
      {index:0, name:"Protozoa"},
      {index:0, name:"Science Ecology"},
      {index:0, name:"Specialized Plate Media"},
      {index:0, name:"Tetanus"},
      */


      this.state = {
         selectedcat: this.props.topic,
         category: this.BiologySubtopics
      }
   }


   async onValueChangeCat(value) {
      console.log("onValueChangeCat called, value = " + value);
      this.setState({ selectedcat: value });
      this.props.callback(value);
   }

   render() {
      console.log("props.topic = " + this.props.topic);
      //BIOLOGY, CHEMISTRY, COMPUTERS(computer science), ECOLOGY, GEOLOGY, METEOROLOGY, OCEANOGRAPHY, PHYSICS
      switch (this.props.topic) {
         case 'Biology':
            this.state.category = this.BiologySubtopics;
            break;
         case 'Chemistry':
            this.state.category = this.ChemistrySubtopics;
            break;
         case 'Computers':
            this.state.category = this.ComputersSubtopics;
            break;
         case 'Ecology':
            this.state.category = this.EcologySubtopics;
            break;
         case 'Geology':
            this.state.category = this.GeologySubtopics;
            break;
         case 'Meteorology':
            this.state.category = this.MeteorologySubtopics;
            break;
         case 'Oceanography':
            this.state.category = this.OceanographySubtopics;
            break;
         case 'Physics':
            this.state.category = this.PhysicsSubtopics;
            break;
         default:
            this.state.category = this.BiologySubtopics;
            break;
      }
      return (
         <View style={styles.viewStyle}>
            <View style={{ flex: 1.0, fontSize: 14 }}>
               <Picker
                  itemStyle={styles.itemStyle}
                  mode="dropdown"
                  style={styles.pickerStyle}
                  selectedValue={this.props.subtopic}
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