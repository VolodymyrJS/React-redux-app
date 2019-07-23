import axios from 'axios';
import { queryTrack, queryArtist } from '../fetchConfig';

export const expandOneDeal = dealKey => ({ type: 'SHOW_IMAGE', dealKey });

export const hideOneDeal = dealKey => ({ type: 'HIDE_TRACK', dealKey });

export const fetchMoreTracks = () => {
  return async dispatch => {
    const resp = await axios.get(queryTrack);
    dispatch({
      type: 'SHOW_ALL_TRACKS',
      allTracks: resp.data.tracks.track.slice(5)
    });
  };
};

export const putArtistDataToState = () => {
  return async dispatch => {
    const resp = await axios.get(queryArtist);
    dispatch({
      type: 'GET_INFO_ABOUT_ARTIST',
      artistData: resp.data
    });
  };
};
