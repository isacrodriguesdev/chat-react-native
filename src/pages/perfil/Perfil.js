import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, Text, ScrollView, ImageBackground } from 'react-native';
// # services
// # styles
import styles from './styles';
// # utils
// # components
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
// # actions

export default (props) => {

  const perfil = {
    id: 0,
    name: "Aline Souza",
    photoUrl: "https://www.wefashiontrends.com/wp-content/uploads/2019/03/pose-para-fotos-de-perfil.jpg",
    phoneNumber: "+55 (62) 98591-7673",
    // tera lista de bloqueados em algum lugar aqui ou fora daqui
    blockedUsers: [{ id: 0 }]

  };

  const [photo, setPhoto] = useState({});

  const getImage = async () => {

    Image.getSize(perfil.photoUrl, (width, height) => {
      setPhoto({ height, width });
    })
  };

  useEffect(() => {

    getImage();

  }, []);

  return (

    <ScrollView style={styles.container}>

      <ImageBackground source={{ uri: perfil.photoUrl }} style={{ width: "100%" }} resizeMode="cover">
        <View style={styles.topContainer}>

          <TouchableOpacity style={styles.imageData}>
            <Image resizeMode="cover" source={{ uri: perfil.photoUrl }} style={styles.photo} />
          </TouchableOpacity>

          <View style={styles.nameContainer}>
            <Text style={styles.name}>Aline Souza</Text>
          </View>
        </View>
      </ImageBackground>


      <View style={styles.dataContainer}>
        <View style={styles.descriptionData}>
          <MaterialIcon name="description" style={styles.icon} />
          <Text style={styles.descriptionText}>
            Facebook é uma mídia social e rede social virtual lançada em 4 de fevereiro de 2004, operado e de propriedade privada da Facebook Inc.
          </Text>
        </View>
      </View>

      <View style={styles.dataContainer}>
        <View style={styles.phoneNumberData}>
          <MaterialIcon name="smartphone" style={styles.icon} />
          <Text style={styles.phoneNumberText}>
            +55 (62) 98591-7643
            </Text>
        </View>
      </View>

    </ScrollView>
  );
};