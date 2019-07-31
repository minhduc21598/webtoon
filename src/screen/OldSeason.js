import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import ViewInScrollableTabView from '../component/ViewInScrollableTabView'; 
import { recentDataScreenMy } from '../component/Data';
import YearPicker from "react-year-picker";

class OldSeason extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: ""
        };
    }

    dateChange = (date) => {
        this.setState({ date: date })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <YearPicker onChange={this.handleChange} />;
                <ScrollableTabView
                    initialPage={0}
                    renderTabBar={() => <ScrollableTabBar />}
                    tabBarInactiveTextColor={'gray'}
                    tabBarActiveTextColor={'black'}
                    tabBarUnderlineStyle={{ height: 2 }}
                    style={{ flex: 1 }}
                >
                    {
                        seasons.map(
                            (item, index) => {
                                return (
                                    <ViewInScrollableTabView
                                        tabLabel={item}
                                        styleTxtCounter={styles.txtCounter}
                                        styleFlatGrid={styles.itemContainer}
                                        data={recentDataScreenMy}
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

export default OldSeason;
const styles = StyleSheet.create({
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
      }
});