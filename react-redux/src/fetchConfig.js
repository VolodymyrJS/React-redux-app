const url = 'http://ws.audioscrobbler.com/2.0/';
const method = '?method=chart.gettoptracks&api_';
const key = 'key=338b9e08c1e5acbef9302a70d6ea86f1';
const format = '&format=json';
const url_about = 'http://ws.audioscrobbler.com/2.0/';
const method_obout = '?method=artist.getinfo&artist=Billie Eilish&api_';
const key_about = 'key=338b9e08c1e5acbef9302a70d6ea86f1';
const format_about = '&format=json';

export const queryTrack = url + method + key + format;
export const queryArtist = url_about + method_obout + key_about + format_about;
