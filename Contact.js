import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { formatPhone } from "./format";

const styles = StyleSheet.create({
	container: {
		borderRadius: 10,
		backgroundColor: "#D3D3D3",
		display: "flex",
		flexDirection: "row"
	},
	info: {
		paddingLeft: 5,
		paddingTop: 5,
		paddingBottom: 5,
		display: "flex",
		flexDirection: "column",
		flex: 3
	},
	phone: {
		color: "gray"
	},
	callBtn: {
		backgroundColor: "green",
		flex: 1,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderTopRightRadius: 10,
		borderBottomRightRadius: 10
	}
});

export default class Contact extends React.Component {
	static propTypes = {
		firstName: PropTypes.string.isRequired,
		lastName: PropTypes.string.isRequired,
		phone: (props, propName, componentName) => {
			if (!/^\(\d\d\d\)\d\d\d-\d\d-\d\d$/.test(props[propName])) {
				return new Error("Property " + propName + " in component " + componentName + " must be in format: (xxx)xxx-xx-xx");
			}
		}
	};

	render() {
		return (
			<View style={ styles.container }>
				<View style={ styles.info }>
					<Text>{ `${this.props.firstName} ${this.props.lastName}` }</Text>
					<Text style={ styles.phone }>{ formatPhone(this.props.phone) }</Text>
				</View>
				<View style={ styles.callBtn }>
					<Icon name="call" color="white" size={ 30 } />
				</View>
			</View>
		);
	}
}
