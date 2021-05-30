import React from 'react';

const SearchField=({onSearch,onEnter}) => {
	return(
		<div className='form_field'>
			<input 
			type='search' 
			placeholder='name of the country' 
			onChange={onSearch} 
			onKeyDown={onEnter} />
		</div>
		);
}
export default SearchField;