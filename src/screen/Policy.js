import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

class Policy extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.headerTab}>
                    <Text style={styles.headerTxt}>
                        Notices
                    </Text>
                </View>
                <View style={styles.noticeTab}>
                    <Text style={styles.noticeTxt}>
                        Changes to our Terms of Use and Privacy Policy
                    </Text>
                </View>
                <View style={{ backgroundColor: '#BCE0DE' }}>
                    <Text style={{ justifyContent: 'center', marginTop: 15, marginRight: 15, marginLeft:15 }} numberOfLines={2}>
                        We are updating our Term of Use and Privacy Policy on June 1, 2019.
                        Here
                    </Text>
                    <View
                        style={styles.divider}
                    />
                    <Text style={{marginLeft: 15, marginRight: 15}}> 
                        In the 1970s, software production was viewed as consisting of two distinct activities
            performed sequentially: development followed by maintenance. Starting from scratch, the
            software product was developed, and then installed on the client’s computer. Any change
            to the software after installation on the client’s computer and acceptance by the client,
            whether to fi x a residual fault or extend the functionality, constituted classical maintenance
            [IEEE 610.12, 1990]. Hence, the way that software was developed classically can be described as the development-then-maintenance model.
            This is a temporal definition; that is, an activity is classified as development or maintenance depending on when it is performed. Suppose that a fault in the software is detected
            and corrected a day after the software has been installed. By defi nition, this constitutes
            classical maintenance. But if the identical fault is detected and corrected the day before
            the software is installed, in terms of the definition, this constitutes classical development.
            Now suppose that a software product has just been installed but the client wants to increase
            the functionality of the software product. Classically, that would be described as perfective maintenance. However, if the client wants the same change to be made just before the
            software product is installed, this would be classical development. Again, there is no difference whatsoever between the nature of the two activities, but classically one is considered
            development, the other perfective maintenance.
                    </Text>
                    <View
                        style={styles.divider}
                    />
                    <Text style={{marginLeft:15, marginRight:15, marginBottom: 15}}>
                        We make some minor changes that do not affect
                    </Text>
                </View>
            </ScrollView>
        );
    }
}

export default Policy;
const styles = StyleSheet.create({
    headerTab: {
        backgroundColor: '#1E0623',
        alignItems: 'center',
        height: 40,
        justifyContent: 'center'
    },
    headerTxt: {
        color: 'white',
        fontWeight: '500',
        fontSize: 20
    },
    noticeTab: {
        justifyContent: 'center',
        margin: 15
    },
    noticeTxt: {
        color: 'black',
        fontWeight: '400',
        fontSize: 15
    },
    divider: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginTop:15,
        marginBottom:15,
        marginLeft:45,
        marginRight:45
    }
});