import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Orders from "./Orders";
import OrderDetails from "./OrderDetails";

const AppContainer = createAppContainer(
	createStackNavigator(
		{
			Orders,
			Details: OrderDetails
		},
		{
			initialRouteName: "Orders",
			headerMode: "none"
		}
	)
);

export default class App extends React.Component {
	render() {
		return <AppContainer />;
	}
}
