import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [input, setInput] = useState('');

  const handlePress = (value: string) => {
    if (value === '=') {
      try {
        // Evalúa la expresión matemática, pero ten cuidado en producción
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <View style={styles.container}>
      {/* Display de la calculadora */}
      <View style={styles.display}>
        <Text style={styles.displayText}>{input || "0"}</Text>
      </View>

      {/* Botones de la calculadora */}
      <View style={styles.buttonContainer}>
        {['1', '2', '3', '+'].map((item) => (
          <CalculatorButton key={item} title={item} onPress={() => handlePress(item)} />
        ))}
        {['4', '5', '6', '-'].map((item) => (
          <CalculatorButton key={item} title={item} onPress={() => handlePress(item)} />
        ))}
        {['7', '8', '9', '*'].map((item) => (
          <CalculatorButton key={item} title={item} onPress={() => handlePress(item)} />
        ))}
        {['C', '0', '=', '/'].map((item) => (
          <CalculatorButton key={item} title={item} onPress={() => handlePress(item)} />
        ))}
      </View>
    </View>
  );
}

// Componente para los botones
const CalculatorButton = ({ title, onPress }: { title: string, onPress: () => void }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  display: {
    width: '90%',
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'flex-end',
  },
  displayText: {
    color: '#fff',
    fontSize: 48,
  },
  buttonContainer: {
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    width: '22%',
    backgroundColor: '#4CAF50',
    padding: 20,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});
