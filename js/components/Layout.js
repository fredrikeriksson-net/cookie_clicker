import React from "react";

import Header from "./Header";
import Clicker from "./Clicker";

export default class Layout extends React.Component {

	render() {

		return (
			<div>
				<Header />
				<Clicker />
			</div>
		);
	}
}