import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		borderRadius: 10,
		padding: 10,
		marginTop: 10,
		marginBottom: 10
	}
});

export default class OrderArea extends React.Component {
	render() {
		const { style, ...other } = this.props;
		return (
			<View style={[ styles.container, style ]} { ...other }>
				{ this.props.children }
			</View>
		);
	}
}
