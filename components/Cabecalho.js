import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default props => (
	<View style={styles.topo}>
		<Text style={styles.txtTitulo}>Calculadora</Text>
	</View>
);

const styles = StyleSheet.create({
	topo: {
		backgroundColor: '#F37E21',
		padding: 10,
		alignItems: 'center'
	},
	txtTitulo: {
		fontSize: 25,
		color: '#3B424E'
	}
});