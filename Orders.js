import React from "react";
import { View, SectionList, Text } from "react-native";
import OrderPreview from "./OrderPreview";
import { formattedDate, today, yesterday, isSameDay } from "./dateTimeUtils";
 
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
	
	sectionTitle(date) {
		if (isSameDay(date, today())) {
			return "Сегодня";
		}
		else if (isSameDay(date, yesterday())) {
			return "Вчера";
		}
		else {
			return formattedDate(date);
		}
	}
	
	sections() {
		const sections = [];
		let date = null;
		this.state.orders.forEach(order => {
			const { creationDate } = order;
			if ((date == null) || !isSameDay(date, creationDate)) {
				date = creationDate;
				sections.push({
					title: this.sectionTitle(date),
					data: [ order ]
				});
			}
			else {
				sections[sections.length - 1].data.push(order);
			}
		});
		return sections;
	}

	render() {
		return (
			<View style={{ backgroundColor: "#1159BE" }}>
				<SectionList
					style={{ paddingLeft: 10, paddingRight: 10 }}
					sections={ this.sections() }
					renderItem={ ({ item, index, section }) => (
						<OrderPreview key={ index } { ...item } />
					) }
					renderSectionHeader={ ({ section: { title } }) => (
						<Text style={{ fontWeight: "bold", color: "white", paddingLeft: 10, marginTop: 10 }}>{ title }</Text>
					) }
					ListHeaderComponent={ (<Text style={{ color: "white", fontWeight: "bold", fontSize: 25, paddingLeft: 15, marginTop: 15, marginBottom: 15 }}>Мои заказы</Text>) }
					keyExtractor={ item => item.id }
				/>
			</View>
		);
	}
}