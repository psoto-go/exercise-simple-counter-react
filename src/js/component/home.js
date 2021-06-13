import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Card } from "./card.js";

//create your first component
let cont = 0;

export function Home() {
	let one = Math.floor(cont / 10);
	let two = Math.floor(cont / 100);
	let three = Math.floor(cont / 1000);
	let four = Math.floor(cont / 10000);

	cont += 1;
	return (
		<div className="d-flex flex-wrap">
			<Card icon="far fa-clock fa-7x"></Card>
			<Card digit={four}></Card>
			<Card digit={three}></Card>
			<Card digit={two}></Card>
			<Card digit={one}></Card>
		</div>
	);
}
