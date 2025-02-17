import { StyleSheet } from "react-native";

const  styles = StyleSheet.create({
   
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
      },
      header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
      },
      subHeader: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
      },
      card: {
        flexDirection: 'row',
        backgroundColor: '#f5f5f5',
        padding: 15,
        marginBottom: 15,
        borderRadius: 10,
      },
      image: {
        width: 100,
        height: 150,
        resizeMode: 'contain',
        marginRight: 10,
      },
      textContainer: {
        flex: 1,
        justifyContent: 'flex-start',
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      description: {
        fontSize: 14,
        color: '#666',
      },
      });
      

export default styles;