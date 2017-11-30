export const fetchSearchResults = searchTerm => (
  $.ajax({
    method: 'POST',
    url: '/api/search',
    data: {term: searchTerm},
  })
);
