var React = require('react');
var styles = require('../styles');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Menu = React.createClass({

  componentWillMount: function () {
    this.setState({
      drinkList: [
        {
          name: 'Rum and Coke',
          ingredients: '1 Part Dark Rum, 2 Parts Coke',
          rating: 4.65,
          url: 'https://www.barmeister.com/drinks/recipe/1299/?o=top100',
        },
        {
          name: 'White Russian',
          ingredients: '1 1/2 oz Vodka, 3/4 oz Kahlua, 3/4 oz Light Cream',
          rating: 4.61,
          url: 'https://www.barmeister.com/drinks/recipe/1668/?o=top100',
        },
        {
          name: '7 & 7',
          ingredients: '1 Part Seagram\'s 7 Whiskey, 1 Part 7-Up',
          rating: 4.6,
          url: 'http://www.barmeister.com/drinks/recipe/16/?o=top100',
        },
        {
          name: 'Jäger Bomb',
          ingredients: '1/2 can Red Bull, 1 oz Jägermeister',
          rating: 4.55,
          url: 'http://www.barmeister.com/drinks/recipe/1813/?o=top100',
        },
        {
          name: 'Screwdriver',
          ingredients: '12 oz	Orange Juice, 3 oz	Vodka',
          rating: 4.55,
          url: 'http://www.barmeister.com/drinks/recipe/1345/?o=top100',
        },
        {
          name: 'Jack and Coke',
          ingredients: '1 part Jack Daniel\'s Whiskey, 1 part Coke',
          rating: 4.54,
          url: 'http://www.barmeister.com/drinks/recipe/812/?o=top100',
        },
        {
          name: 'Irish Car Bomb',
          ingredients: '1/2 Pint Guinness Beer, 1/2 oz Bailey\'s Irish Cream, 1/2 oz Irish Whiskey',
          rating: 4.52,
          url: 'http://www.barmeister.com/drinks/recipe/797/?o=top100',
        },
        {
          name: 'Sex On the Beach',
          ingredients: '1 oz	Vodka, 1/2 oz	Peach Schnapps, 1 dash Grenadine, Fill glass Orange Juice',
          rating: 4.52,
          url: 'http://www.barmeister.com/drinks/recipe/1363/?o=top100',
        },
        {
          name: 'Everclear Jello Shooter',
          ingredients: '3 cups Water, 2 cups Everclear, 3 packages Jello',
          rating: 4.51,
          url: 'http://www.barmeister.com/drinks/recipe/828/?o=top100',
        },
        {
          name: 'Bushwacker',
          ingredients: '1 oz	Light Rum, 1 oz	Dark Rum, 2 oz	Kahlua, 2 oz	Creme de Cacao, 1 oz	Coco Lopez, 2 oz	Bailey\'s Irish Cream, 1 oz	Amaretto, 2 cup Ice, 1 dash Nutmeg, 1 scoop	Whipped Cream',
          rating: 4.51,
          url: 'http://www.barmeister.com/drinks/recipe/269/?o=top100',
        },
        {
          name: 'Vodka Jello Shooter',
          ingredients: '1 Package Jello, 1 Part Vodka, 1 Part Hot Water',
          rating: 4.51,
          url: 'http://www.barmeister.com/drinks/recipe/827/?o=top100',
        },
        {
          name: 'Midori Sour',
          ingredients: '1 Part Midori Melon Liqueur, 1 Part Sour Mix',
          rating: 4.51,
          url: 'http://www.barmeister.com/drinks/recipe/998/?o=top100',
        },
        {
          name: 'Zombie',
          ingredients: '1 oz Light Rum, 1 oz Amber Rum, 1 oz Dark Rum, 1/2 oz	Cherry Bourbon, 1/2 oz Triple Sec, 2 oz	Fruit Punch, 2 oz	Pineapple Juice',
          rating: 4.50,
          url: 'http://www.barmeister.com/drinks/recipe/1706/?o=top100',
        },
        {
          name: 'Grasshopper',
          ingredients: '3/4 oz Creme de Menthe, 1/2 oz White Creme de Cocoa, 2 1/2 scoops Vanilla Ice Cream',
          rating: 4.50,
          url: 'http://www.barmeister.com/drinks/recipe/706/?o=top100',
        },
        {
          name: 'The Incredible Hulk',
          ingredients: '2 oz Hpnotiq, 2 oz Hennessy Cognac',
          rating: 4.50,
          url: 'http://www.barmeister.com/drinks/recipe/2038/?o=top100',
        },
        {
          name: 'Chocolate Cake',
          ingredients: '1/2 oz Vodka, 1/2 oz Frangelico',
          rating: 4.50,
          url: 'http://www.barmeister.com/drinks/recipe/349/?o=top100',
        },
        {
          name: 'Alabama Slammer',
          ingredients: '1/2 oz Southern Comfort, 1 oz Amaretto, 1/2 oz Sloe Gin, Splasf Lemon Juice',
          rating: 4.50,
          url: 'http://www.barmeister.com/drinks/recipe/43/?o=top100',
        },
        {
          name: 'Mud Slide',
          ingredients: '1 Part Vodka, 1 Part Kaklua, 1 Part Bailey\'s Irish Cream',
          rating: 4.50,
          url: 'http://www.barmeister.com/drinks/recipe/1046/?o=top100',
        },
        {
          name: 'Royal Flush',
          ingredients: '1 oz Crown Royal Canadian Whiskey, 1 1/2 oz Triple Sec, 2 oz Peach Schnapps, Fill Glass with Cranberry Juice, Splash of Orange Juice',
          rating: 4.50,
          url: 'http://www.barmeister.com/drinks/recipe/1297/?o=top100',
        },
        {
          name: 'Mai Tai',
          ingredients: '2 oz Bacardi Light Rum, 2 oz Pineapple Juice, 2 oz Orange Juice, 1/2 oz Grenadine, 1 oz Myer\'s Dark Rum 1/2 oz Triple Sec',
          rating: 4.50,
          url: 'http://www.barmeister.com/drinks/recipe/953/?o=top100',
        },
        {
          name: 'Amaretto Sour',
          ingredients: '1 1/2 oz Amaretto, 1 Part 7-Up, 1 Part Sweet & Sour Mix',
          rating: 4.49,
          url: 'http://www.barmeister.com/drinks/recipe/54/?o=top100',
        },
        {
          name: 'Buttery Nipple',
          ingredients: '3/4 oz Butterscotch Schnapps, 1/4 oz Bailey\'s Irish Cream',
          rating: 4.49,
          url: 'http://www.barmeister.com/drinks/recipe/275/?o=top100',
        },
        {
          name: 'Malibu and Coke',
          ingredients: '2 oz Malibu Coconut Rum, 4 oz Coke',
          rating: 4.49,
          url: 'http://www.barmeister.com/drinks/recipe/956/?o=top100',
        },
        {
          name: 'Adios Mother Fucker',
          ingredients: '3/4 oz Vodka, 3/4 oz Gin, 3/4 oz Rum, 3/4 oz Tequila, 3/4 oz Triple Sec, 1 1/2 oz Sweet & Sour Mix, 2 Splashes of Coke, 1 Dash Blue Curacao',
          rating: 4.49,
          url: 'http://www.barmeister.com/drinks/recipe/35/?o=top100',
        },
        {
          name: 'Washington Apple',
          ingredients: '1 Part Crown Royal Canadian Whiskey, 1 Part Sour Apple Pucker, 1 Part Cranberry Juice',
          rating: 4.49,
          url: 'http://www.barmeister.com/drinks/recipe/1736/?o=top100',
        },
        {
          name: 'Scooby Snack',
          ingredients: '1/2 oz Midori Melon Liqueur, 1/2 oz Malibu Coconut Rum, 1 Splash Pineapple Juice, 1 squirt Whipped Cream',
          rating: 4.49,
          url: 'http://www.barmeister.com/drinks/recipe/1332/?o=top100',
        },
        {
          name: 'Pineapple Upside Down Cake',
          ingredients: '1/2 oz Pineapple Juice, 1/2 oz Vanilla Vodka, 1 Splash Grenadine',
          rating: 4.49,
          url: 'http://www.barmeister.com/drinks/recipe/2040/?o=top100',
        },
        {
          name: 'Monkey\'s Lunch',
          ingredients: '1 oz Banana Liqueur, 1 oz Kahlua, Fill Glass with Milk',
          rating: 4.49,
          url: 'http://www.barmeister.com/drinks/recipe/1023/?o=top100',
        },
        {
          name: 'Kamikaze',
          ingredients: '1 Part Vodka, 1 Part Triple Sec, 1 Part Lime Juice',
          rating: 4.49,
          url: 'http://www.barmeister.com/drinks/recipe/862/?o=top100',
        },
        {
          name: 'Cosmopolitan',
          ingredients: '2 oz Vodka, 3/4 oz Triple Sec, 1 oz Lime Juice, 1 oz Cranberry Juice',
          rating: 4.49,
          url: 'http://www.barmeister.com/drinks/recipe/399/?o=top100',
        },
        {
          name: 'Appletini',
          ingredients: '2 oz Vodka, 1 oz DeKuyper Apple Pucker Schnapps, 1 Dash Pineapple Juice, 1 Dash Sour Mix',
          rating: 4.49,
          url: 'http://www.barmeister.com/drinks/recipe/1897/?o=top100',
        },
        {
          name: 'Rocky Mountain Mother Fucker',
          ingredients: '2 oz Southern Comfort, 1 Part Amaretto, 1 Splash Lime Juice',
          rating: 4.49,
          url: 'http://www.barmeister.com/drinks/recipe/1282/?o=top100',
        },
        {
          name: 'Long Island Iced Tea',
          ingredients: '3/4 oz Vodka, 3/4 oz Gin, 3/4 oz White Rum, 3/4 oz Tequila, 3/4 oz White Whiskey, 3/4 oz Triple Sec, 1 oz Lemon Juice, 1 Splash Coke',
          rating: 4.49,
          url: 'http://www.barmeister.com/drinks/recipe/932/?o=top100',
        },
        {
          name: 'Amar Stone Sour',
          ingredients: '2 oz Amaretto, 2 oz Sweet & Sour Mix, Fill Glass with Orange Juice',
          rating: 4.48,
          url: 'http://www.barmeister.com/drinks/recipe/55/?o=top100',
        },
        {
          name: 'Paralyzer',
          ingredients: '1 oz Vodka, 2 oz Kahlua, 3 cups Milk, 2.5 oz Coke',
          rating: 4.48,
          url: 'http://www.barmeister.com/drinks/recipe/1126/?o=top100',
        },
        {
          name: 'Cougar Juice',
          ingredients: '1 Liter Big Red, 12 oz Absolut Mandrin Vodka',
          rating: 4.48,
          url: 'http://www.barmeister.com/drinks/recipe/2405/?o=top100',
        },
        {
          name: 'Pineapple Malibu',
          ingredients: '1 Part Pineapple Juice, 1 Part Malibu Coconut Rum',
          rating: 4.48,
          url: 'http://www.barmeister.com/drinks/recipe/1164/?o=top100',
        },
        {
          name: 'Mojito',
          ingredients: '2 1/2 oz Light Rum, 1 oz Lime Juice, 2 tbsp Sugar, 1 Pinch Mint, Fill Glass with Soda Water',
          rating: 4.48,
          url: 'http://www.barmeister.com/drinks/recipe/1016/?o=top100',
        },
        {
          name: 'Black and Tan',
          ingredients: '1/2 Pint Guinness Draught, 1/2 Pint Bass Pale Ale',
          rating: 4.48,
          url: 'http://www.barmeister.com/drinks/recipe/160/?o=top100',
        },
        {
          name: 'Toasted Almond',
          ingredients: '2 oz Amaretto, 2 oz Kahlua, 2 oz Light Cream',
          rating: 4.48,
          url: 'http://www.barmeister.com/drinks/recipe/1573/?o=top100',
        },
        {
          name: 'Leg Spreader',
          ingredients: '2 oz Captain Morgan\'s Spiced Rum, 2 oz Malibu Coconut Rum, 2 oz Peach Schnapps, 5 oz Pineapple Juice',
          rating: 4.48,
          url: 'http://www.barmeister.com/drinks/recipe/896/?o=top100',
        },
        {
          name: 'Dark and Stormy',
          ingredients: '1 Part Black Rum, 2 Part Ginger Beer',
          rating: 4.48,
          url: 'http://www.barmeister.com/drinks/recipe/442/?o=top100',
        },
        {
          name: 'Oatmeal Cookie',
          ingredients: '1 part Bailey\'s Irish Cream, 1 Part Butterscotch Schnapps, 1 Part Goldschlager',
          rating: 4.48,
          url: 'http://www.barmeister.com/drinks/recipe/1092/?o=top100',
        },
        {
          name: 'Grateful Dead',
          ingredients: '1/4 oz Vodka, 1/4 oz Rum, 1/4 oz Tequila, 1/4 oz Triple Sec, 1/4 oz Chambord',
          rating: 4.47,
          url: 'http://www.barmeister.com/drinks/recipe/707/?o=top100',
        },
        {
          name: 'Caraboulou',
          ingredients: '1 oz 151 Proof Rum, 2 oz Malibu Coconut Rum, 3/4 glass Pineapple Juice',
          rating: 4.47,
          url: 'http://www.barmeister.com/drinks/recipe/1869/?o=top100',
        },
        {
          name: 'Wisconsin Lunchbox',
          ingredients: '2 parts light beer (Milwaukees best for greatest effect), 1 part orange juice, 1 oz Amaretto',
          rating: 4.47,
          url: 'http://www.barmeister.com/drinks/recipe/1683/?o=top100',
        },
        {
          name: 'Screaming Blue Motherfucker',
          ingredients: '1 oz vodka, 1 oz gin, 1 oz rum, 1 oz tequila, 1/2 oz triple sec, 1 oz blue curacao. Strap in and pray you dont die.',
          rating: 4.47,
          url: 'http://www.barmeister.com/drinks/recipe/1333/?o=top100'
        },
        {
          name: 'Rusty Nail',
          ingredients: '1 part Drambuie, 1 part scotch',
          rating: 4.47,
          url: 'http://www.barmeister.com/drinks/recipe/1311/?o=top100'
        },
        {
          name: 'Skittle Vodka',
          ingredients: '1 liter vodka, 1 bag skittles',
          rating: 4.47,
          url: 'http://www.barmeister.com/drinks/recipe/1916/?o=top100'
        },
        {
          name: 'Virginia Snakebite',
          ingredients: '1/2 pint Guinness, 1/2 pint Bold Rock Hard Cider, 1 1/2 shot vodka',
          rating: 4.47,
          url: 'http://www.barmeister.com/drinks/recipe/60/?o=top100'
        },
        {
          name: 'Margarita',
          ingredients: '1 1/2 oz tequila, 1/2 oz triple sec, 1 oz lime juice, salt',
          rating: 4.47,
          url: 'http://www.barmeister.com/drinks/recipe/1749/?o=top100'
        },
        {
          name: 'Colorado Bulldog',
          ingredients: '1 oz vodka, 1 oz Kahlua, splash of Coke, fill glass with milk. Tastes like chocolate milk, apparently.',
          rating: 4.47,
          url: 'http://www.barmeister.com/drinks/recipe/386/?o=top100'
        },
        {
          name: 'Four Horsemen',
          ingredients: '1 part 151 proof rum, 1 part Jagermeister, 1 part rumpleminze, 1 part goldschlager',
          rating: 4.47,
          url: 'http://www.barmeister.com/drinks/recipe/598/?o=top100'
        },
        {
          name: 'B-52',
          ingredients: '1 part Kahlua, 1 part grand marnier, 1 part Baileys',
          rating: 4.47,
          url: 'http://www.barmeister.com/drinks/recipe/102/?o=top100'
        },
        {
          name: 'Red Death',
          ingredients: '1 oz vodka, 1 oz triple sec, 1/2 oz lime juice, 1/2 oz Southern Comfort, 1 oz Amaretto, 1/2 oz sloe gin, dash of lemon juice',
          rating: 4.46,
          url: 'http://www.barmeister.com/drinks/recipe/1248/?o=top100'
        },
        {
          name: 'Pina Colada',
          ingredients: '2 oz coconut rum, pineapple, ice cream, ice',
          rating: 4.46,
          url: 'http://www.barmeister.com/drinks/recipe/1161/?o=top100'
        },
        {
          name: 'Shirley Temple',
          ingredients: '1 glass ginger ale, 1 dash grenadine, shot of Jameson. Will put hair on your chest.',
          rating: 4.46,
          url: 'http://www.barmeister.com/drinks/recipe/1383/?o=top100'
        },
        {
          name: 'Banana Mama',
          ingredients: '1 cup rum, splash of grenadine, half banana, cup of pina colada mix, ice',
          rating: 4.46,
          url: 'http://www.barmeister.com/drinks/recipe/124/?o=top100'
        },
        {
          name: 'Sex with an Alligator',
          ingredients: '3/4 oz Midori melon liqueur, 3 dashes of sweet and sour mix, 3/4 raspberry liqueur, 1/4 oz Jagermeister',
          rating: 4.46,
          url: 'http://www.barmeister.com/drinks/recipe/1378/?o=top100'
        },
        {
          name: 'Mind Eraser',
          ingredients: '1 part vodka, 1 part Kahlua, fill with 7Up',
          rating: 4.46,
          url: 'http://www.barmeister.com/drinks/recipe/1005/?o=top100'
        },
        {
          name: 'Tequila Sunrise',
          ingredients: '2 oz tequila, 5 oz orange juice, 2 dashes grenadine',
          rating: 4.45,
          url: 'http://www.barmeister.com/drinks/recipe/1543/?o=top100'
        },
        {
          name: 'Hurricane',
          ingredients: '1 oz vodka, 1 oz gin, 1 oz light rum, 1/2 oz 151 proof rum, 1 oz Amaretto, 1 oz Triple sec, 3 splashes of grapefruit and pineapple juices, dash of grenadine',
          rating: 4.45,
          url: 'http://www.barmeister.com/drinks/recipe/781/?o=top100'
        },
        {
          name: 'Bay Breeze',
          ingredients: '2 parts coconut rum, 1 part pineapple juice, 1 part cranberry juice',
          rating: 4.45,
          url: 'http://www.barmeister.com/drinks/recipe/958/?o=top100'
        },
        {
          name: 'Red Snapper',
          ingredients: '1 1/2 oz Amaretto, 1 1/2 oz whiskey, 3/4 oz cranberry juice',
          rating: 4.45,
          url: 'http://www.barmeister.com/drinks/recipe/1261/?o=top100'
        },
        {
          name: 'Friday Sign',
          ingredients: '1 1/2 oz spiced rum, 3/4 oz cointreau, 1 oz Tangelo juice, 1 oz lemon juice',
          rating: 4.45,
          url: 'http://www.barmeister.com/drinks/recipe/2022/?o=top100'
        },
        {
          name: 'Yucca',
          ingredients: '1 fifth of vodka/tequila, 1/2 bag of crushed ice, cup of sugar, 4 lemons',
          rating: 4.45,
          url: 'http://www.barmeister.com/drinks/recipe/1701/?o=top100'
        },
        {
          name: 'Thug Passion',
          ingredients: '3 parts Alize cognac, 1 part Hennessy',
          rating: 4.44,
          url: 'http://www.barmeister.com/drinks/recipe/1566/?o=top100'
        },
        {
          name: 'China White',
          ingredients: '3/4 oz Creme de Cacao, 1/4 oz Baileys Irish Cream, teaspoon of cinnamon',
          rating: 4.44,
          url: 'http://www.barmeister.com/drinks/recipe/345/?o=top100'
        },
        {
          name: 'Jamaican Ten Speed',
          ingredients: '2 parts Malibu, 1 part banana liqueur, 1 part Midori melon liqueur, 4 parts cream, 4 parts pineapple juice',
          rating: 4.44,
          url: 'http://www.barmeister.com/drinks/recipe/822/?o=top100'
        },
        {
          name: 'Bloody Jim',
          ingredients: '1 part Jim Bean, 3 parts cranberry juice',
          rating: 4.44,
          url: 'http://www.barmeister.com/drinks/recipe/194/?o=top100'
        },
        {
          name: 'Caipirinha',
          ingredients: '2 oz Cachaca brandy, 3 teaspoons sugar, 2 slices of lime',
          rating: 4.44,
          url: 'http://www.barmeister.com/drinks/recipe/283/?o=top100'
        },
        {
          name: 'Bacardi O & 7Up',
          ingredients: '2 oz Bacardi Orange rum, fill with 7Up',
          rating: 4.43,
          url: 'http://www.barmeister.com/drinks/recipe/1871/?o=top100'
        },
        {
          name: 'Sicilian Kiss',
          ingredients: '1 part Amaretto, 1 part Southern Comfort ',
          rating: 4.43,
          url: 'http://www.barmeister.com/drinks/recipe/1387/?o=top100'
        },
        {
          name: 'Blue Hawaiian',
          ingredients: '1 oz light rum, 1 oz blue curacao, 1 oz cream of coconut, 2 oz pineapple juice, garnish with pineapple and cherry',
          rating: 4.43,
          url: 'http://www.barmeister.com/drinks/recipe/204/?o=top100'
        },
        {
          name: 'Melon Ball',
          ingredients: '3 oz Malibu coconut rum, 3 oz pineapple juice, 1 oz melon liqueur',
          rating: 4.42,
          url: 'http://www.barmeister.com/drinks/recipe/981/?o=top100'
        },
        {
          name: 'Nuts and Berries',
          ingredients: '1 oz Chambord, 1 oz Frangelico, splash of Baileys Irish Cream',
          rating: 4.42,
          url: 'http://www.barmeister.com/drinks/recipe/1086/?o=top100'
        },
        {
          name: 'Arnold Palmer',
          ingredients: '3 oz vodka, fill with equal parts lemonade and iced tea',
          rating: 4.41,
          url: 'http://www.barmeister.com/drinks/recipe/93/?o=top100'
        },
        {
          name: 'Liquid Cocaine #7',
          ingredients: '1 part Amaretto, 3 parts Southern Comfort, 2 parts pineapple juice',
          rating: 4.41,
          url: 'http://www.barmeister.com/drinks/recipe/918/?o=top100'
        },
        {
          name: 'Flaming Dr. Pepper',
          ingredients: '1 pint beer, 1 oz Amaretto, 1 dash Everclear',
          rating: 4.41,
          url: 'http://www.barmeister.com/drinks/recipe/578/?o=top100'
        },
        {
          name: 'Red Headed Slut',
          ingredients: '1 part Jagermeister, 1 part Vodka, 1 splash cranberry juice',
          rating: 4.41,
          url: 'http://www.barmeister.com/drinks/recipe/1255/?o=top100'
        },
        {
          name: 'Quick Fuck',
          ingredients: '1 part Kahlua, 1 part Midori Melon Liqueur, 1 part Bailey\'s Irish Cream',
          rating: 4.40,
          url: 'http://www.barmeister.com/drinks/recipe/1232/?o=top100'
        },
        {
          name: 'Pearl Harbor',
          ingredients: '1 oz Midori Melon Liqueur, 1/2 oz vodka, fill with pineapple juice, garnish with pineapple and cherry',
          rating: 4.40,
          url: 'http://www.barmeister.com/drinks/recipe/1142/?o=top100'
        },
        {
          name: 'Hunch Punch',
          ingredients: '25 oz Vodka, 25 oz Whiskey, 25 oz Rum, 1 package Kool-Aid dissolved in water. Serve with or without fruit. Be careful. ',
          rating: 4.39,
          url: 'http://www.barmeister.com/drinks/recipe/780/?o=top100'
        },
        {
          name: 'Cape Cod',
          ingredients: '1 part vodka, 2 part cranberry juice',
          rating: 4.39,
          url: 'http://www.barmeister.com/drinks/recipe/297/?o=top100'
        },
        {
          name: 'Red Devil',
          ingredients: '1 oz Sloe gin, 1/2 oz Southern Comfort, 1/2 oz Amaretto, 1/2 oz Vodka, 1/2 oz lime juice, 1/2 oz Triple Sec, 5 oz Orange Juice',
          rating: 4.38,
          url: 'http://www.barmeister.com/drinks/recipe/1251/?o=top100'
        },
        {
          name: 'Gladiator',
          ingredients: '1/2 oz Southern Comfort, 1/2 oz Amaretto, 1 part 7Up, 1 part Orange Juice',
          rating: 4.38,
          url: 'http://www.barmeister.com/drinks/recipe/672/?o=top100'
        },
        {
          name: 'Lemon Drop',
          ingredients: '1 oz vodka, a pinch of sugar, a slice of lemon',
          rating: 4.35,
          url: 'http://www.barmeister.com/drinks/recipe/898/?o=top100'
        },
        {
          name: 'Juicy Pussy',
          ingredients: '3/4 oz Peach Schnapps, 1/4 oz Bailey\'s Irish Cream, 1/2 glass of orange juice',
          rating: 4.36,
          url: 'http://www.barmeister.com/drinks/recipe/853/?o=top100'
        },
        {
          name: 'Singapore Sling',
          ingredients: '1 1/2 oz Gin, 1/2 oz Brandy, 3 dashes benedictine, dash of grenadine, dash of lemon juice, fill with club soda',
          rating: 4.37,
          url: 'http://www.barmeister.com/drinks/recipe/1393/?o=top100'
        }
      ],
    });
    return {};
  },

  drinkListReturn: function () {
    return this.state.drinkList.map(function (name, index) {
      //console.log({name});
      //Need URL with <a></a>
      return <li><a href={name.url} class="list-group-item active"><h4 key={index}>{name.name}</h4><p>{name.ingredients}</p></a></li>;
    });
  },

  popularSort: function () {
    this.state.drinkList.sort(function (drink1, drink2) {
      return drink2.rating - drink1.rating;
    });
    this.setState({

    });
  },

  alphabeticalSort: function () {
    this.state.drinkList.sort(function (index1, index2) {
        var drink1 = index1.name;
        var drink2 = index2.name;
        if (drink1 < drink2) {
          return -1;
        }

        if (drink1 > drink2) {
          return 1;
        }

      // names must be equal
      return 0;
      });

      this.setState({

      });

  },

  render: function () {
      return (

      <div>
        <Link to='/'>
        <div className="col-sm-10"> </div>
        <button type='button' className='btn btn-secondary col-sm-2' > Home </button>
        </Link>
        <div className ='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
          <h1><i>Cocktail Menu</i></h1>
          <button type='button' className='btn btn-lg btn-secondary' style={styles.rightspace} onClick={this.popularSort}>Popular</button>
          <button type='button' className='btn btn-lg btn-secondary' onClick={this.alphabeticalSort}>Alphabetical</button>
        </div>
        <div className ='jumbotron col-sm-12'>
          <ol class="list-group">
            {this.drinkListReturn()}
          </ol>
        </div>
      </div>

      );
    },
});

module.exports = Menu;
