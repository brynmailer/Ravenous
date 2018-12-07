const apiKey = 'CYEw8PzXruGqaduiHtA8V1DXfojHcpkoJzK7wg7e1BzkGsFxOb2A55NHoTPf0I3lrsbrDQLSlp3NGWqgkwyGZLpp74hv9VCQ5rNb0wCodAxTPFAxCkVkoMuksH5eW3Yx';
const Yelp = {
  search (term, location, sortBy) {
    if (location) {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count
            }
          });
        }
      });
    }
  }
};

export default Yelp;
