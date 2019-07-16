import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Contact extends React.Component {
	formatPhone() {
		const { phone } = this.props.order.guest;
		return "+7 " + phone.substring(0, 5) + " " + phone.substring(5);
	}

	render() {
		return (
			<View style={{ borderRadius: 10, backgroundColor: "#D3D3D3", display: "flex", flexDirection: "row" }}>
				<View style={{ paddingLeft: 5, paddingTop: 5, paddingBottom: 5, display: "flex", flexDirection: "column", flex: 3 }}>
					<Text>{ this.props.order.guest.firstName + " " + this.props.order.guest.lastName }</Text>
					<Text style={{ color: "gray" }}>{ this.formatPhone() }</Text>
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
