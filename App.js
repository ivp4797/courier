import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Orders from "./Orders";

const AppContainer = createAppContainer(
	createStackNavigator(
		{
			Orders
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
