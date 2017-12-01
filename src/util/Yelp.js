const clientId=  'ftWXTeJC5NCCRGLneL6w9w';
const secret=  '4Xo8bNFZaSizDeRvAHK6vyuY2frJ2C0UUuOQB0FZkIAnrC7HGgxohmJGhi8tMfHQ';
var accessToken='';
export var Yelp = {
  getAccessToken: () => {
    if (accessToken) {
      return new Promise(resolve => resolve(accessToken));
    }
    return fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id='+clientId+'&client_secret='+secret, {method: 'Post'}).then(response=> {
      return response.json()}).then(jsonResponse=> {accessToken= jsonResponse.access_token})
  },
  search: (term, location, sortBy) => {
    return Yelp.getAccessToken().then(()=> { return fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term='+term+'&location='+location+'&sort_by='+sortBy, {headers: {Authorization: 'Bearer ${accessToken}'}})}).then(jsonResponse => {
      accessToken=jsonResponse.access_token}).then(jsonResponse=> {
        if (jsonResponse.business){
          return jsonResponse.businesses.map(business=> (
            {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,   //yelp api contains address 1, address 2, address 3 => how to handle => interpolate strings?
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zipCode,
              category: business.category,
              rating: business.rating,
              reviewCount: business.review_count

            }

          ))
        }
      });
  }
};
