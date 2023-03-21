import *as React from "react"
import {StyleSheet,TouchableOpacity, Text, View} from "react-native"

export default class Home extends React.Component {
render() {
    return (
        <View style={styles.View}>
            <TouchableOpacity style={styles.IssButton}>
            <Text style={styles.IssTracking}>Iss Tracking</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.MeteorButton}>
                <Text style={styles.Meteors}>Meteors</Text>
            </TouchableOpacity>

        </View>
    )
}

}

var styles = StyleSheet.create({
    View:{backgroundColor:"orange", flex:1, },
    IssTracking:{alignSelf:"center",  fontSize:20},
    Meteors:{alignSelf:'center', fontSize:20},
    IssButton:{alignSelf:'center', backgroundColor:"grey", marginTop:20},
    MeteorButton:{alignSelf:'center', backgroundColor:"grey", marginTop:35}
})