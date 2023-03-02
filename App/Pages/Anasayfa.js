import React, { useState } from 'react'
import { Alert } from 'react-native'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

const Anasayfa = (props) => {
  // Değişkenlerimiz
  const [kullaniciAdi, setKullaniciAdi] = useState()
  const [sifre, setSifre] = useState()

  // Fonksiyonlarımız
  function loginKontrol() {
    if (kullaniciAdi == "Wissen" && sifre == "1234") {
      props.navigation.navigate("Profil")
    } else {
      alert("Kullanıcı adı veya şifre yanlış")
    }
  }

  // Render
  function loginRender() {
    return (
      <View style={styles.loginContainer}>
        <View style={styles.inputContainer}>
          <Text>Kullanıcı Adı</Text>
          <TextInput value={kullaniciAdi} onChangeText={(value) => setKullaniciAdi(value)} style={{ height: 30, marginTop: 5, paddingHorizontal: 5 }} />
        </View>
        <View style={[styles.inputContainer, { marginTop: 10 }]}>
          <Text>Şifre</Text>
          <TextInput secureTextEntry={true} value={sifre} onChangeText={(value) => setSifre(value)} style={{ height: 30, marginTop: 5, paddingHorizontal: 5 }} />
        </View>
        <TouchableOpacity style={styles.girisButon} onPress={() => loginKontrol()}>
          <Text style={{ textAlign: 'center', color: '#FFF' }}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {loginRender()}
    </View>
  )
}

export default Anasayfa

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginContainer: {
    padding: 15,
    width: '50%',
    height: '30%',
    borderWidth: 0,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3
  },
  inputContainer: {
    padding: 5
  },
  girisButon: {
    alignSelf: 'center',
    padding: 5,
    width: '50%',
    backgroundColor: 'darkgreen',
    marginTop: 8
  },
})