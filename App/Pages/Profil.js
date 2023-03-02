import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Modal, ScrollView, Pressable, TextInput } from 'react-native'
import { SEHIRLER } from '../Includes/Sehirler'
import { ISLEM } from '../Includes/ISLEM'

const Profil = (props) => {
  // Değişken ve Stateler
  const [sehirModalAc, setSehirModalAc] = useState(false)
  const [ilceModalAc, setIlceModalAc] = useState(false)
  const [acikAdres, setAcikAdres] = useState()
  const [secilenSehir, setSecilenSehir] = useState()
  const [ilceListesi, setIlceListesi] = useState([])
  const [secilenIlce, setSecilenIlce] = useState()




  // Fonksiyonlar
  async function ilceGetir() {
    let response = await ISLEM("GET", secilenSehir)
    console.log(response)
    const uniqueTags = [];
    (response.postakodu).map((item) => {
      var findItem = uniqueTags.find((x) => x.ilce === item.ilce);
      if (!findItem) uniqueTags.push(item);
    });
    setIlceListesi(uniqueTags)
  }

  useEffect(() => {
    ilceGetir()
  }, [secilenSehir])

  useEffect(() => {
    setIlceModalAc(true)
  }, [ilceListesi])





  // Render
  function sehirVeIlceSecRender() {
    return (
      <View style={styles.adresContainer}>
        <Text>Adres Bilgileri</Text>
        <View style={styles.satirContainer}>
          <Text style={{ fontWeight: 600, textDecoration: 'underline', }}>Şehir Seç</Text>
          <TouchableOpacity style={styles.secimBtn} onPress={() => setSehirModalAc(true)}>
            <Text style={{ textAlign: 'center' }}>ŞEHİRLER</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.satirContainer}>
          <Text style={{ fontWeight: 600, textDecoration: 'underline', }}>İlçe Seç</Text>
          <TouchableOpacity style={styles.secimBtn}>
            <Text style={{ textAlign: 'center' }}>İLÇELER</Text>
          </TouchableOpacity>
        </View >
        <View style={{ marginTop: 5, borderRadius: 5, backgroundColor: '#FFF', padding: 5, height: '40%' }}>
          <Text style={{ fontWeight: 600, textDecoration: 'underline', marginBottom: 5 }}>Açık Adres</Text>
          <TextInput style={{ height: '80%', padding: 5, textAlignVertical: 'top' }} multiline={true} placeholder='Açık adres giriniz.' />
        </View>
        <TouchableOpacity style={styles.kaydetBtn} onPress={() => console.log("k2")}>
          <Text style={{ textAlign: 'center', color: '#FFF' }}>Kaydet</Text>
        </TouchableOpacity>
      </View>
    )
  }

  function sehirlerModalRender() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={sehirModalAc}>
        <View style={styles.modalContainer}>
          <Pressable onPress={() => setSehirModalAc(false)} style={{ flex: 1, width: '100%' }}></Pressable>
          <ScrollView showsVerticalScrollIndicator={false} style={styles.modalView}>
            <View>
              {SEHIRLER.map((item, index) => {
                return (
                  <TouchableOpacity style={styles.sehirBtn} onPress={() => { setSecilenSehir(item.plakaKodu); setSehirModalAc(false); console.log(item.plakaKodu) }}>
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

  function ilceModalRender() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={ilceModalAc}>
        <View style={styles.modalContainer}>
          <Pressable onPress={() => setIlceModalAc(false)} style={{ flex: 1, width: '100%' }}></Pressable>
          <ScrollView showsVerticalScrollIndicator={false} style={styles.modalView}>
            <View>
              {ilceListesi.map((item, index) => {
                return (
                  <TouchableOpacity style={styles.sehirBtn} onPress={() => { setSecilenIlce(item.pk); setIlceModalAc(false) }}>
                    <Text>{item.ilce}</Text>
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
    <View style={styles.container}>
      {sehirVeIlceSecRender()}
      {sehirlerModalRender()}
      {ilceModalRender()}
    </View>
  )
}

export default Profil

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center'
  },
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
    paddingHorizontal: 10,
    marginTop: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    marginTop: "auto",
    height: '50%',
    width: '100%'
  },
  adresContainer: {
    backgroundColor: '#a8a8a8',
    width: '50%',
    height: '50%',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10
  },
  satirContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    padding: 5,
    borderRadius: 5,
    marginTop: 5
  },
  secimBtn: {
    padding: 5,
    borderWidth: 0.5,
    borderRadius: 10,
    width: '65%',
    backgroundColor: '#FFF'
  },
  kaydetBtn: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#f17a1a',
    marginTop: 20,
    width: '50%',
    alignSelf: 'center'
  }

})