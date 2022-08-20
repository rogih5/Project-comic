import React from 'react';
import { TextInput, StyleSheet, SafeAreaView } from 'react-native';

export default props => (
	<><SafeAreaView>
		<TextInput
			style={styles.input}value={props.num}
			onChangeText={valorDoCampo => props.atualizaValor(props.nome, valorDoCampo)} 
			placeholder="Digite seu numéro"
			keyboardType="numeric" />
	</SafeAreaView>
	</>
	
);

const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	  },
});