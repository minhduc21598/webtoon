import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, ActivityIndicator, Image, Keyboard } from 'react-native';
import { PickerView, PickerViewHide } from '../component/PickerView';
import { typeSearch } from '../const';
import Icon from 'react-native-vector-icons/Ionicons';
import Grid from '../component/FlatGridItems';
import { getResultSearch } from '../services/GetAPI';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'anime',
            name: '',
            items: [],
            showPicker: false,
            isLoading: true,
            loadingMore: false
        };
        this.page = 1;
    }

    typeChange = (type) => {
        this.setState({ type: type });
    }

    openPicker = () => {
        if (!this.state.showPicker) {
            this.setState({ showPicker: true });
            PickerView(typeSearch, this.state.type, this.typeChange, 'Choose a type');
        } else {
            this.setState({ showPicker: false });
            PickerViewHide();
        }
    }

    getText = (text) => {
        this.state.name = text;
    }

    renderLoading = () => {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size="large" color='black' />
            </View>
        )
    }

    onPress2 = (item) => {
        if (this.state.type == 'anime') this.props.navigation.navigate("DetailAnime", { id: item.mal_id });
        else this.props.navigation.navigate("DetailManga", { item: item });
    }

    renderItems = ({ item, index }) => {
        return (
            (this.state.isLoading) ? this.renderLoading() :
                <TouchableOpacity
                    style={styles.itemContainer}
                    key={index}
                    onPress={() => this.onPress2(item)}
                    activeOpacity={1}
                >
                    <Image source={{ uri: item.image_url }} style={styles.image} />
                    <Text style={styles.txtGenre}>{item.type}</Text>
                    <Text numberOfLines = {2} style={styles.txtTitle}>{item.title}</Text>
                    <Text style={styles.icon}>
                        <Icon name='ios-heart' color='green' /> {item.score}
                    </Text>
                </TouchableOpacity>
        )
    }

    onPress = () => {
        Keyboard.dismiss();
        this.page = 1;
        getResultSearch(this.state.type, this.state.name, this.page).then(
            response => response.json()
        ).then(
            res => {
                this.setState({
                    items: res.results,
                    isLoading: false
                })
            }
        ).catch((error) => {
            console.error(error);
            return error;
        });
    }

    getMore = () => {
        if (this.state.loadingMore) return;
        this.setState({ loadingMore: true });
        this.page = this.page + 1;
        getResultSearch(this.state.type, this.state.name, this.page).then(
            response => response.json()
        ).then(
            res => {
                this.setState({
                    items: this.state.items.concat(res.results),
                    loadingMore: false
                })
            }
        ).catch((error) => {
            console.error(error);
            return error;
        });
    }

    renderLoadingIconBelow = () => {
        if (this.state.loadingMore) {
            return (
                <View style={styles.loadingMore}>
                    <ActivityIndicator color='black' size='large' />
                </View>
            )
        }
        return null;
    }

    render() {
        return (
            <View style={styles.all}>
                <TouchableOpacity
                    onPress={this.openPicker}
                    style={styles.btnChooseTab}
                    activeOpacity={1}
                >
                    <Text style={styles.txtChooseTab}>Choose a type</Text>
                    <Text style={styles.txtChooseTab}>
                        {this.state.type}{'  '}
                        <Icon name='ios-arrow-down' color='black' size={20} />
                    </Text>
                </TouchableOpacity>
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Type a name'}
                        onChangeText={this.getText}
                    />
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={this.onPress}
                    >
                        <Text style={styles.txtBtn}>Search</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView
                    style={styles.scrollView}
                >
                    <Grid
                        itemDimension={110}
                        items={this.state.items}
                        spacing={7}
                        renderItem={this.renderItems}
                        onEndReachedThreshold={0.5}
                        onEndReached={this.getMore}
                        listFooterComponent={this.renderLoadingIconBelow}
                    />
                </ScrollView>
            </View>
        );
    }
}

export default Search;

const styles = StyleSheet.create({
    all: {
        flex: 1
    },
    btnChooseTab: {
        height: 50,
        marginLeft: 28,
        marginRight: 38,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    txtChooseTab: {
        color: 'black',
        fontSize: 17,
        fontWeight: '400'
    },
    input: {
        width: 200,
        height: 40,
        backgroundColor: 'rgba(156, 154, 154, 0.3)',
        marginLeft: 28,
        borderRadius: 8,
    },
    container: {
        flexDirection: 'row',
    },
    btn: {
        width: 90,
        height: 40,
        backgroundColor: '#23e558',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        borderRadius: 5
    },
    txtBtn: {
        fontSize: 16,
        color: 'white',
        fontWeight: '500'
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemContainer: {
        width: 100,
        height: 160,
        flex: 1
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 5
    },
    txtGenre: {
        fontSize: 10,
        color: 'red'
    },
    txtTitle: {
        fontSize: 13,
        color: 'purple',
    },
    icon: {
        fontSize: 10,
        color: 'green'
    },
    scrollView: {
        marginTop: 20
    },
    loadingMore: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
});
