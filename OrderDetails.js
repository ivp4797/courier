import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import OrderArea from "./OrderArea";
import Status from "./Status";
import Contact from "./Contact";
import { formatDateTime } from "./format";

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#1159BE",
		height: "100%"
	},
	header: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		paddingLeft: 5,
		marginTop: 30,
		marginBottom: 30
	},
	title: {
		color: "white",
		fontWeight: "bold",
		fontSize: 25,
		marginLeft: 15
	},
	info: {
		display: "flex",
		flexDirection: "column",
		marginLeft: 10,
		marginRight: 10
	},
	dateAndStatusRow: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start"
	},
	subTitle: {
		color: "gray",
		marginBottom: 5
	},
	nonTrailingSection: {
		marginBottom: 40
	}
});

export default class OrderDetails extends React.Component {
	render() {
		const order = this.props.navigation.getParam("order");
		return (
			<View style={ styles.container }>
				<View style={ styles.header }>
					<Icon name="navigate-before" color="white" size={ 40 } onPress={ () => this.props.navigation.goBack() } />
					<Text style={ styles.title }>Заказ #{ order.id }</Text>
				</View>
				<OrderArea style={ styles.info }>
					<View style={[ styles.dateAndStatusRow, styles.nonTrailingSection ]}>
						<View>
							<Text style={ styles.subTitle }>Дата создания</Text>
							<Text>{ formatDateTime(order.creationDate) }</Text>
						</View>
						<Status status={ order.status } />
					</View>
					<View style={ styles.nonTrailingSection }>
						<Text style={ styles.subTitle }>Адрес</Text>
						<Text>{ order.address }</Text>
					</View>
					<View style={ styles.nonTrailingSection }>
						<Text style={ styles.subTitle }>Информация для курьера</Text>
						<Text>{ order.courierComment }</Text>
					</View>
					<View style={ styles.nonTrailingSection }>
						<Text style={ styles.subTitle }>Заведение</Text>
						<Text>{ order.venue.title }</Text>
					</View>
					<View>
						<Text style={ styles.subTitle }>Клиент</Text>
						<Contact firstName={ order.guest.firstName } lastName={ order.guest.lastName } phone={ order.guest.phone } />
					</View>
				</OrderArea>
			</View>
		);
	}
}
