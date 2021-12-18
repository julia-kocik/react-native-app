import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

const Task = (props) => (
    <View style={styles.item}>
        <View style={styles.itemLeft}>
            <TouchableOpacity style={styles.square}></TouchableOpacity>
            <Text style={styles.itemText}>{props.text}</Text>
        </View>
        <View style={styles.circular}></View>
    </View>
)

const styles = StyleSheet.create({

})

export default Task;