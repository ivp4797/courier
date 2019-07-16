import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import OrderArea from "./OrderArea";
import Status from "./Status";
import { formatTime } from "./format";

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "column"
	},
	titleAndTimeRow: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between"
	},
	title: {
		fontWeight: "bold"
	},
	address: {
		color: "gray",
		marginTop: 10,
		marginBottom: 10
	},
	cancelled: {
		opacity: 0.4
	},
	notCancelled: {
		opacity: 1
	},
	statusContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start"
	}
});

export default class OrderPreview extends React.PureComponent {
	static propTypes = {
		order: PropTypes.shape({
			title: PropTypes.string.isRequired,
			creationDate: PropTypes.instanceOf(Date).isRequired,
			status: PropTypes.oneOf([
				"CANCELED",
				"NEW",
				"SENT_TO_KITCHEN",
				"DONE"
			]).isRequired,
			address: PropTypes.string.isRequired
		}).isRequired,
		goToDetails: PropTypes.func.isRequired
	};
	
	constructor(props) {
		super(props);
		this.cancelledOpacity = 0.4;
	}
	
	maybeCancelledStyle() {
		return this.props.status === "CANCELED" ? styles.cancelled : styles.notCancelled;
	}

	render() {
		return (
			<TouchableHighlight onPress={ () => this.props.goToDetails() }>
				<OrderArea style={ styles.container }>
					<View style={ styles.titleAndTimeRow }>
						<Text style={[ styles.title, this.maybeCancelledStyle() ]}>{ this.props.order.title }</Text>
						<Text style={ this.maybeCancelledStyle() }>{ formatTime(this.props.order.creationDate) }</Text>
					</View>
					<Text style={[ styles.address, this.maybeCancelledStyle() ]}>{ this.props.order.address }</Text>
					<View style={ styles.statusContainer }>
						<Status status={ this.props.order.status } style={ this.maybeCancelledStyle() } />
					</View>
				</OrderArea>
			</TouchableHighlight>
		);
	}
}
