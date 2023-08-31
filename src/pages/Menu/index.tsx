import React from "react";
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native';

import logo from '../../../assets/logo.png'
import macarronada from '../../../assets/Macarronada.jpg'
import carbonara from '../../../assets/carbonara.jpg'

const width = Dimensions.get('screen').width;

export default function Menu(){
    return <>
    <Image source={logo} style={estilo.logo} />
    <Text style= {estilo.titulo}>Menú</Text>
<View style= {estilo.espaco}>
<Text style= {estilo.titulomenu}>Opções Menú</Text>
<View style=  {estilo.card}>
<Image style= {estilo.logo} source={macarronada}/>
</View>
<Text style= {estilo.prato}>Macarronada Italiana Típica</Text>
<Text style={estilo.descricao}>Macarrão, Tomate, Carne, Salsa</Text>
<Text style={estilo.preco}>R$ 70,00</Text>
</View>

</>



}

 

 

const estilo = StyleSheet.create({
      logo: {
          width: "100%",
          height: 545 / 900 * width
      },
      titulo: {
          fontSize: 24,
          fontWeight: "bold",
          lineHeight: 26,
          width: "100%",
          textAlign: "center",
          color: "white",
          position: "absolute",
          padding: 16

 

      },
         titulomenu:  {
             fontSize : 30,
             lineHeight: 55,
             textAlign: "center",
             color: "#B20602",
             fontFamily: "MontserratBold"
         },

 

         espaco: {
             paddingVertical: 50,
             paddingHorizontal: 17,
             backgroundColor: '#7A714A'
         },

 

          card:{
              flexDirection: "column",
              paddingVertical: 12
          },
          descricao:{
            fontSize: 15,
            lineHeight: 30,
            marginLeft: 12,
              color: "#BFBFBF",
              fontStyle: "italic"
          },
          

          prato: {
            fontSize: 26,
            lineHeight: 35,
            marginLeft: 10,
            fontWeight: "bold",
            color: "#B20602"
          },

          preco:{
            fontSize: 17,
            lineHeight: 30,
            marginLeft: 12,
            fontWeight: "bold",
            color: "#00B23A" 
          }
    })

