let latinMottos = ['', '', '', '', '', '', '', '', '', ''];
let aperitifs = ['Negroni', 'Aperol Spritz', 'Campari', 'Autumn Leaves', 'Martini', 'Gin Tonic', 'Manhatan', 'Margarita', 'Mojito', 'Cosmopolitan'];
let cuisines = ['French', 'Scandinavian', 'Middle East', 'Chinese', 'Japanese', 'Greek', 'Italian', 'Mediterranean', 'Indian', 'Near East'];
const eveningRecommendation = () => {
  let latinMotto = latinMottos[Math.floor(Math.random * 11)];
  let aperitif = aperitifs[Math.floor(Math.random * 11)];
  let cuisine = cuisines[Math.floor(Math.random * 11)];
  return `Your Latin motto for this evening is ${latinMotto}. 
  You should contemplate it while enjoying a glass of ${aperitif} and exquisite ${cuisine} cuisine.`;
};
console.log(eveningRecommendation);