import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';




export default function App() {

  const [PRIMEIROPEDIDO, setPRIMEIROPEDIDO] = useState('');
  const [texto, setTexto] = useState('PRIMEIRO PEDIDO');


  const clicarBotao = () => {
    setPRIMEIROPEDIDO(!PRIMEIROPEDIDO);

    if (PRIMEIROPEDIDO == false) {
      setTexto('PRIMEIRO PEDIDO')
    } else if (PRIMEIROPEDIDO == true) {
      setTexto('CUPOM10%')
    }
  }

  const [nome, setNome] = useState('');

  const dados = [
    { key: 'Cartão de crédito' },
    { key: 'Cartão de débito' },
    { key: 'PIX' },
    { key: 'Transferência Bancária' },
    { key: 'Boleto' },

  ]

  return (

    <ScrollView style={StyleSheet.container}>


      <View style={styles.fonts}>
        <MaterialCommunityIcons name="candy" size={80} color="#FF1493" />
        <View style={styles.container1}>
          <Text style={styles.container3}>       DONA MOREIRA</Text>
          <Text>             Bolos, doces e sobremesas</Text>
          <Text>              @DONAMOREIRA</Text>
        </View>
      </View>

      <View style={styles.containerr}>
        <View style={styles.text}>
          <Text>Olá, seja bem vindo à nossa doceria!!</Text>
          <Text>Temos vários itens em nosso cardápio esperando pelo seu pedido!</Text>
          <Text>Faça o seu primeiro pedido e ganhe um cupom de 10% de desconto!</Text>

        </View>
        <View style={styles.icons}>
          <MaterialIcons name="restaurant-menu" size={45} color="black" />
        </View>
      </View>
      {

        PRIMEIROPEDIDO ?
          <Text>
            {nome}
          </Text>
          :
          <Text>

          </Text>
      }
      <View style={styles.buttoncontainer}>

        <Button
          title={texto}
          onPress={clicarBotao}

        />

      </View>

      <View style={styles.containerr}>
        <View style={styles.text}>
          <Text>CARDÁPIO ONLINE</Text>
          <Text></Text>
          <Text>Escolha os itens desejados e digite logo abaixo o seu pedido: </Text>
          <Text>Não esqueça de informar se o seu pedido será para entrega ou retirada no local!</Text>
          <Text>Se a escolha for entrega, por favor, digite o endereço no box abaixo: </Text>
        </View>



        <View style={styles.icons}>
          <MaterialIcons name="menu" size={42} color="black" />
        </View>
      </View>
    
      <View style={styles.container4}>
        <TextInput
          placeholder='Digite seu pedido: '
          onChangeText={setNome}
          style={styles.input}
          underlineColorAndroid='transparent' />
      </View>

      <Text></Text>

      <View style={styles.container5}>
        <TextInput
          placeholder='Informe seu endereço de entrega: '
          onChangeText={setNome}
          style={styles.input}
          underlineColorAndroid='transparent' />
      </View>

      <View style={styles.containerr}>
        <View style={styles.text}>
          <Text>Escolha sua forma de pagamento: </Text>
          <Text></Text>

        </View>


        <View style={styles.icons}>
          <FontAwesome name="credit-card-alt" size={35} color="black" />
        </View>
      </View>

      <Text></Text>
      <Text></Text>

      <FlatList
        data={dados}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Text style={styles.textoItem}>{item.key}</Text>
          </TouchableOpacity>
        )}
      />




    </ScrollView>
  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FF69B4',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -10,
    flexDirection: 'row',



  },

  container2: {
    flex: 1,
    backgroundColor: '#FF69B4',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -10,
    flexDirection: 'row',



  },

  container1: {
    fontSize: 12,
    margin: 0,
    flexDirection: 'colunm',
    padding: 0,

  },

  containerr: {
    backgroundColor: 'pink',
    padding: -1,
    margin: 15,
    marginTop: 20,
    flexDirection: 'row',
    borderRadius: 10,
  },

  container3: {
    fontWeight: 'bold',
    fontSize: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDA0DD',
    flexDirection: 'row',
    padding: 0,
    margin: 0,
  },

  container4: {
    flexDirection: 'row',
  },

  container5: {
    flexDirection: 'row',
  },

  text: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
    margin: 5,
    fontWeight: 'bold',
    flexDirection: 'colunm',

  },

  icons: {
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
  },


  fonts: {
    backgroundColor: '#DDA0DD',
    fontSize: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 70,
    padding: 30,
    borderRadius: 10,
    margin: 10,
  },

  buttoncontainer: {
    marginTop: -20,
  },

  input: {
    height: 50,
    flex: 1,
    backgroundColor: '#DCDCDC',
    paddingLeft: 40,
    marginHorizontal: 20,
    borderRadius: 8,
    fontSize: 18,
    borderColor: '#808080',
    borderWidth: 2,
  },

  textoItem: {
    fontSize: 20,
    color: '#DDA0DD',
    padding: 25,
    borderWidth: 2,
    borderColor: '#DDA0DD',
    alignItems: 'center',

  },

});