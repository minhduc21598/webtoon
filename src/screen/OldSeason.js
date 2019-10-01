import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ViewInScrollableTabView from '../component/ViewInScrollableTabView';
import { getAnimeByYear } from '../services/GetAPI';
import Icon from 'react-native-vector-icons/Ionicons';
import { season, seasons, dataYear } from '../const';
import { PickerView, PickerViewHide } from '../component/PickerView';
import { connect } from 'react-redux';
import { createUser, deleteUser } from '../redux/actions/UserAction';

class OldSeason extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "2019",
            showPicker: false,
            isLoading: true,
            loadingMore: false,
            refreshing: false,
        };
        this.season = season[0];
        this.index = 0;
    }

    componentDidMount = () => {
        this.getData();
    }

    dateChange = (date) => {
        this.setState({ date: date })
        this.getData();
    }

    openYear = () => {
        if (!this.state.showPicker) {
            this.setState({ showPicker: true });
            PickerView(dataYear, 2019, this.dateChange, 'Choose a year');
        } else {
            this.setState({ showPicker: false });
            PickerViewHide();
        }
    }

    onChangeTab = (item) => {
        this.index = item.i;
        this.season = season[this.index];
        this.getData();
    }

    getData = () => {
        this.props.delete();
        getAnimeByYear(this.state.date, this.season)
            .then(
                response => response.json()
            ).then(
                res => {
                    this.props.create(res.anime);
                    this.setState({ isLoading: false })
                }
            ).catch((error) => {
                console.error(error);
                return error;
            });
    }

    onRefresh = () => {
        this.setState({ refreshing: true });
        this.getData();
        this.setState({ refreshing: false });
    }

    renderLoading = () => {
        return (
            <View style={styles.loadingAtStart}>
                <ActivityIndicator size="large" color='black' />
            </View>
        )
    }

    render() {
        let { onPress } = this.props;
        return (
            (this.state.isLoading) ? this.renderLoading() :
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={this.openYear}
                        style={styles.btnChooseTab}
                        activeOpacity={1}
                    >
                        <Text style={styles.txtChooseTab}>Choose a year</Text>
                        <Text style={styles.txtChooseTab}>
                            {this.state.date} {'  '}
                            <Icon name='ios-arrow-down' color='black' size={20} />
                        </Text>
                    </TouchableOpacity>
                    <ScrollableTabView
                        initialPage={0}
                        tabBarInactiveTextColor={'gray'}
                        tabBarActiveTextColor={'black'}
                        tabBarUnderlineStyle={styles.scrollTab}
                        style={styles.scrollTabStyle}
                        onChangeTab={this.onChangeTab}
                    >
                        {
                            seasons.map(
                                (item, index) => {
                                    return (
                                        <ViewInScrollableTabView
                                            tabLabel={item}
                                            refreshing={this.state.refreshing}
                                            onRefresh={this.onRefresh}
                                            onPress={(item) => onPress(item)}
                                            key={index}
                                        />
                                    )
                                }
                            )
                        }
                    </ScrollableTabView>
                </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        create: (data) => dispatch(createUser(data)),
        delete: () => dispatch(deleteUser())
    }
}

export default connect(null, mapDispatchToProps)(OldSeason);

const styles = StyleSheet.create({
    loadingAtStart: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
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
    headerContainer: {
        width: '100%',
        height: 60,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txtHeader: {
        fontSize: 23,
        fontWeight: '500',
        color: 'black',
        marginLeft: 25
    },
    itemContainer: {
        borderRadius: 5,
        width: 100,
        height: 160,
    },
    txtCounter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 20,
        marginTop: 10,
        marginBottom: 10
    },
    scrollTab: {
        height: 2
    },
    scrollTabStyle: {
        flex: 1
    },
    loadingMore: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
});