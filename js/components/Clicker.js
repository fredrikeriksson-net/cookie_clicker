import React from "react";

import {UpgradeOne, UpgradeTwo, UpgradeThree, UpgradeFour, UpgradeFive, UpgradeContainer} from "./Upgrades";

export default class Clicker extends React.Component {

	constructor() {
		super();

		// Binder alla metoder
		this.buyUpOne = this.buyUpOne.bind(this);
		this.buyUpTwo = this.buyUpTwo.bind(this);
		this.buyUpThree = this.buyUpThree.bind(this);
		this.buyUpFour = this.buyUpFour.bind(this);
		this.buyUpFive = this.buyUpFive.bind(this);

		this.state = {
			clicks: 0,
			upArr: [],

			upOne: 0,
			upOneCost: 25,
			upOneQty: 0,
			upOneIncrementCount: 0,

			upTwo: 0,
			upTwoCost: 100,
			upTwoQty:0,
			upTwoIncrementCount: 0,

			upThree: 0,
			upThreeCost: 250,
			upThreeQty:0,
			upThreeIncrementCount: 0,

			upFour: 0,
			upFourCost: 500,
			upFourQty:0,
			upFourIncrementCount: 0,

			upFive: 0,
			upFiveCost: 750,
			upFiveQty:0,
			upFiveIncrementCount: 0
		}
	}

	counter(){
		this.setState({clicks: this.state.clicks +1}); // Räknar klicken
	}

	// Köp Upgrade 1
	buyUpOne(){
		this.setState({upOneQty: this.state.upOneQty +1}) // Håller koll på köpta upgrades
		this.setState({clicks: this.state.clicks - this.state.upOneCost}) // Drar av klick när upgrade köps
		this.setState({upOneCost: this.state.upOneCost +25}) // Ökar priset varje gång som en uppgradering köps
		this.setState({upOneIncrementCount: this.state.upOneIncrementCount =+ 1}) // Sätter hur många klick det ska öka med

	  setInterval(() => {
		this.setState({clicks: this.state.clicks + this.state.upOneIncrementCount}) // Sätter en tidsintervall nör klicken ska ske
		}, 5000);

	  // Lägger till en "box" i arrayen
	  let upgrades = this.state.upArr;    
    upgrades.push("boxOne"); 
    this.setState({upArr:upgrades})

    this.showUpgrades(); // Kör funktionen som visar grafiskt hur många upgrades som finns
	}


	buyUpTwo(){
		this.setState({upTwoQty: this.state.upTwoQty +1})
		this.setState({clicks: this.state.clicks - this.state.upTwoCost})
		this.setState({upTwoCost: this.state.upTwoCost +50})
		this.setState({upTwoIncrementCount: this.state.upOneIncrementCount =+ 1})

		setInterval(() => {
			this.setState({clicks: this.state.clicks + this.state.upTwoIncrementCount})
		}, 3000);

		 let upgrades = this.state.upArr;    
    upgrades.push("boxTwo"); 
    this.setState({upArr:upgrades})

    this.showUpgrades();
	}


	buyUpThree(){
		this.setState({upThreeQty: this.state.upThreeQty +1})
		this.setState({clicks: this.state.clicks - this.state.upThreeCost})
		this.setState({upThreeCost: this.state.upThreeCost +75}) 
		this.setState({upThreeIncrementCount: this.state.upOneIncrementCount =+ 2})

		setInterval(() => {
			this.setState({clicks: this.state.clicks + this.state.upThreeIncrementCount})
			}, 5000);

		let upgrades = this.state.upArr;    
    upgrades.push("boxThree"); 
    this.setState({upArr:upgrades})

    this.showUpgrades();
	}


	buyUpFour(){
		this.setState({upFourQty: this.state.upFourQty +1})
		this.setState({clicks: this.state.clicks - this.state.upFourCost})
		this.setState({upFourCost: this.state.upFourCost +150})
		this.setState({upFourIncrementCount: this.state.upOneIncrementCount =+ 2})

		setInterval(() => {
			this.setState({clicks: this.state.clicks + this.state.upFourIncrementCount})
		}, 3000);

		let upgrades = this.state.upArr;    
    upgrades.push("boxFour"); 
    this.setState({upArr:upgrades})

    this.showUpgrades();
	}


		buyUpFive(){
		this.setState({upFiveQty: this.state.upFiveQty +1})
		this.setState({clicks: this.state.clicks - this.state.upFiveCost})
		this.setState({upFiveCost: this.state.upFiveCost +250}) 
		this.setState({upFiveIncrementCount: this.state.upOneIncrementCount =+ 1})

		setInterval(() => {
			this.setState({clicks: this.state.clicks + this.state.upFiveIncrementCount})
		}, 1000);

		let upgrades = this.state.upArr;    
    upgrades.push("boxFive"); 
    this.setState({upArr:upgrades})

    this.showUpgrades();
	}

		// Går igenom upgrades arrayen och visar "boxarna"
		showUpgrades(){
		let boxes = this.state.upArr;
		let box = boxes.map(function(fix) {
  		return "<div id='" + fix + "'></div>"
 		});

 		document.getElementById("upgradeContainer").innerHTML = box.join("");s

		}


	render() {

		return(
		
		<div>

			<p><strong>Clicks:</strong><span>{this.state.clicks}</span></p>
			<button className="clickerButton" onClick={this.counter.bind(this)}>CLICK</button>
			<hr></hr>
			<h2>UPGRADES</h2>

			<div id="upgradeButtons">

			<UpgradeOne 
				clicks = {this.state.clicks} 
				upArr = {this.state.upArr} 
				upOne = {this.state.upOne} 
				upOneCost = {this.state.upOneCost} 
				upOneQty = {this.state.upOneQty} 
				upOneIncrementCount = {this.state.upOneIncrementCount} 
				counter = {this.counter} 
				buyUpOne = {this.buyUpOne} 
				showUpgrades = {this.showUpgrades} 
			/>

			<UpgradeTwo 
				clicks = {this.state.clicks} 
				upArr = {this.state.upArr} 
				upTwo = {this.state.upTwo} 
				upTwoCost = {this.state.upTwoCost} 
				upTwoQty = {this.state.upTwoQty} 
				upTwoIncrementCount = {this.state.upTwoIncrementCount} 
				counter = {this.counter} 
				buyUpTwo = {this.buyUpTwo} 
				showUpgrades = {this.showUpgrades} 
			/>

			<UpgradeThree 
				clicks = {this.state.clicks} 
				upArr = {this.state.upArr} 
				upThree = {this.state.upThree} 
				upThreeCost = {this.state.upThreeCost} 
				upThreeQty = {this.state.upThreeQty} 
				upThreeIncrementCount = {this.state.upThreeIncrementCount} 
				counter = {this.counter} 
				buyUpThree = {this.buyUpThree} 
				showUpgrades = {this.showUpgrades} 
			/>

			<UpgradeFour 
				clicks = {this.state.clicks} 
				upArr = {this.state.upArr} 
				upFour = {this.state.upFour} 
				upFourCost = {this.state.upFourCost} 
				upFourQty = {this.state.upFourQty} 
				upFourIncrementCount = {this.state.upFourIncrementCount} 
				counter = {this.counter} 
				buyUpFour = {this.buyUpFour} 
				showUpgrades = {this.showUpgrades} 
			/>

			<UpgradeFive 
				clicks = {this.state.clicks} 
				upArr = {this.state.upArr} 
				upFive = {this.state.upFive} 
				upFiveCost = {this.state.upFiveCost} 
				upFiveQty = {this.state.upFiveQty} 
				upFiveIncrementCount = {this.state.upFiveIncrementCount} 
				counter = {this.counter} 
				buyUpFive = {this.buyUpFive} 
				showUpgrades = {this.showUpgrades} 
			/>

			</div>
			<hr></hr>
			<h2>UPGRADES IN PLAY</h2>

			<UpgradeContainer 
				upArr = {this.state.upArr} 
				showUpgrades = {this.showUpgrades} 
			/>

			</div>

		)
	}
}