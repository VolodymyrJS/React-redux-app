export default (state, action) => {
  switch (action.type) {
    case 'SHOW_IMAGE':
      return {
        ...state,
        tracks: state.tracks.map(deal => ({
          ...deal,
          isExpanded: deal.listeners === action.dealKey
        }))
      };
    case 'HIDE_TRACK':
      return {
        ...state,
        tracks: state.tracks.filter(artist => {
          return artist.listeners !== action.dealKey;
        })
      };
    case 'CHANGE_STATE_TO_TEST':
      return {
        ...state,
        test: 'test'
      };
    default:
      return state;
  }
};
