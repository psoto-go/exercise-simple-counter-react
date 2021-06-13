import React from "react";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="card bg-dark" style={{ width: "11rem" }}>
			<div className="card-body">
				<i
					className={props.icon}
					style={{ color: "white", fontSize: "100px" }}>
					{props.digit}
				</i>
			</div>
		</div>
	);
};

Card.propTypes = {
	icon: PropTypes.string,
	digit: PropTypes.number
};
