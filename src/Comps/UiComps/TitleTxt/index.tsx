import { StyleSheet, Text, View } from 'react-native'
import React,{FC} from 'react'

type Props = {
    title ? : string,
    
}

const index : FC<Props> = ({title}) => {
  return (
   
      <Text style={styles.titletxt} >{title}</Text>
   
  )
}

export default index

const styles = StyleSheet.create({
    titletxt: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    }

})