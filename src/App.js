import './App.css';
import { useEffect, useState } from "react";
import Login from './Login.jsx'
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();
function App() {
	const [token, setToken] = useState(null);
	//Run code based on given condition
	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = "";
		const _token = hash.access_token;
		if (_token) {
			setToken(_token);
			spotify.setAccessToken(_token);
			spotify.getMe().then(user=>{
				console.log(user);
			})
		}
		else
			console.log('Token is ->', token);
	}, [])
	return (
		<div className="app">
			{
				token ? (
					<h1>I am logged in</h1>
				) : (
						<Login />
					)

			}
			
		</div>
	);
}

export default App;
