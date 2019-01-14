const getPlaceOption = require('./getPlaceOption');
const getSatisfaction = require('./getSatisfaction');

scheduleRecommendation = stdin => {
  const inputArr = stdin.split('\n');
  const placeOption = Number(inputArr[0].split('')[0]);
  const maximumTime = Number(inputArr[0].split('')[1]);

  let placeInfo = [];
  for (let i = 1; i < inputArr.length; i++) {
    placeInfo.push(inputArr[i].split(','));
  }
  placeInfo = placeInfo.sort((a, b) => Number(b[1]) - Number(a[1]));

  let placeTimeObj = {};
  let placeSatisfyObj = {};

  for (let j = 0; j < placeInfo.length; j++) {
    placeTimeObj[placeInfo[j][0]] = Number(placeInfo[j][1]);
    placeSatisfyObj[placeInfo[j][0]] = Number(placeInfo[j][2]);
  }

  const placeListJSON = getPlaceOption(placeTimeObj, maximumTime);

  const stdout = getSatisfaction(placeSatisfyObj, placeListJSON);
  console.log('Final Result ::::::', stdout);
  return stdout;
};

var stdin = '45\n오사카성,2,5\n유니버설스튜디오,5,20\n도톤보리,1,10\n기온,3,20';
scheduleRecommendation(stdin);
