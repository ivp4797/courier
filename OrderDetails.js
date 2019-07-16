import React from "react";
import { View, Text } from "react-native";
import OrderArea from "./OrderArea";
import Status from "./Status";
import { formattedDateTime } from "./dateTimeUtils";

export default class OrderDetails extends React.Component {
	render() {
		const order = this.props.navigation.getParam("order");
		return (
			<View style={{ backgroundColor: "#1159BE", height: "100%" }}>
				<Text style={{ color: "white", fontWeight: "bold", fontSize: 25, paddingLeft: 15, marginTop: 30, marginBottom: 30 }}>Заказ { order.title }</Text>
				<OrderArea style={{ display: "flex", flexDirection: "column", marginLeft: 10, marginRight: 10 }}>
					<View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 40 }}>
						<View style={{ display: "flex", flexDirection: "column" }}>
							<Text style={{ color: "gray", marginBottom: 5 }}>Дата создания</Text>
							<Text>{ formattedDateTime(order.creationDate) }</Text>
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
						<Text>{ order.guest.firstName + " " + order.guest.lastName }</Text>
						<Text>{ order.guest.phone }</Text>
					</View>
				</OrderArea>
			</View>
		);
	}
}
