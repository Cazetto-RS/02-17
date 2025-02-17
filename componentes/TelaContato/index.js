import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conhecimentos sobre o clube</Text>
      <Text style={styles.subtitle}>Quer saber mais sobre esse grupo histórico?</Text>

      {/* Card para Seja um sócio torcedor */}
      <TouchableOpacity 
        style={styles.contactItem} 
        onPress={() => Linking.openURL('https://www.santosfc.com.br/contato/fale%20conosco')} // Link para o site de sócio torcedor
      >
        <View style={styles.card}>
          <Icon name="phone" size={30} color="#333" style={styles.icon} />
          <View>
            <Text style={styles.contactLabel}>Seja um sócio torcedor</Text>
            <Text style={styles.contactInfo}>https://www.santosfc.com.br/contato/fale%20conosco</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Card para Endereço da Vila Belmiro */}
      <TouchableOpacity 
        style={styles.contactItem} 
        onPress={() => Linking.openURL('https://maps.app.goo.gl/eit2LcBSVTuMzUtj7')} // Link para o Google Maps (endereço da Vila Belmiro)
      >
        <View style={styles.card}>
          <Icon name="map-marker" size={30} color="#333" style={styles.icon} />
          <View>
            <Text style={styles.contactLabel}>Endereço da Vila Belmiro:</Text>
            <Text style={styles.contactInfo}>Rua Princesa Isabel, S/N, Vila Belmiro</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Card para WhatsApp */}
      <TouchableOpacity 
        style={styles.contactItem} 
        onPress={() => Linking.openURL('tel:+551332574001')} // Link para discar o número do WhatsApp
      >
        <View style={styles.card}>
          <Icon name="envelope" size={30} color="#333" style={styles.icon} />
          <View>
            <Text style={styles.contactLabel}>WhatsApp:</Text>
            <Text style={styles.contactInfo}>(13) 3257-4001</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Card para Instagram */}
      <TouchableOpacity 
        style={styles.contactItem} 
        onPress={() => Linking.openURL('https://www.instagram.com/santosfc/')} // Link para o Instagram do Santos
      >
        <View style={styles.card}>
          <Icon name="instagram" size={30} color="#333" style={styles.icon} />
          <View>
            <Text style={styles.contactLabel}>Instagram:</Text>
            <Text style={styles.contactInfo}>@SANTOS FC</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  contactItem: {
    marginBottom: 15,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',  // Cor de fundo do card
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    marginRight: 10,
  },
  contactLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactInfo: {
    fontSize: 14,
    color: '#555',
  },
});

export default Contact;
