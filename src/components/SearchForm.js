import React, { useState } from "react";

const SearchForm = props => {
	console.log(props);
	const [datas, setDatas] = useState({
		name: ""
	});

	const changeHandler = event => {
		setDatas({ ...datas, [event.target.name]: event.target.value });
		console.log(event.target.name);
	};

	const submitForm = event => {
		event.preventDefault();
		const data2 = {
			...datas,
			id: Date.now()
		};
		props.filter(data2);
		setDatas({ name: "" });
  };
  
  
	return (
		<section className="search-form">
			<form onSubmit={submitForm}>
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					name="name"
					value={datas.name}
					onChange={changeHandler}
				/>

				<button className="search-button" type="submit">
					Search
				</button>
			</form>
		</section>
	);
};

export default SearchForm;