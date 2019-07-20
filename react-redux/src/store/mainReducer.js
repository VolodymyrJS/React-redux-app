export default (state, action) => {
  switch (action.type) {
    case 'SHOW_IMAGE':
      return {
        ...state,
        deals: state.deals.map(deal => ({
          ...deal,
          isExpanded: deal.listeners === action.dealKey
        }))
      };
    case 'HIDE_TRACK':
      return {
        ...state,
        deals: state.deals.filter(artist => {
          return artist.listeners !== action.dealKey;
        })
      };
    default:
      return state;
  }
};
