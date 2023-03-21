import *as React from "react"
import {StyleSheet,TouchableOpacity, Text, View} from "react-native"

export default class Meteors extends React.Component {
render() {
    return (
        <View style={styles.View}>
           

            
                <Text style={styles.Meteors}>Meteors</Text>
            

        </View>
    )
}

}

var styles = StyleSheet.create({
    View:{backgroundColor:"orange", flex:1, },
    IssTracking:{alignSelf:"center", marginTop:20, fontSize:20},
    Meteors:{alignSelf:'center', marginTop:35, fontSize:20}
})