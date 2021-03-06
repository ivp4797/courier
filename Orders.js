import React from "react";
import { View, SectionList, Text, StyleSheet } from "react-native";
import OrderPreview from "./OrderPreview";
import { formatDate } from "./format";
import { isSameDay } from "./datetime";

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#1159BE"
	},
	sectionList: {
		paddingLeft: 10,
		paddingRight: 10
	},
	sectionHeader: {
		fontWeight: "bold",
		color: "white",
		paddingLeft: 10,
		marginTop: 10
	},
	listHeader: {
		color: "white",
		fontWeight: "bold",
		fontSize: 25,
		paddingLeft: 15,
		marginTop: 15,
		marginBottom: 15
	}
});
 
const ORDERS_URL = "https://qr-rn-test-task.herokuapp.com/orders";

export default class Orders extends React.Component {
	constructor(props) {
		super(props);
		this.state = { orders: [] };
	}
	
	componentDidMount() {
		fetch(ORDERS_URL)
			.then(response => response.json())
			.then(data => this.setState({
				orders: data.map(
					({ creationDate, ...other }) => ({ creationDate: new Date(creationDate), ...other })
				)
			}));
	}
	
	sections() {
		const sections = [];
		let date = null;
		this.state.orders.forEach(order => {
			const { creationDate } = order;
			const data = {
				order,
				goToDetails: () => this.props.navigation.navigate("Details", { order })
			};
			if ((date == null) || !isSameDay(date, creationDate)) {
				date = creationDate;
				sections.push({
					key: order.id,
					title: formatDate(date),
					data: [ data ]
				});
			}
			else {
				sections[sections.length - 1].data.push(data);
			}
		});
		return sections;
	}

	render() {
		return (
			<View style={ styles.container }>
				<SectionList
					style={ styles.sectionList }
					sections={ this.sections() }
					renderItem={ ({ item, index, section }) => (
						<OrderPreview key={ item.id + "." + index } { ...item } />
					) }
					renderSectionHeader={ ({ section: { title } }) => (
						<Text style={ styles.sectionHeader }>{ title }</Text>
					) }
					ListHeaderComponent={ (<Text style={ styles.listHeader }>Мои заказы</Text>) }
					keyExtractor={ (item, index) => item.id + "." + index }
				/>
			</View>
		);
	}
}
