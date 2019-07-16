import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { formatPhone } from "./format";

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
			<View style={{ borderRadius: 10, backgroundColor: "#D3D3D3", display: "flex", flexDirection: "row" }}>
				<View style={{ paddingLeft: 5, paddingTop: 5, paddingBottom: 5, display: "flex", flexDirection: "column", flex: 3 }}>
					<Text>{ `${this.props.firstName} ${this.props.lastName}` }</Text>
					<Text style={{ color: "gray" }}>{ formatPhone(this.props.phone) }</Text>
				</View>
				<View
					style={{
						 backgroundColor: "green",
						 flex: 1,
						 display: "flex",
						 justifyContent: "center",
						 alignItems: "center",
						 borderTopRightRadius: 10,
						 borderBottomRightRadius: 10
					}}>
					<Icon name="call" color="white" size={ 30 } />
				</View>
			</View>
		);
	}
}
