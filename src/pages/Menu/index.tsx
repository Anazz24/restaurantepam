import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native';

import macarronada from '../../../assets/Macarronada.jpg'



export default function Menu(){
    return <>
    <Image source={macarronada} style={estilo.macarronada} />
}

const estilo = StyleSheet.create({
    macarronada: {
        width: "100%"
        height: 578 / 768 * width
    }
})