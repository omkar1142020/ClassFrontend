import React from 'react';

const Navigation = ({ onRouteChange, issignedin }) =>{
	if(issignedin){
		return(
			<nav style={{ display:'flex' , justifyContent: 'flex-end'}}>
				<p onClick={ () => onRouteChange('signin') } className='f3 dim link black underline pa2 pointer'>Sign Out</p>
			</nav>
			);
	}else{
		return(
			<nav style={{ display:'flex' , justifyContent: 'flex-end'}}>
				<p onClick={ () => onRouteChange('Register') } className='f3 dim link black underline pa2 pointer'>Register</p>
				<p onClick={ () => onRouteChange('signin') } className='f3 dim link black underline pa2 pointer'>Signin</p>
			</nav>
			);
	}
}
export default Navigation;
