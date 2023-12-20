export function filterRestaurants(searchText, restaurantList) {
  return restaurantList.filter((res) =>
    res.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
}
