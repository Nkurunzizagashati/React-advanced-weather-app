import React, { ChangeEvent, useEffect, useState } from 'react';
import { getWeatherDetailsAction } from '../services/weather/action';
import { useDispatch } from 'react-redux';
import Search from '../assets/search';
import { searchLocation } from '../types';

const searchBar = () => {
	const dispatch = useDispatch();
	const [searchData, setSearchData] = useState<string>();

	const handleChange = (e) => {
		setSearchData(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	useEffect(() => {
		searchData && getWeatherDetailsAction(searchData)(dispatch);
	}, [dispatch, searchData]);

	return (
		<>
			<div className="bg-[#E5E5E5] py-10 px-6 fixed top-0 left-0 right-0 z-50">
				<div className="bg-[#FDFCFC] flex rounded-2xl py-3 px-2 items-center justify-between w-[327px]">
					<form onSubmit={handleSubmit}>
						<input
							className="outline-none "
							placeholder="search location"
							onChange={handleChange}
						/>
						<button onClick={handleSubmit}>
							<Search />
						</button>
					</form>
				</div>

				<div className="bg-yellow-50">
				</div>
			</div>
		</>
	);
};
export default searchBar;
