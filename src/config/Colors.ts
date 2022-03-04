/**
 *
 * @flow strict-local
 * @format
 */

 import { useColorScheme } from 'react-native';

const color_codes = {
    bluish_cyan: '#3FA7D6',
    white: '#fff',
    smoke: '#F3F3F3',
    light_gray: '#DAE1E7',
    charcoal_gray: '#444444',
    oil_black: '#222',
    black: '#000',
    opal_red: "#DA1B2B",
    emerald_green: "#59CD90",
    apricot_yellow: "#FAC05E",
    syre_gray:"#6b6b6b",
    Dark_silver:"#6f6f6f",
    faint_silver:"#707070",
    gray_black:"#474747",
    black_1:"#4d4d4d",
    txt_black:"#4a4a4a",
    txt_black1:"#2e2e2e"
};

export default {
    ...color_codes,
    primary: color_codes.opal_red,
    success: color_codes.emerald_green,
    warning: color_codes.apricot_yellow,
    error: color_codes.opal_red,
    textSelected: color_codes.black,
    
    wall: (useColorScheme() === "dark") ? color_codes.oil_black : color_codes.white
};