import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { TitleTxt } from '../../UiComps'

type Props = {}

const index : FC<Props> = (props) => {
  return (
    <View style={styles.FullContainer} >
      <TitleTxt title="MightyWarners" /> 
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    FullContainer : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    
})