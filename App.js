import React, { useState, useRef } from 'react';
import {StatusBar, Image, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, View, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Carousel from 'react-native-snap-carousel';

//Pegar altura e comprimento da tela
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');


export default function filmesApp() {
  const [lista, setLista] = useState ([
    {
      text: "Após o assassinato de sua família, Frank Castle está traumatizado e sendo caçado. No submundo do crime, ele se tornará aquele conhecido como O Justiceiro",
      release: 2018,
      img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/background.jpg'
    },
    {
        text: "Terceiro episódio das histórias dos policiais Burnett (Martin Lawrence) e Lowrey (Will Smith), que devem encontrar e prender os mais perigosos traficantes de drogas da cidade.",
        release: 2020,
        img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/badboy.jpg'
    },
    {
        text: "Em Viúva Negra, após seu nascimento, Natasha Romanoff (Scarlett Johansson) é dada à KGB, que a prepara para se tornar sua agente definitiva.",
        release: 2020,
        img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/blackwidow.jpg'
    },
    {
        text: "Em Top Gun: Maverick, depois de mais de 30 anos de serviço como um dos principais aviadores da Marinha, o piloto à moda antiga Maverick (Tom Cruise) enfrenta drones e prova que o fator humano ainda é fundamental no mundo contemporâneo das guerras tecnológicas.",
        release: 2020,
        img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/topgun.jpeg'
    },
    {
        text: "Bloodshot é um ex-soldado com poderes especiais: o de regeneração e a capacidade de se metamorfosear. ",
        release: 2020,
        img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/blood.jpg'
    },
    {
        text: "Um caixa de banco preso a uma entediante rotina tem sua vida virada de cabeça para baixo quando ele descobre que é personagem em um brutalmente realista vídeo game de mundo aberto.",
        release: 2020,
        img: 'https://sujeitoprogramador.com/wp-content/uploads/2020/05/freeguy.jpg'
    },
  ]);

  const carouselRef =  useRef(null);

  const [background, setBackground] = useState (lista[0].img);
  const [activeIndex, setActiveIndex ] = useState (0);

  const _renderItem = ({item, index}) => {
    return(
     
          <View>
            <TouchableOpacity>
              <Image
              source={{ uri: item.img}}
              style={styles.carouselIMG}
              />

              <Icon name='play-circle-outline'  size={35} style={styles.carouselIcon}/>

            </TouchableOpacity>
          </View>
          
    );
  };

 return (

  <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.txtHeader}>Flix</Text>

        <StatusBar barStyle="light-content" />
     <View style={{ height: screenHeight}}>
      <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}> 
        <ImageBackground
        source={{ uri:background }}
        style={styles.imgBG}
        blurRadius={10}
        >
          <View style={styles.viewSearch}>
            <TextInput style={styles.input} placeholder="Procurando algo?"/>

            <TouchableOpacity style={styles.icon}>
              <Icon name="search" color="#A9A9A9" size={25}/>
            </TouchableOpacity>
          </View>

          <Text style={styles.txtAcabouChegar}>Acabou de chegar</Text>

          <View style={styles.slideView}>
            <Carousel
            style={styles.carousel}
            ref={carouselRef} //Ter a referÊncia para saber em qual slide atual está
            data={lista}
            renderItem={_renderItem}
            sliderWidth={screenWidth}
            itemWidth={200}
            inactiveSlideOpacity={0.3}
            onSnapToItem={(index) =>{
              setBackground(lista[index].img);
              setActiveIndex(index);
            }}
            />
          </View>

        <ImageBackground
        source={{ uri:background }}
        style={styles.imgBG}
        blurRadius={100}
        borderRadius={20}
        >

            <View>
              <Text style={styles.txtInfo}>{lista[activeIndex].text}</Text>
            </View>

        </ImageBackground>
        </ImageBackground>
        
      </View>
     </View>
   </View>

   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    width: 375, height: 105,
    backgroundColor: 'black'	
  },

  txtHeader: {
    fontSize: 28, fontWeight: 'bold', fontStyle: 'italic',
    padding: 50, marginLeft: 115,
    color: '#FF0000'
  },

  imgBG: {
    marginBottom: 50,
    flex: 1, 
    width: null, height: null, opacity: 2, justifyContent: "flex-start", 
  },

  viewSearch:{
    marginTop: 25,
    width: 50, height: 50,
    backgroundColor: 'white',
    elevation: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '85%',
    flexDirection: 'row',
    alignSelf: 'center'
  },

  input:{
    width: '90%',
    padding: 13,
    paddingLeft: 20,
    fontSize: 20,
  },

  icon:{
    position: 'absolute',
    right: 20,
    top: 13,
  },

  txtAcabouChegar: {
    color: 'white', 
    fontSize: 24, fontWeight: "bold", 
    marginLeft: 20, marginVertical: 20
  },

  slideView:{
    width: '100%',
    height: 440,
    justifyContent: 'center',
    alignItems: 'center'
  },

  carousel:{
    flex:1,
    overflow: 'visible'
  },
  carouselIMG:{
    alignSelf: 'center',
    width: 200,
    height: 340,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },

  carouselIcon:{
    color: 'white',
    position:'absolute',
    top: 26,
    right: 13,
  },
  
  txtInfo: {
    textAlign: "center", padding: 15,
    color: 'white', 
    fontSize: 18, fontStyle: "italic"
  },

});