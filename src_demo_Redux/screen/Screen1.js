import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';
import { createUser, deleteUser } from '../actions/UserAction';

class Screen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log("xxxx", this.props.user)
    const {name, address, birthday} = this.props.user;
    const data = {
        name: 'Vân',
        address: 'Thanh Hóa',
        birthday: '08/03/1997'
    }
    return (
      <View style = {styles.container}>
        {
            this.props.user.map((item, index) => {
                return(
                    <React.Fragment key = {index}>
                        <Text> {item.name} </Text>
                        <Text> {item.address} </Text>
                        <Text> {item.birthday} </Text>
                    </React.Fragment>
                )
            })
        }
        <Button
            title = 'create'
            onPress = {() => this.props.create(data)}
        />
        <Button
            title = 'delete'
            onPress = {() => this.props.delete(data)}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
    console.log("state", state);
    return{
        user: state.UserReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log("dispatch", dispatch);
    return{
        create: (data) => dispatch(createUser(data)),
        delete: (data) => dispatch(deleteUser(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen1);

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
});
