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
<Text>R$ 70,00</Text>
</View>

<View style= {estilo.espaco}>
<View style=  {estilo.card2}>
<Image style= {estilo.logo} source={carbonara}/>
</View>
<Text style= {estilo.prato}>Macarrão à carbonara</Text>
<Text style={estilo.descricao2}>Macarrão, Bacon, Queijo, Vinho Branco</Text>
<Text>R$ 70,00</Text>
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
             fontSize : 26,
             lineHeight: 42,
             color: "#464646",
             fontFamily: "MontserratBold"
         },

 

         espaco: {
             paddingVertical: 40,
             paddingHorizontal: 17
         },

 

          imagemFazenda: {
              width: 32,
              height: 32
          },

 

          card:{
              flexDirection: "row",
              paddingVertical: 12
          },
          descricao:{
              color: "A3A3A3",
              fontStyle: "italic"
          },

          card2:{
            flexDirection: "row",
            paddingVertical: 2
        },
        descricao2:{
            color: "A3A3A3",
            fontStyle: "italic"
        },

          

          prato: {
            fontSize: 16,
            lineHeight: 26,
            marginLeft: 12,
            fontWeight: "bold"
          }
    })

