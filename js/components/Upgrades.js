import React from "react";

import Clicker from "./Clicker";


export class UpgradeOne extends React.Component {
	
	render() {
		return (
			<div>
				<button className="upOneButton" disabled={this.props.clicks < this.props.upOneCost} onClick={this.props.buyUpOne}><strong>UPGRADE 1</strong></button>
				<p><strong><u>1 Click/5s</u></strong></p>
				<p><strong>Cost:</strong><span>{this.props.upOneCost}</span></p>
				<p><strong>#:</strong><span>{this.props.upOneQty}</span></p>
			</div>
		)
	}
}


export class UpgradeTwo extends React.Component {
	
	render() {
		return (
			<div>
				<button className="upTwoButton" disabled={this.props.clicks < this.props.upTwoCost} onClick={this.props.buyUpTwo}><strong>UPGRADE 2</strong></button>
				<p><strong><u>1 Click/3s</u></strong></p>
				<p><strong>Cost:</strong><span>{this.props.upTwoCost}</span></p>
				<p><strong>#:</strong><span>{this.props.upTwoQty}</span></p>
			</div>
		)
	}
}


export class UpgradeThree extends React.Component {
	
	render() {
		return (
			<div>
				<button className="upThreeButton" disabled={this.props.clicks < this.props.upThreeCost} onClick={this.props.buyUpThree}><strong>UPGRADE 3</strong></button>
				<p><strong><u>2 Click/5s</u></strong></p>
				<p><strong>Cost:</strong><span>{this.props.upThreeCost}</span></p>
				<p><strong>#:</strong><span>{this.props.upThreeQty}</span></p>
			</div>
		)
	}
}


export class UpgradeFour extends React.Component {
	
	render() {
		return (
			<div>
				<button className="upFourButton" disabled={this.props.clicks < this.props.upFourCost} onClick={this.props.buyUpFour}><strong>UPGRADE 4</strong></button>
				<p><strong><u>2 Click/3s</u></strong></p>
				<p><strong>Cost:</strong><span>{this.props.upFourCost}</span></p>
				<p><strong>#:</strong><span>{this.props.upFourQty}</span></p>
			</div>
		)
	}
}


export class UpgradeFive extends React.Component {
	
	render() {
		return (
			<div>
				<button className="upFiveButton"disabled={this.props.clicks < this.props.upFiveCost} onClick={this.props.buyUpFive}><strong>UPGRADE 5</strong></button>
				<p><strong><u>1 Click/1s</u></strong></p>
				<p><strong>Cost:</strong><span>{this.props.upFiveCost}</span></p>
				<p><strong>#:</strong><span>{this.props.upFiveQty}</span></p>
			</div>
		)
	}
}


export class UpgradeContainer extends React.Component {
	
	render() {
		return <div id="upgradeContainer"></div>
	}
}
	





		


