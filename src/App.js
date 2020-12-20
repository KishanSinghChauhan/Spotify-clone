import React,{useEffect} from 'react';
import './App.css';
import Login from "./components/Login/Login";
import { getTokenFromResponse } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import {useDataLayerValue} from './Context/DataLayer';
import HomePage from './components/HomePage/HomePage';

const spotify = new SpotifyWebApi();
function App() {
  const [{token},dispatch] = useDataLayerValue();
  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = '';
    const _token = hash.access_token;

    if(_token){
      dispatch({
        type:'SET_TOKEN',
        token:_token
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type:'SET_USER',
          user:user
        })
      })
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type:'SET_PLAYLISTS',
          playlists:playlists
        })
      })
    }
  }, []);

  return (
    <div className="app">
      {
        token ? (
           <HomePage spotify={spotify}/>
          ) : (
            <Login />
          )
        }
    </div>
  );
}

export default App;
