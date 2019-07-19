import React, { Component } from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

class ItemRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { data, styleTxt } = this.props;
        return (
            <View style={styles.rowItem}>
                {
                    data.map(
                        (item, index) => {
                            return (
                                <View style={styles.picks} key={index} >
                                    <Image source={{ uri: item.uri }} style={styles.imgRow} />
                                    <Text style={styleTxt }>{item.genre}</Text>
                                    <Text style={[styleTxt, { textAlign: 'center' }]}>{item.title}</Text>
                                </View>
                            )
                        }
                    )
                }
            </View>
        );
    }
}

export default ItemRow;
const styles = StyleSheet.create({
    rowItem: {
        height: 130,
        flexDirection: 'row',
        width: "100%"
    },
    imgRow: {
        height: 70,
        width: 70,
        borderRadius: 10
    },
    picks: {
        flexDirection: 'column',
        margin: 4,
        height: 110,
        width: "33%",
        alignItems: 'center'
    },
});