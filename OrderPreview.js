import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableHighlight } from "react-native";
import OrderArea from "./OrderArea";
import Status from "./Status";
import { formattedTime } from "./dateTimeUtils";

export default class OrderPreview extends React.PureComponent {
	static propTypes = {
		order: PropTypes.shape({
			//id: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
			creationDate: PropTypes.instanceOf(Date).isRequired,
			status: PropTypes.oneOf([
				"CANCELED",
				"NEW",
				"SENT_TO_KITCHEN",
				"DONE"
			]).isRequired,
			address: PropTypes.string.isRequired,
			/*courierComment: PropTypes.string.isRequired,
			venue: PropTypes.shape({
				id: PropTypes.number.isRequired,
				title: PropTypes.string.isRequired
			}).isRequired,
			guest: PropTypes.shape({
				id: PropTypes.number.isRequired,
				firstName: PropTypes.string.isRequired,
				lastName: PropTypes.string.isRequired,
				phone: (props, propName, componentName) => {
					if (!/^\(\d\d\d\)\d\d\d-\d\d-\d\d$/.test(props[propName])) {
						return new Error("Property " + propName + " in component " + componentName + " must be in format: (xxx)xxx-xx-xx");
					}
				}
			}).isRequired*/
		}).isRequired,
		goToDetails: PropTypes.func.isRequired
	};
	
	constructor(props) {
		super(props);
		this.cancelledOpacity = 0.4;
	}
	
	opacity() {
		return this.props.status === "CANCELED" ? this.cancelledOpacity : 1;
	}
	
	renderCreationTime() {
		const date = this.props.order.creationDate;
		return <Text style={{ opacity: this.opacity() }}>{ formattedTime(date) }</Text>;
	}

	render() {
		return (
			<TouchableHighlight onPress={ () => this.props.goToDetails() }>
				<OrderArea style={{ display: "flex", flexDirection: "column" }}>
					<View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
						<Text style={{ fontWeight: "bold", opacity: this.opacity() }}>{ this.props.order.title }</Text>
						{ this.renderCreationTime() }
					</View>
					<Text style={{ color: "gray", marginTop: 10, marginBottom: 10, opacity: this.opacity() }}>{ this.props.order.address }</Text>
					<View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
						<Status status={ this.props.order.status } style={{ opacity: this.opacity() }} />
					</View>
				</OrderArea>
			</TouchableHighlight>
		);
	}
}
