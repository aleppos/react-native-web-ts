import * as React from 'react';
import {Header, SearchBar} from 'react-native-elements';
import {TopIcons} from '../icons';
import {View, TouchableHighlight} from 'react-native';
import {GetLocalizedStrings} from './../localization';

const {BackArrowIcon} = TopIcons;

interface Props {
  navigation: any;
}

export default (props: Props) => {
  const {navigation} = props;

  const BackButton = () => {
    return (
      <TouchableHighlight onPress={() => navigation.goBack()}>
        <BackArrowIcon />
      </TouchableHighlight>
    );
  };

  return (
    <View>
      <Header
        leftComponent={<BackButton />}
        rightComponent={
          <SearchBar containerStyle={{width:280}}
          inputContainerStyle={{backgroundColor:'white', borderWidth: 1, borderRadius: 5}}
            placeholder={GetLocalizedStrings().id_search_placeholder}
            onChangeText={() => {}}
            value={''}
          />
        }
        containerStyle={{
          height: 64,
          backgroundColor: '#FFFFFF',
        }}
      />
    </View>
  );
};
