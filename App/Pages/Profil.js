import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Modal, ScrollView, Pressable } from 'react-native'
import { SEHIRLER } from '../Includes/Sehirler'

const Profil = (props) => {
  // Değişken ve Stateler
  const [sehirModalAc, setSehirModalAc] = useState(false)
  // Fonksiyonlar

  // Render
  function sehirlerModalRender() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={sehirModalAc}>
        <View style={styles.modalContainer}>
          <Pressable onPress={() => setSehirModalAc(false)} style={{height: '20%', backgroundColor: 'red'}}></Pressable>
          <ScrollView style={styles.modalView}>
            <View>
              {SEHIRLER.map((item, index) => {
                return (
                  <TouchableOpacity style={styles.sehirBtn} onPress={() => alert(item.plakaKodu)}>
                    <Text>{item.sehir}</Text>
                  </TouchableOpacity>
                )
              }
              )}
            </View>
          </ScrollView>
        </View>
      </Modal>
    )
  }

  return (
    <View>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Text>Profil</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSehirModalAc(true)}>
        <Text>Modal Aç</Text>
      </TouchableOpacity>
      {sehirlerModalRender()}

    </View>
  )
}

export default Profil

const styles = StyleSheet.create({
  sehirBtn: {
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 10,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ace6bb'
  },
  modalContainer: {
    height: '100%',
    marginTop: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    marginTop: "auto",
    height: '75%'
  }

})