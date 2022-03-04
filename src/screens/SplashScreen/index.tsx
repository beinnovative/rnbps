/**
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { FC } from 'react';
import type { StackParamList } from "../../routes.types";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState, useEffect } from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image
} from 'react-native';

import {
    Colors,
    setI18nConfig
} from "../../config";

import { connect, useDispatch, useStore } from 'react-redux';
import { SampleUtility } from '../../Comps/UtilityComps';

type Props = NativeStackScreenProps<StackParamList, 'SplashScreen'>;
const SplashScreen: FC<Props> = ({navigation}) => {
    const delay = 3;
    // const navigation = useNavigation();
    const store = useStore();
   
    return (
        <SafeAreaView style={{flex:1}}>
           <SampleUtility/>
        </SafeAreaView>
    );
};

const local_styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: 50
    },
    box: {
        height: 336,
        width: "100%",
        backgroundColor: "#fff",
        opacity: 0.4,
        marginTop: 40,
    },
    image: {
        width: "100%",
        resizeMode: "cover",
        height: "100%"
    },
    logoStyle: {
        alignContent: "center",
        alignItems: "center",
        position: "absolute",
        alignSelf: "center",
        justifyContent: "center",
        top: 0,
        bottom: 0,
        width: "100%",
    },
    zippeeStyle: {
        width: 100,
        height: 130
    },
    macStyle: {
        marginTop: 15,
        width: 129,
        height: 35.5
    }
});

export default SplashScreen;
