import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import OrderArea from "./OrderArea";
import Status from "./Status";
import Contact from "./Contact";
import { formatDateTime } from "./format";

export default class OrderDetails extends React.Component {
	render() {
		const order = this.props.navigation.getParam("order");
		return (
			<View style={{ backgroundColor: "#1159BE", height: "100%" }}>
				<View style={{ display: "flex", flexDirection: "row", alignItems: "center", paddingLeft: 5, marginTop: 30, marginBottom: 30 }}>
					<Icon name="navigate-before" color="white" size={ 40 } onPress={ () => this.props.navigation.goBack() } />
					<Text style={{ color: "white", fontWeight: "bold", fontSize: 25, marginLeft: 15 }}>Заказ { order.title }</Text>
				</View>
				<OrderArea style={{ display: "flex", flexDirection: "column", marginLeft: 10, marginRight: 10 }}>
					<View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 40 }}>
						<View style={{ display: "flex", flexDirection: "column" }}>
							<Text style={{ color: "gray", marginBottom: 5 }}>Дата создания</Text>
							<Text>{ formatDateTime(order.creationDate) }</Text>
						</View>
						<Status status={ order.status } />
					</View>
					<View style={{ marginBottom: 40 }}>
						<Text style={{ color: "gray", marginBottom: 5 }}>Адрес</Text>
						<Text>{ order.address }</Text>
					</View>
					<View style={{ marginBottom: 40 }}>
						<Text style={{ color: "gray", marginBottom: 5 }}>Информация для курьера</Text>
						<Text>{ order.courierComment }</Text>
					</View>
					<View style={{ marginBottom: 40 }}>
						<Text style={{ color: "gray", marginBottom: 5 }}>Заведение</Text>
						<Text>{ order.venue.title }</Text>
					</View>
					<View>
						<Text style={{ color: "gray", marginBottom: 5 }}>Клиент</Text>
						<Contact firstName={ order.guest.firstName } lastName={ order.guest.lastName } phone={ order.guest.phone } />
					</View>
				</OrderArea>
			</View>
		);
	}
}
