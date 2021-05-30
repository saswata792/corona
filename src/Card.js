import React from 'react';
import './index.css';
const Card=({data})=>{
	return(
		<div classNmae='cards'>
			<h1>{data.country}</h1>
			<p>Active: {data.active} </p>
			<p>Cases:{data.cases}</p>
			<p>Recovered:{data.recovered}</p>
			<p>Deaths:{data.deaths}</p>
		</div>

		);
}
export default Card;