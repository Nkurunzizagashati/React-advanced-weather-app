import React, { ChangeEvent, useEffect, useState } from 'react';
import { getWeatherDetailsAction } from '../services/weather/action';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../assets/search';

import { searchLocation, WeatherData } from '../types';

const searchBar = () => {
	const dispatch = useDispatch();
	const [searchData, setSearchData] = useState<string>();
  const{ weather} = useSelector((state:any)=>state)
 
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
      <div className="bg-[#E5E5E5]- py-10 px-6">
        <div className="bg-[#FDFCFC] bg-red-400-  rounded-2xl py-3 px-2  w-[327px]">
          <form className='bg-black- flex items-center justify-between' onSubmit={handleSubmit}>
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
