import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import DataRanking from '../component/DataRanking';
import Header from '../component/Header';
import { dataAnime, animeType, dataManga, mangaType } from '../const';
import { getTypeAnime, getTypeManga } from '../services/GetAPI';

class Ranking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anime: true,
    };
  }

  firstOnPress = () => {
    this.setState({ anime: true });
    this.Header.setState({ colorFirstTxt: "black", colorSecondTxt: "gray" });
  }

  secondOnPress = () => {
    this.setState({ anime: false });
    this.Header.setState({ colorFirstTxt: "gray", colorSecondTxt: "black" })
  }

  gotoDetailAnime = (item) => {
    this.props.navigation.navigate("DetailAnime", { item: item });
  }

  gotoDetailManga = (item) => {
    console.log(item)
    this.props.navigation.navigate("DetailManga", { item: item });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          ref={ref => this.Header = ref}
          firstTxt={'Anime'}
          secondTxt={'Manga'}
          firstOnPress={this.firstOnPress}
          secondOnPress={this.secondOnPress}
        />
        <DataRanking
          tabType={(this.state.anime) ? dataAnime : dataManga}
          type={(this.state.anime) ? animeType : mangaType}
          getType={(this.state.anime) ? getTypeAnime : getTypeManga}
          onPress={(this.state.anime) ? this.gotoDetailAnime : this.gotoDetailManga}
        />
      </View>
    );
  }
}

export default Ranking;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
