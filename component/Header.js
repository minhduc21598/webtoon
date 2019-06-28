import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Button from './Button';
import  LinearGradient  from 'react-native-linear-gradient';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        var {onPressBtnRight, _navigationHeader} =this.props;
        return (
                        
<View>
                <Button nameIcon="md-camera" title="Quét" onPress={() => _navigationHeader.navigate("New")} />

                <View style={styles.txtInput}>
                    <Ionicons name="ios-search" size={20} color="gray"/>
                    <TextInput
                        style={{ flex: 1, marginLeft: 5, }}
                        placeholder="Nhập tìm kiếm"
                    />
                </View>

                <Button nameIcon="ios-wallet" title="Ví" onPress={onPressBtnRight} />
                </View>
        );
    }
}

export default Header;
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 80,
        paddingTop: 30,
        flexDirection: 'row',
        paddingBottom: 10,
    },

    txtInput: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 5,
    }
});