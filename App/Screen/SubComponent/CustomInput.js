import React, {useState} from 'react';
import {TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const CustomInput = ({placeHolder, textValue}) => {
  const [value, setValue] = useState('');
  return (
    <View style={styles.textInputContainer}>
      <TextInput
        style={styles.textInput}
        multiline={true}
        placeholder={placeHolder}
        placeholderTextColor="#abbabb"
        value={value}
        onChangeText={(value) => setValue(value)}
        autoCorrect={false}
      />
      <TouchableOpacity
        onPress={() => {
          textValue(value);
          setValue('');
        }}>
        <Icon name="plus" size={30} color="blue" style={{marginLeft: 15}} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    borderColor: 'black',
    borderBottomWidth: 1,
    paddingRight: 10,
    paddingBottom: 10,
  },
  textInput: {
    flex: 1,
    height: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 20,
    minHeight: '3%',
  },
});
export default CustomInput;
