import React from "react";
import { View } from "react-native";

export default class OrderArea extends React.Component {
	render() {
		const { style, ...other } = this.props;
		return (
			<View
				style={{
					backgroundColor: "white",
					borderRadius: 10,
					padding: 10,
					marginTop: 10,
					marginBottom: 10,
					...style
				}}
				{ ...other }
			>
				{ this.props.children }
			</View>
		);
	}
}
