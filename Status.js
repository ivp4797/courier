import React from "react";
import PropTypes from "prop-types";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
	status: {
		fontWeight: "bold",
		color: "white",
		borderRadius: 5,
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 5,
		paddingBottom: 5
	}
});

export default class Status extends React.Component {
	static propTypes = {
		status: PropTypes.oneOf([
			"CANCELED",
			"NEW",
			"SENT_TO_KITCHEN",
			"DONE"
		]).isRequired
	};

	constructor(props) {
		super(props);
		this.colors = {
			CANCELED: "#F08080",
			NEW: "#F0E68C",
			SENT_TO_KITCHEN: "orange",
			DONE: "#00CED1"
		};
		this.descriptions = {
			CANCELED: "ОТМЕНЕН",
			NEW: "НОВЫЙ",
			SENT_TO_KITCHEN: "ОТПРАВЛЕН НА КУХНЮ",
			DONE: "ПРИГОТОВЛЕН"
		};
	}
	
	render() {
		return (
			<Text style={[ styles.status, { backgroundColor: this.colors[this.props.status] }, this.props.style ]}>
				{ this.descriptions[this.props.status] }
			</Text>
		);
	}
}
