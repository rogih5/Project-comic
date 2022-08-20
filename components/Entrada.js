import React from 'react';
import { StyleSheet, View } from 'react-native';
import Numero from './Numero';

export default props => (
	
	<>
	<View style={styles.numeros}>
		<Numero num={props.num1} atualizaValor={props.atualizaValor} nome='num1' />
	</View>
	<View style={styles.numeros2}>
			<Numero num={props.num2} atualizaValor={props.atualizaValor} nome='num2' />
	</View>
	</>
);

const styles = StyleSheet.create({
	numeros: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	numeros2: {
		flexDirection: 'leaft',
		justifyContent: 'space-between'
	}
})