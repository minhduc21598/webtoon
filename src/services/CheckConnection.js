import NetInfo from "@react-native-community/netinfo";

const CheckConnection = () => {
    return NetInfo.fetch().then(state => {
        return state.isConnected;
    });
}

export default CheckConnection;
