# Happiness Everywhere

## Background
This website is based on World Happiness Report 2022. The dataset is extracted and simplified from the report. The score details in the cards, though not directly linked to dataset, are also extracted from the dataset.

## Features
1. Hovering on buttons and links (which can be found in the whole page) shows animation and tranformation
2. Navigation bar links redirect users to corresponding sections of the page
3. The interactive world map in Overview allows user to hover on it with animation shown.
4. Search on the search bar in Find where you are! to filter cards of country (currently only 9 countries available to be searched which includes Afganistan, Australia, Denmark, Finland, France, Norway, Singapore, United Kingdom, and United States) (it is case-insensitive) (search ideas: an, un)
5. If user types in a country not in the above list, it would show "No results found" with 404 picture.
6. Each card of countries are clickable and it comes up with a modal that can be closed by clicking the cross button on the top right corner of modal.
7. Clicking the "Looking for details?" button in modal shows table of score detail of the country.
8. Filling in the form in Subscription section and clicking Subscribe button shows a Bootstrap alert with Your name and (perhaps) Your country. Showing Your country or not depends on whether the country is already listed above.
9. The page is fully responsive. The navigation bar, cards and the form might change their appearance accordingly.
10. The font used in page, "Figtree", is a sans-serif Google font which allows user to read comfortably. It is a modern and friendly fontface.
11. The whole website is created with a ton of time and efforts. Hope you enjoy exploring every detail!

## References
1. Aché, M. (2022) World Happiness Report Up to 2022 | Kaggle. Available at: https://www.kaggle.com/datasets/mathurinache/world-happiness-report (Accessed: 26 Oct 2022).
2. Comeau, J.W. (2021) My Custom CSS Reset. Available at: https://www.joshwcomeau.com/css/custom-css-reset/ (Accessed: 26 Oct 2022).
3. 30 seconds of code (2021) Hover Underline Animation. Available at: https://www.30secondsofcode.org/css/s/hover-underline-animation (Accessed: 1 Nov 2022).
4. Mozilla (2022) CSS: Cascading Style Sheets | MDN. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS (Accessed: 1 Nov 2022).
5. W3Schools (2022) How To Create a Filter/Search List. Available at: https://www.w3schools.com/howto/howto_js_filter_lists.asp (Accessed: 1 Dec 2022).
6. Holtz, Y. (2018) Choropleth map with hover effect in d3.js. Available at https://d3-graph-gallery.com/graph/choropleth_hover_effect.html (Accessed: 3 Dec 2022).

### Pictures and icons
1. Pricilla Du Preez on Unsplash -- priscilla-du-preez-mKJUoZPy70I-unsplash.jpeg as the background picture of hero section
2. CountryFlagsAPI -- country flags used in cards (Originally the API was used to get flags in svg format. However in the early September a bug is on the API server such that the country flags cannot be loaded properly. At last all required flags were downloaded from the website in png format to avoid errors.)
3. Icons8 from Ouch! -- 404 illustration
4. iconmonstr -- icons including search icon in search bar and success icon in alert
