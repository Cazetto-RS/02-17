import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';

const vinho1 = require('../../assets/ricardojpg-removebg-preview.png');
const vinho2 = require('../../assets/baixados-removebg-preview.png');
const vinho3 = require('../../assets/OIP-removebg-preview.png');
const vinho4 = require('../../assets/gabi.png');
const vinho5 = require('../../assets/rodrygoa-removebg-preview.png');

const App = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (card) => {
    setHoveredCard(card);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  // Função para abrir o Instagram
  const openInstagram = (username) => {
    const url = `https://www.instagram.com/${username}/`;
    Linking.openURL(url);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Um pouco dos grandes craques desse clube:</Text>
          <Text style={styles.subtitle}>
            O Santos Futebol Clube é um dos maiores times do Brasil, com isso teve vários jogadores em sua história.
          </Text>

          {/* Card de Ricardo Oliveira */}
          <TouchableOpacity
            style={[styles.card, hoveredCard === 'ricardo' && styles.cardHovered]}
            onPress={() => openInstagram('ricardooliveira')}
            onMouseEnter={() => handleMouseEnter('ricardo')}
            onMouseLeave={handleMouseLeave}
          >
            <Image source={vinho1} style={styles.cardImage} resizeMode='contain' />
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Ricardo Oliveira</Text>
              <Text style={styles.cardDescription}>
                Ricardo Oliveira teve uma passagem marcante pelo Santos, onde foi artilheiro e ajudou a equipe a conquistar títulos importantes, incluindo o Campeonato Paulista de 2015.
              </Text>
            </View>
          </TouchableOpacity>

          {/* Card de Neymar */}
          <TouchableOpacity
            style={[styles.card, hoveredCard === 'neymar' && styles.cardHovered]}
            onPress={() => openInstagram('neymarjr')}
            onMouseEnter={() => handleMouseEnter('neymar')}
            onMouseLeave={handleMouseLeave}
          >
            <Image source={vinho2} style={styles.cardImage} resizeMode='contain' />
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Neymar</Text>
              <Text style={styles.cardDescription}>
                Neymar brilhou no Santos, conquistando a Copa do Brasil e a Libertadores de 2011, antes de se transferir para o Barcelona, consolidando-se como um dos maiores talentos do futebol mundial.
              </Text>
            </View>
          </TouchableOpacity>

          {/* Card de Pelé */}
          <TouchableOpacity
            style={[styles.card, hoveredCard === 'pele' && styles.cardHovered]}
            onPress={() => openInstagram('pele')}
            onMouseEnter={() => handleMouseEnter('pele')}
            onMouseLeave={handleMouseLeave}
          >
            <Image source={vinho3} style={styles.cardImage} resizeMode='contain' />
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Pelé</Text>
              <Text style={styles.cardDescription}>
                Pelé, ícone absoluto do Santos, levou o clube a conquistas históricas, incluindo a Copa Libertadores e o Mundial Interclubes, tornando-se um dos maiores jogadores de todos os tempos.
              </Text>
            </View>
          </TouchableOpacity>

          {/* Card de Gabriel Barbosa */}
          <TouchableOpacity
            style={[styles.card, hoveredCard === 'gabigol' && styles.cardHovered]}
            onPress={() => openInstagram('gabigol')}
            onMouseEnter={() => handleMouseEnter('gabigol')}
            onMouseLeave={handleMouseLeave}
          >
            <Image source={vinho4} style={styles.cardImage} resizeMode='contain' />
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Gabriel Barbosa</Text>
              <Text style={styles.cardDescription}>
                Gabigol teve uma passagem marcante pelo Santos, destacando-se como artilheiro e sendo peça chave na conquista do Campeonato Paulista de 2015, antes de seguir para o futebol europeu.
              </Text>
            </View>
          </TouchableOpacity>

          {/* Card de Rodrygo */}
          <TouchableOpacity
            style={[styles.card, hoveredCard === 'rodrygo' && styles.cardHovered]}
            onPress={() => openInstagram('rodrygocd')}
            onMouseEnter={() => handleMouseEnter('rodrygo')}
            onMouseLeave={handleMouseLeave}
          >
            <Image source={vinho5} style={styles.cardImage} resizeMode='contain' />
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>Rodrygo</Text>
              <Text style={styles.cardDescription}>
                Rodrygo destacou-se no Santos com seu talento promissor, conquistando a Copa do Brasil de 2015, antes de se transferir para o Real Madrid, onde seguiu brilhando no futebol mundial.
              </Text>
            </View>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
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
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  cardHovered: {
    transform: [{ scale: 1.05 }],
    shadowOpacity: 0.5,
  },
  cardImage: {
    width: 80,
    height: 120,
    marginRight: 15,
    borderRadius: 10,
  },
  cardInfo: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
  },
});

export default App;
