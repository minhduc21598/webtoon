import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import { dataOriginal } from '../component/Data';
import ViewInScrollableTabView from '../component/ViewInScrollableTabView';

const tabName = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN', 'COMPLETED'];

class Daily extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ScrollableTabView
                initialPage={0}
                renderTabBar={() => <ScrollableTabBar style={{ borderTopWidth: 0.5, borderTopColor: '#d0cdcd' }} />}
                tabBarInactiveTextColor={'gray'}
                tabBarActiveTextColor={'black'}
                tabBarUnderlineStyle={{ height: 2 }}
            >
                {
                    tabName.map(
                        (item, index) => {
                            return (
                                <ViewInScrollableTabView
                                    tabLabel={item}
                                    styleTxtCounter={styles.txtCounter}
                                    styleFlatGrid={styles.itemContainer}
                                    data={dataOriginal}
                                    key={index}
                                />
                            )
                        }
                    )
                }
            </ScrollableTabView>
        );
    }
}

export default Daily;

const styles = StyleSheet.create({
    itemContainer: {
        borderRadius: 5,
        width: 100,
        height: 160,
    },
    txtCounter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 12,
        height: 20
    }
});
