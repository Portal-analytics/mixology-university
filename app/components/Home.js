var React = require('react');
var styles = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({

    getInitialState: function () {
        return {
            drinkList: [
                    {
                      name: 'Rum and Coke',
                      ingredients: '1 Part Dark Rum, 2 Parts Coke',
                      rating: 4.65,
                      drinkNumber: 0,
                      url: 'https://www.barmeister.com/drinks/recipe/1299/?o=top100',
                    },
                    {
                      name: 'White Russian',
                      ingredients: '1 1/2 oz Vodka, 3/4 oz Kahlua, 3/4 oz Light Cream',
                      rating: 4.61,
                      drinkNumber: 1,
                      url: 'https://www.barmeister.com/drinks/recipe/1668/?o=top100',
                    },
                    {
                      name: '7 & 7',
                      ingredients: '1 Part Seagram\'s 7 Whiskey, 1 Part 7-Up',
                      rating: 4.6,
                      drinkNumber: 2,
                      url: 'http://www.barmeister.com/drinks/recipe/16/?o=top100',
                    },
                    {
                      name: 'Jäger Bomb',
                      ingredients: '1/2 can Red Bull, 1 oz Jägermeister',
                      rating: 4.55,
                      drinkNumber: 3,
                      url: 'http://www.barmeister.com/drinks/recipe/1813/?o=top100',
                    },
                    {
                      name: 'Screwdriver',
                      ingredients: '12 oz   Orange Juice, 3 oz Vodka',
                      rating: 4.55,
                      drinkNumber: 4,
                      url: 'http://www.barmeister.com/drinks/recipe/1345/?o=top100',
                    },
                    {
                      name: 'Jack and Coke',
                      ingredients: '1 part Jack Daniel\'s Whiskey, 1 part Coke',
                      rating: 4.54,
                      drinkNumber: 5,
                      url: 'http://www.barmeister.com/drinks/recipe/812/?o=top100',
                    },
                    {
                      name: 'Irish Car Bomb',
                      ingredients: '1/2 Pint Guinness Beer, 1/2 oz Bailey\'s Irish Cream, 1/2 oz Irish Whiskey',
                      rating: 4.52,
                      drinkNumber: 6,
                      url: 'http://www.barmeister.com/drinks/recipe/797/?o=top100',
                    },
                    {
                      name: 'Sex On the Beach',
                      ingredients: '1 oz    Vodka, 1/2 oz   Peach Schnapps, 1 dash Grenadine, Fill glass Orange Juice',
                      rating: 4.52,
                      drinkNumber: 7,
                      url: 'http://www.barmeister.com/drinks/recipe/1363/?o=top100',
                    },
                    {
                      name: 'Everclear Jello Shooter',
                      ingredients: '3 cups Water, 2 cups Everclear, 3 packages Jello',
                      rating: 4.51,
                      drinkNumber: 8,
                      url: 'http://www.barmeister.com/drinks/recipe/828/?o=top100',
                    },
                    {
                      name: 'Bushwacker',
                      ingredients: '1 oz Light Rum, 1 oz Dark Rum, 2 oz Kahlua, 2 oz Creme de Cacao, 1 oz Coco Lopez, 2 oz Bailey\'s Irish Cream, 1 oz Amaretto, 2 cup Ice, 1 dash Nutmeg, 1 scoop Whipped Cream',
                      rating: 4.51,
                      drinkNumber: 9,
                      url: 'http://www.barmeister.com/drinks/recipe/269/?o=top100',
                    },
                    {
                      name: 'Vodka Jello Shooter',
                      ingredients: '1 Package Jello, 1 Part Vodka, 1 Part Hot Water',
                      rating: 4.51,
                      drinkNumber: 10,
                      url: 'http://www.barmeister.com/drinks/recipe/827/?o=top100',
                    },
                    {
                      name: 'Midori Sour',
                      ingredients: '1 Part Midori Melon Liqueur, 1 Part Sour Mix',
                      rating: 4.51,
                      drinkNumber: 11,
                      url: 'http://www.barmeister.com/drinks/recipe/998/?o=top100',
                    },
                    {
                      name: 'Zombie',
                      ingredients: '1 oz Light Rum, 1 oz Amber Rum, 1 oz Dark Rum, 1/2 oz Cherry Bourbon, 1/2 oz Triple Sec, 2 oz Fruit Punch, 2 oz Pineapple Juice',
                      rating: 4.50,
                      drinkNumber: 12,
                      url: 'http://www.barmeister.com/drinks/recipe/1706/?o=top100',
                    },
                    {
                      name: 'Grasshopper',
                      ingredients: '3/4 oz Creme de Menthe, 1/2 oz White Creme de Cocoa, 2 1/2 scoops Vanilla Ice-Cream',
                      rating: 4.50,
                      drinkNumber: 13,
                      url: 'http://www.barmeister.com/drinks/recipe/706/?o=top100',
                    },
                    {
                      name: 'The Incredible Hulk',
                      ingredients: '2 oz Hpnotiq, 2 oz Hennessy Cognac',
                      rating: 4.50,
                      drinkNumber: 14,
                      url: 'http://www.barmeister.com/drinks/recipe/2038/?o=top100',
                    },
                    {
                      name: 'Chocolate Cake',
                      ingredients: '1/2 oz Vodka, 1/2 oz Frangelico',
                      rating: 4.50,
                      drinkNumber: 15,
                      url: 'http://www.barmeister.com/drinks/recipe/349/?o=top100',
                    },
                    {
                      name: 'Alabama Slammer',
                      ingredients: '1/2 oz Southern Comfort Whiskey, 1 oz Amaretto, 1/2 oz Sloe Gin, Splash Lemon Juice',
                      rating: 4.50,
                      drinkNumber: 16,
                      url: 'http://www.barmeister.com/drinks/recipe/43/?o=top100',
                    },
                    {
                      name: 'Mud Slide',
                      ingredients: '1 Part Vodka, 1 Part Kahlua, 1 Part Bailey\'s Irish Cream',
                      rating: 4.50,
                      drinkNumber: 17,
                      url: 'http://www.barmeister.com/drinks/recipe/1046/?o=top100',
                    },
                    {
                      name: 'Royal Flush',
                      ingredients: '1 oz Crown Royal Canadian Whiskey, 1 1/2 oz Triple Sec, 2 oz Peach Schnapps, Fill Glass with Cranberry Juice, Splash of Orange Juice',
                      rating: 4.50,
                      drinkNumber: 18,
                      url: 'http://www.barmeister.com/drinks/recipe/1297/?o=top100',
                    },
                    {
                      name: 'Mai Tai',
                      ingredients: '2 oz Bacardi Light Rum, 2 oz Pineapple Juice, 2 oz Orange Juice, 1/2 oz Grenadine, 1 oz Myer\'s Dark Rum 1/2 oz Triple Sec',
                      rating: 4.50,
                      drinkNumber: 19,
                      url: 'http://www.barmeister.com/drinks/recipe/953/?o=top100',
                    },
                    {
                      name: 'Amaretto Sour',
                      ingredients: '1 1/2 oz Amaretto, 1 Part 7-Up, 1 Part Sweet & Sour Mix',
                      rating: 4.49,
                      drinkNumber: 20,
                      url: 'http://www.barmeister.com/drinks/recipe/54/?o=top100',
                    },
                    {
                      name: 'Buttery Nipple',
                      ingredients: '3/4 oz Butterscotch Schnapps, 1/4 oz Bailey\'s Irish Cream',
                      rating: 4.49,
                      drinkNumber: 21,
                      url: 'http://www.barmeister.com/drinks/recipe/275/?o=top100',
                    },
                    {
                      name: 'Malibu and Coke',
                      ingredients: '2 oz Malibu Coconut Rum, 4 oz Coke',
                      rating: 4.49,
                      drinkNumber: 22,
                      url: 'http://www.barmeister.com/drinks/recipe/956/?o=top100',
                    },
                    {
                      name: 'Adios Mother Fucker',
                      ingredients: '3/4 oz Vodka, 3/4 oz Gin, 3/4 oz Rum, 3/4 oz Tequila, 3/4 oz Triple Sec, 1 1/2 oz Sweet & Sour Mix, 2 Splashes of Coke, 1 Dash Blue Curacao',
                      rating: 4.49,
                      drinkNumber: 23,
                      url: 'http://www.barmeister.com/drinks/recipe/35/?o=top100',
                    },
                    {
                      name: 'Washington Apple',
                      ingredients: '1 Part Crown Royal Canadian Whiskey, 1 Part Sour Apple Pucker, 1 Part Cranberry Juice',
                      rating: 4.49,
                      drinkNumber: 24,
                      url: 'http://www.barmeister.com/drinks/recipe/1736/?o=top100',
                    },
                    {
                      name: 'Scooby Snack',
                      ingredients: '1/2 oz Midori Melon Liqueur, 1/2 oz Malibu Coconut Rum, 1 Splash Pineapple Juice, 1 squirt Whipped Cream',
                      rating: 4.49,
                      drinkNumber: 25,
                      url: 'http://www.barmeister.com/drinks/recipe/1332/?o=top100',
                    },
                    {
                      name: 'Pineapple Upside Down Cake',
                      ingredients: '1/2 oz Pineapple Juice, 1/2 oz Vanilla Vodka, 1 Splash Grenadine',
                      rating: 4.49,
                      drinkNumber: 26,
                      url: 'http://www.barmeister.com/drinks/recipe/2040/?o=top100',
                    },
                    {
                      name: 'Monkey\'s Lunch',
                      ingredients: '1 oz Banana Liqueur, 1 oz Kahlua, Fill Glass with Milk',
                      rating: 4.49,
                      drinkNumber: 27,
                      url: 'http://www.barmeister.com/drinks/recipe/1023/?o=top100',
                    },
                    {
                      name: 'Kamikaze',
                      ingredients: '1 Part Vodka, 1 Part Triple Sec, 1 Part Lime Juice',
                      rating: 4.49,
                      drinkNumber: 28,
                      url: 'http://www.barmeister.com/drinks/recipe/862/?o=top100',
                    },
                    {
                      name: 'Cosmopolitan',
                      ingredients: '2 oz Vodka, 3/4 oz Triple Sec, 1 oz Lime Juice, 1 oz Cranberry Juice',
                      rating: 4.49,
                      drinkNumber: 29,
                      url: 'http://www.barmeister.com/drinks/recipe/399/?o=top100',
                    },
                    {
                      name: 'Appletini',
                      ingredients: '2 oz Vodka, 1 oz DeKuyper Apple Pucker Schnapps, 1 Dash Pineapple Juice, 1 Dash Sour Mix',
                      rating: 4.49,
                      drinkNumber: 30,
                      url: 'http://www.barmeister.com/drinks/recipe/1897/?o=top100',
                    },
                    {
                      name: 'Rocky Mountain Mother Fucker',
                      ingredients: '2 oz Southern Comfort Whiskey, 1 Part Amaretto, 1 Splash Lime Juice',
                      rating: 4.49,
                      drinkNumber: 31,
                      url: 'http://www.barmeister.com/drinks/recipe/1282/?o=top100',
                    },
                    {
                      name: 'Long Island Iced Tea',
                      ingredients: '3/4 oz Vodka, 3/4 oz Gin, 3/4 oz White Rum, 3/4 oz Tequila, 3/4 oz White Whiskey, 3/4 oz Triple Sec, 1 oz Lemon Juice, 1 Splash Coke',
                      rating: 4.49,
                      drinkNumber: 32,
                      url: 'http://www.barmeister.com/drinks/recipe/932/?o=top100',
                    },
                    {
                      name: 'Amar Stone Sour',
                      ingredients: '2 oz Amaretto, 2 oz Sweet & Sour Mix, Fill Glass with Orange Juice',
                      rating: 4.48,
                      drinkNumber: 33,
                      url: 'http://www.barmeister.com/drinks/recipe/55/?o=top100',
                    },
                    {
                      name: 'Paralyzer',
                      ingredients: '1 oz Vodka, 2 oz Kahlua, 3 cups Milk, 2.5 oz Coke',
                      rating: 4.48,
                      drinkNumber: 34,
                      url: 'http://www.barmeister.com/drinks/recipe/1126/?o=top100',
                    },
                    {
                      name: 'Cougar Juice',
                      ingredients: '1 Liter Big Red, 12 oz Absolut Mandrin Vodka',
                      rating: 4.48,
                      drinkNumber: 35,
                      url: 'http://www.barmeister.com/drinks/recipe/2405/?o=top100',
                    },
                    {
                      name: 'Pineapple Malibu',
                      ingredients: '1 Part Pineapple Juice, 1 Part Malibu Coconut Rum',
                      rating: 4.48,
                      drinkNumber: 36,
                      url: 'http://www.barmeister.com/drinks/recipe/1164/?o=top100',
                    },
                    {
                      name: 'Mojito',
                      ingredients: '2 1/2 oz Light Rum, 1 oz Lime Juice, 2 tbsp Sugar, 1 Pinch Mint, Fill Glass with Soda Water',
                      rating: 4.48,
                      drinkNumber: 37,
                      url: 'http://www.barmeister.com/drinks/recipe/1016/?o=top100',
                    },
                    {
                      name: 'Black and Tan',
                      ingredients: '1/2 Pint Guinness Draught, 1/2 Pint Bass Pale Ale',
                      rating: 4.48,
                      drinkNumber: 38,
                      url: 'http://www.barmeister.com/drinks/recipe/160/?o=top100',
                    },
                    {
                      name: 'Toasted Almond',
                      ingredients: '2 oz Amaretto, 2 oz Kahlua, 2 oz Light Cream',
                      rating: 4.48,
                      drinkNumber: 39,
                      url: 'http://www.barmeister.com/drinks/recipe/1573/?o=top100',
                    },
                    {
                      name: 'Leg Spreader',
                      ingredients: '2 oz Captain Morgan\'s Spiced Rum, 2 oz Malibu Coconut Rum, 2 oz Peach Schnapps, 5 oz Pineapple Juice',
                      rating: 4.48,
                      drinkNumber: 40,
                      url: 'http://www.barmeister.com/drinks/recipe/896/?o=top100',
                    },
                    {
                      name: 'Dark and Stormy',
                      ingredients: '1 Part Black Rum, 2 Part Ginger Beer',
                      rating: 4.48,
                      drinkNumber: 41,
                      url: 'http://www.barmeister.com/drinks/recipe/442/?o=top100',
                    },
                    {
                      name: 'Oatmeal Cookie',
                      ingredients: '1 part Bailey\'s Irish Cream, 1 Part Butterscotch Schnapps, 1 Part Goldschlager',
                      rating: 4.48,
                      drinkNumber: 42,
                      url: 'http://www.barmeister.com/drinks/recipe/1092/?o=top100',
                    },
                    {
                      name: 'Grateful Dead',
                      ingredients: '1/4 oz Vodka, 1/4 oz Rum, 1/4 oz Tequila, 1/4 oz Triple Sec, 1/4 oz Chambord',
                      rating: 4.47,
                      drinkNumber: 43,
                      url: 'http://www.barmeister.com/drinks/recipe/707/?o=top100',
                    },
                    {
                      name: 'Caraboulou',
                      ingredients: '1 oz 151 Proof Rum, 2 oz Malibu Coconut Rum, 3/4 glass Pineapple Juice',
                      rating: 4.47,
                      drinkNumber: 44,
                      url: 'http://www.barmeister.com/drinks/recipe/1869/?o=top100',
                    },
                    {
                      name: 'Wisconsin Lunchbox',
                      ingredients: '2 parts light Beer (Milwaukees best for greatest effect), 1 part Orange Juice, 1 oz Amaretto',
                      rating: 4.47,
                      drinkNumber: 45,
                      url: 'http://www.barmeister.com/drinks/recipe/1683/?o=top100',
                    },
                    {
                      name: 'Screaming Blue Motherfucker',
                      ingredients: '1 oz Vodka, 1 oz Gin, 1 oz Rum, 1 oz Tequila, 1/2 oz Triple Sec, 1 oz Blue Curacao. Strap in and pray you dont die.',
                      rating: 4.47,
                      drinkNumber: 46,
                      url: 'http://www.barmeister.com/drinks/recipe/1333/?o=top100'
                    },
                    {
                      name: 'Rusty Nail',
                      ingredients: '1 part Drambuie, 1 part Scotch',
                      rating: 4.47,
                      drinkNumber: 47,
                      url: 'http://www.barmeister.com/drinks/recipe/1311/?o=top100'
                    },
                    {
                      name: 'Skittle Vodka',
                      ingredients: '1 liter Vodka, 1 bag Skittles',
                      rating: 4.47,
                      drinkNumber: 48,
                      url: 'http://www.barmeister.com/drinks/recipe/1916/?o=top100'
                    },
                    {
                      name: 'Virginia Snakebite',
                      ingredients: '1/2 pint Guinness, 1/2 pint Bold Rock Hard Cider, 1 1/2 oz Vodka',
                      rating: 4.47,
                      drinkNumber: 49,
                      url: 'http://www.barmeister.com/drinks/recipe/60/?o=top100'
                    },
                    {
                      name: 'Margarita',
                      ingredients: '1 1/2 oz Tequila, 1/2 oz Triple Sec, 1 oz Lime Juice, Salt',
                      rating: 4.47,
                      drinkNumber: 50,
                      url: 'http://www.barmeister.com/drinks/recipe/1749/?o=top100'
                    },
                    {
                      name: 'Colorado Bulldog',
                      ingredients: '1 oz Vodka, 1 oz Kahlua, splash of Coke, fill glass with Milk. Tastes like chocolate milk, apparently.',
                      rating: 4.47,
                      drinkNumber: 51,
                      url: 'http://www.barmeister.com/drinks/recipe/386/?o=top100'
                    },
                    {
                      name: 'Four Horsemen',
                      ingredients: '1 part 151 Proof Rum, 1 part Jägermeister, 1 part Rumpleminze, 1 part Goldschlager',
                      rating: 4.47,
                      drinkNumber: 52,
                      url: 'http://www.barmeister.com/drinks/recipe/598/?o=top100'
                    },
                    {
                      name: 'B-52',
                      ingredients: '1 part Kahlua, 1 part Grand Marnier, 1 part Bailey\'s Irish Cream',
                      rating: 4.47,
                      drinkNumber: 53,
                      url: 'http://www.barmeister.com/drinks/recipe/102/?o=top100'
                    },
                    {
                      name: 'Red Death',
                      ingredients: '1 oz Vodka, 1 oz Triple Sec, 1/2 oz Lime Juice, 1/2 oz Southern Comfort Whiskey, 1 oz Amaretto, 1/2 oz Sloe Gin, splash Lemon Juice',
                      rating: 4.46,
                      drinkNumber: 54,
                      url: 'http://www.barmeister.com/drinks/recipe/1248/?o=top100'
                    },
                    {
                      name: 'Pina Colada',
                      ingredients: '2 oz Coconut Rum, Pineapple, Ice-Cream, Ice',
                      rating: 4.46,
                      drinkNumber: 55,
                      url: 'http://www.barmeister.com/drinks/recipe/1161/?o=top100'
                    },
                    {
                      name: 'Shirley Temple',
                      ingredients: '1 glass Ginger Ale, 1 dash Grenadine, 1 oz Jameson. Will put hair on your chest.',
                      rating: 4.46,
                      drinkNumber: 56,
                      url: 'http://www.barmeister.com/drinks/recipe/1383/?o=top100'
                    },
                    {
                      name: 'Banana Mama',
                      ingredients: '1 cup Rum, splash of Grenadine, half Banana, cup of Pina Colada Mix, Ice',
                      rating: 4.46,
                      drinkNumber: 57,
                      url: 'http://www.barmeister.com/drinks/recipe/124/?o=top100'
                    },
                    {
                      name: 'Sex with an Alligator',
                      ingredients: '3/4 oz Midori Melon Liqueur, 3 dashes of Sweet and Sour Mix, 3/4 oz Raspberry Liqueur, 1/4 oz Jägermeister',
                      rating: 4.46,
                      drinkNumber: 58,
                      url: 'http://www.barmeister.com/drinks/recipe/1378/?o=top100'
                    },
                    {
                      name: 'Mind Eraser',
                      ingredients: '1 part Vodka, 1 part Kahlua, fill with 7-Up',
                      rating: 4.46,
                      drinkNumber: 59,
                      url: 'http://www.barmeister.com/drinks/recipe/1005/?o=top100'
                    },
                    {
                      name: 'Tequila Sunrise',
                      ingredients: '2 oz Tequila, 5 oz Orange Juice, 2 dashes Grenadine',
                      rating: 4.45,
                      drinkNumber: 60,
                      url: 'http://www.barmeister.com/drinks/recipe/1543/?o=top100'
                    },
                    {
                      name: 'Hurricane',
                      ingredients: '1 oz Vodka, 1 oz Gin, 1 oz Light Rum, 1/2 oz 151 Proof Rum, 1 oz Amaretto, 1 oz Triple Sec, 3 splashes of Grapefruit Juice and Pineapple Juice, dash of Grenadine',
                      rating: 4.45,
                      drinkNumber: 61,
                      url: 'http://www.barmeister.com/drinks/recipe/781/?o=top100'
                    },
                    {
                      name: 'Bay Breeze',
                      ingredients: '2 parts Coconut Rum, 1 part Pineapple Juice, 1 part Cranberry Juice',
                      rating: 4.45,
                      drinkNumber: 62,
                      url: 'http://www.barmeister.com/drinks/recipe/958/?o=top100'
                    },
                    {
                      name: 'Red Snapper',
                      ingredients: '1 1/2 oz Amaretto, 1 1/2 oz Whiskey, 3/4 oz Cranberry Juice',
                      rating: 4.45,
                      drinkNumber: 63,
                      url: 'http://www.barmeister.com/drinks/recipe/1261/?o=top100'
                    },
                    {
                      name: 'Friday Sign',
                      ingredients: '1 1/2 oz Spiced Rum, 3/4 oz Cointreau, 1 oz Tangelo Juice, 1 oz Lemon Juice',
                      rating: 4.45,
                      drinkNumber: 64,
                      url: 'http://www.barmeister.com/drinks/recipe/2022/?o=top100'
                    },
                    {
                      name: 'Yucca',
                      ingredients: '1 Fifth of Vodka or Tequila, 1/2 bag of Crushed Ice, cup of Sugar, 4 Lemon',
                      rating: 4.45,
                      drinkNumber: 65,
                      url: 'http://www.barmeister.com/drinks/recipe/1701/?o=top100'
                    },
                    {
                      name: 'Thug Passion',
                      ingredients: '3 parts Alize Cognac, 1 part Hennessy Cognac',
                      rating: 4.44,
                      drinkNumber: 66,
                      url: 'http://www.barmeister.com/drinks/recipe/1566/?o=top100'
                    },
                    {
                      name: 'China White',
                      ingredients: '3/4 oz Creme de Cacao, 1/4 oz Bailey\'s Irish Cream, teaspoon of Cinnamon',
                      rating: 4.44,
                      drinkNumber: 67,
                      url: 'http://www.barmeister.com/drinks/recipe/345/?o=top100'
                    },
                    {
                      name: 'Jamaican Ten Speed',
                      ingredients: '2 parts Malibu Rum, 1 part Banana Liqueur, 1 part Midori Melon Liqueur, 4 parts Light Cream, 4 parts Pineapple Juice',
                      rating: 4.44,
                      drinkNumber: 68,
                      url: 'http://www.barmeister.com/drinks/recipe/822/?o=top100'
                    },
                    {
                      name: 'Bloody Jim',
                      ingredients: '1 part Jim Bean Whiskey, 3 parts Cranberry Juice',
                      rating: 4.44,
                      drinkNumber: 69,
                      url: 'http://www.barmeister.com/drinks/recipe/194/?o=top100'
                    },
                    {
                      name: 'Caipirinha',
                      ingredients: '2 oz Cachaca Brandy, 3 teaspoons Sugar, 2 slices of Lime',
                      rating: 4.44,
                      drinkNumber: 70,
                      url: 'http://www.barmeister.com/drinks/recipe/283/?o=top100'
                    },
                    {
                      name: 'Bacardi O & 7Up',
                      ingredients: '2 oz Bacardi Orange Rum, fill with 7-Up',
                      rating: 4.43,
                      drinkNumber: 71,
                      url: 'http://www.barmeister.com/drinks/recipe/1871/?o=top100'
                    },
                    {
                      name: 'Sicilian Kiss',
                      ingredients: '1 part Amaretto, 1 part Southern Comfort Whiskey',
                      rating: 4.43,
                      drinkNumber: 72,
                      url: 'http://www.barmeister.com/drinks/recipe/1387/?o=top100'
                    },
                    {
                      name: 'Blue Hawaiian',
                      ingredients: '1 oz light Rum, 1 oz Blue Curacao, 1 oz Cream of Coconut, 2 oz Pineapple Juice, garnish with Pineapple and Cherry',
                      rating: 4.43,
                      drinkNumber: 73,
                      url: 'http://www.barmeister.com/drinks/recipe/204/?o=top100'
                    },
                    {
                      name: 'Melon Ball',
                      ingredients: '3 oz Malibu Coconut Rum, 3 oz Pineapple Juice, 1 oz Midori Melon Liqueur',
                      rating: 4.42,
                      drinkNumber: 74,
                      url: 'http://www.barmeister.com/drinks/recipe/981/?o=top100'
                    },
                    {
                      name: 'Nuts and Berries',
                      ingredients: '1 oz Chambord, 1 oz Frangelico, splash of Bailey\'s Irish Cream',
                      rating: 4.42,
                      drinkNumber: 75,
                      url: 'http://www.barmeister.com/drinks/recipe/1086/?o=top100'
                    },
                    {
                      name: 'Arnold Palmer',
                      ingredients: '3 oz Vodka, fill with equal parts Lemonade and Iced Tea',
                      rating: 4.41,
                      drinkNumber: 76,
                      url: 'http://www.barmeister.com/drinks/recipe/93/?o=top100'
                    },
                    {
                      name: 'Liquid Cocaine #7',
                      ingredients: '1 part Amaretto, 3 parts Southern Comfort Whiskey, 2 parts Pineapple Juice',
                      rating: 4.41,
                      drinkNumber: 77,
                      url: 'http://www.barmeister.com/drinks/recipe/918/?o=top100'
                    },
                    {
                      name: 'Flaming Dr. Pepper',
                      ingredients: '1 pint Beer, 1 oz Amaretto, 1 dash Everclear',
                      rating: 4.41,
                      drinkNumber: 78,
                      url: 'http://www.barmeister.com/drinks/recipe/578/?o=top100'
                    },
                    {
                      name: 'Red Headed Slut',
                      ingredients: '1 part Jägermeister, 1 part Vodka, 1 splash Cranberry Juice',
                      rating: 4.41,
                      drinkNumber: 79,
                      url: 'http://www.barmeister.com/drinks/recipe/1255/?o=top100'
                    },
                    {
                      name: 'Quick Fuck',
                      ingredients: '1 part Kahlua, 1 part Midori Melon Liqueur, 1 part Bailey\'s Irish Cream',
                      rating: 4.40,
                      drinkNumber: 80,
                      url: 'http://www.barmeister.com/drinks/recipe/1232/?o=top100'
                    },
                    {
                      name: 'Pearl Harbor',
                      ingredients: '1 oz Midori Melon Liqueur, 1/2 oz Vodka, fill with Pineapple Juice, garnish with Pineapple and Cherry',
                      rating: 4.40,
                      drinkNumber: 81,
                      url: 'http://www.barmeister.com/drinks/recipe/1142/?o=top100'
                    },
                    {
                      name: 'Hunch Punch',
                      ingredients: '25 oz Vodka, 25 oz Whiskey, 25 oz Rum, 1 package Kool-Aid dissolved in water. Serve with or without fruit. Be careful. ',
                      rating: 4.39,
                      drinkNumber: 82,
                      url: 'http://www.barmeister.com/drinks/recipe/780/?o=top100'
                    },
                    {
                      name: 'Cape Cod',
                      ingredients: '1 part Vodka, 2 part Cranberry Juice',
                      rating: 4.39,
                      drinkNumber: 83,
                      url: 'http://www.barmeister.com/drinks/recipe/297/?o=top100'
                    },
                    {
                      name: 'Red Devil',
                      ingredients: '1 oz Sloe Gin, 1/2 oz Southern Comfort Whiskey, 1/2 oz Amaretto, 1/2 oz Vodka, 1/2 oz Lime Juice, 1/2 oz Triple Sec, 5 oz Orange Juice',
                      rating: 4.38,
                      drinkNumber: 84,
                      url: 'http://www.barmeister.com/drinks/recipe/1251/?o=top100'
                    },
                    {
                      name: 'Gladiator',
                      ingredients: '1/2 oz Southern Comfort Whiskey, 1/2 oz Amaretto, 1 part 7-Up, 1 part Orange Juice',
                      rating: 4.38,
                      drinkNumber: 85,
                      url: 'http://www.barmeister.com/drinks/recipe/672/?o=top100'
                    },
                    {
                      name: 'Lemon Drop',
                      ingredients: '1 oz Vodka, a pinch of Sugar, a slice of Lemon',
                      rating: 4.35,
                      drinkNumber: 86,
                      url: 'http://www.barmeister.com/drinks/recipe/898/?o=top100'
                    },
                    {
                      name: 'Juicy Pussy',
                      ingredients: '3/4 oz Peach Schnapps, 1/4 oz Bailey\'s Irish Cream, 1/2 glass of Orange Juice',
                      rating: 4.36,
                      drinkNumber: 87,
                      url: 'http://www.barmeister.com/drinks/recipe/853/?o=top100'
                    },
                    {
                      name: 'Singapore Sling',
                      ingredients: '1 1/2 oz Gin, 1/2 oz Brandy, 3 dashes Benedictine, dash of Grenadine, dash of Lemon Juice, fill with Soda Water',
                      rating: 4.37,
                      drinkNumber: 88,
                      url: 'http://www.barmeister.com/drinks/recipe/1393/?o=top100'
                    }
                  ],
                };
    },

    getLocalStorage: function () {
        var drinkList = JSON.parse(localStorage.getItem('drinkList')) || null;
    },

    setLocalStorage: function () {
        //if(JSON.parse(localStorage.getItem('drinkList')) === null) {
            localStorage.setItem('drinkList', JSON.stringify(this.state.drinkList));
        //};
    },

    render: function () {
        this.getLocalStorage();
        this.setLocalStorage();
        return (
            <div>
              <div className='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
                {/*Make the header bigger and possibly cursive font*/}
                <h1> Mixology University </h1>
                {/*Need to link this button to List of Drinks, and add space between buttons*/}
                <Link to='/menu'>
                <div style={styles.space}><button type='button' className='btn btn-lg btn-secondary col-sm-6 col-sm-offset-3'> ◀︎ Menu  </button></div>
                </Link>
                <Link to='/homebrew'>
                <div className='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
                <img src='../../Two-Glasses-of-Beer-6.png' />
                </div>
                </Link>
                {/*Need to link this button to Nearest Bar page and make buttons bigger/darker*/}
                <Link to='/barpage'>
                <div style={styles.space}><button type='button' className='btn btn-lg btn-secondary col-sm-6 col-sm-offset-3'> Bars ▶︎ </button></div>
                </Link>
              </div>
            </div>
        );
      }
});

module.exports = Home;
