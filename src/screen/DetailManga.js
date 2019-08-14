import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FlatGridItems from '../component/FlatGridItems';
class DetailManga extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        };
    }

    _renderLoading = () => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#fff" />
            </View>
        )
    }

    onPressBackBtn = () => {
        this.props.navigation.goBack()
    }

    backToTopPage = () => {
        this.refs.ScrollView.scrollTo({ x: 0, y: 0, animated: true })
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    ref='ScrollView'
                    onContentSizeChange={this.backToTopPage}
                >
                        <Image source={{uri: "https://cdn.myanimelist.net/images/manga/1/157569l.jpg"}} style={{height: 225, width: 158, alignSelf: 'center'}} />
                        <Text style={{alignSelf:'center', alignItems: 'center', color: 'white', fontSize: 25, fontWeight:'700'}}>asdasdasd</Text>
                        <FlatGridItems 
                            itemDimension={110}
                            items={dataOriginal}
                            spacing={7}
                            renderItem={this.renderItem}
                        />
                </ScrollView>
                <TouchableOpacity
                    onPress={this.onPressBackBtn}
                    style={styles.backBtn}
                >
                    <Icon name='ios-arrow-round-back' size={25} color='white' />
                </TouchableOpacity>
            </View>
        );
    }
}

export default DetailManga;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    backBtn: {
        position: 'absolute',
        height: 50, width: "100%",
        backgroundColor: 'rgba(0,0,0,0)',
    }
});