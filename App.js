import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";


class ClassStart extends React.Component {

  constructor(){ // Constructor needed for states in class based components
    super()
    this.state = {

      startNext: true

      

    }

  }


  // this is a change i make to test git

  render(){

    if (this.state.startNext) {

      return(
        <View>
  
          <Text> {this.state.startNext ? "" : "Welcome Hasan"} </Text>
  
          <Button title={this.state.startNext ? "Start" : "Next"} onPress={() => this.setState({startNext: !this.state.startNext })} ></Button>
        
  
  
  
        </View>
      ) 
      
    } else {

      return(

        <View>

          <Numpad/>

        </View>



      )
      
    }
   

  }
  



}

const Start = () => {
  const [getCounter, setCounter] = React.useState(false);

  const [getCount, setCount] = React.useState("Start");

  const Welcome = () => {
    if (getCounter == 0) {
      setCounter("Welcome Hasan");
    } else {
      setCounter("");
    }

    

    MyButton();
  };

  function MyButton() {

    if (getCount == "Start") {
      setCount("NEXT");
    } else {
      setCount("Start");
    }

  }

  return (
    <View>
      <Text>{getCounter}</Text>

      <Button title={getCount} onPress={Welcome}></Button>
    </View>
  );
};

// const Welcome = () => {

//   return (

//     <View>
//       <Text>Welcome Hasan</Text>
//       <Button title="NEXT">

//       </Button>

//     </View>

//     )

// }

const Numpad = () => {

  const [getNumber, setNumber]  = React.useState("")

  

  

  return (
    <View style = {numStyle.numpad}>

      <Text> {getNumber} </Text>

      <View style={numStyle.numpadRows}>
        <Button title="1" variant="success" onPress = {() => setNumber(getNumber + "1") }>Button</Button>
        <Button title="2" onPress = {() => setNumber(getNumber + "2")}></Button>
        <Button title="3" onPress = {() => setNumber(getNumber + "2")}></Button>
      </View>

      <View style={numStyle.numpadRows}>
        <Button title="4" onPress = {() => setNumber(getNumber + "2")}></Button>
        <Button title="5" onPress = {() => setNumber(getNumber + "2")}></Button>
        <Button title="6" onPress = {() => setNumber(getNumber + "2")}></Button>
      </View>

      <View style={numStyle.numpadRows}>
        <Button title="7" onPress = {() => setNumber(getNumber + "2")}></Button>
        <Button title="8" onPress = {() => setNumber(getNumber + "2")}></Button>
        <Button title="9" onPress = {() => setNumber(getNumber + "2")}></Button>
      </View>
      <View style={numStyle.numpadRows}>
        <Button title="0" onPress = {() => setNumber(getNumber + "2")}></Button>
      </View>

    </View>
  );
};


const numStyle = StyleSheet.create({

  numpad: {

    
    height: "70%",
    justifyContent: "space-evenly",
    alignItems: "center"
    

  },

  numpadRows: {
     flexDirection: "row" , 
     width: "50%", 
     justifyContent: "space-between" 
    }

  



})

export default function App() {
  return (
    <View style={styles.container}>
      {/* show Start here. Take decision here when to show the Numpad */}
      <ClassStart />
      


      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
