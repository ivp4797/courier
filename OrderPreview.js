import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import OrderArea from "./OrderArea";
import { formattedTime } from "./dateTimeUtils";

export default class OrderPreview extends React.PureComponent {
	static propTypes = {
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
	};
	
	constructor(props) {
		super(props);
		this.statusColors = {
			CANCELED: "#F08080",
			NEW: "#F0E68C",
			SENT_TO_KITCHEN: "orange",
			DONE: "#00CED1"
		};
		this.statusDescriptions = {
			CANCELED: "ОТМЕНЕН",
			NEW: "НОВЫЙ",
			SENT_TO_KITCHEN: "ОТПРАВЛЕН НА КУХНЮ",
			DONE: "ПРИГОТОВЛЕН"
		};
		this.cancelledOpacity = 0.4;
	}
	
	opacity() {
		return this.props.status === "CANCELED" ? this.cancelledOpacity : 1;
	}
	
	renderCreationTime() {
		const date = this.props.creationDate;
		return <Text style={{ opacity: this.opacity() }}>{ formattedTime(date) }</Text>;
	}

	render() {
		return (
			<OrderArea style={{ display: "flex", flexDirection: "column" }}>
				<View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
					<Text style={{ fontWeight: "bold", opacity: this.opacity() }}>{ this.props.title }</Text>
					{ this.renderCreationTime() }
				</View>
				<Text style={{ color: "gray", marginTop: 10, marginBottom: 10, opacity: this.opacity() }}>{ this.props.address }</Text>
				<View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
					<Text style={{
							fontWeight: "bold",
							color: "white",
							backgroundColor: this.statusColors[this.props.status],
							borderRadius: 5,
							paddingLeft: 10,
							paddingRight: 10,
							paddingTop: 5,
							paddingBottom: 5,
							opacity: this.opacity()
						}}>
						{ this.statusDescriptions[this.props.status] }
					</Text>
				</View>
			</OrderArea>
		);
	}
}
