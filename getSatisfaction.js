getSatisfaction = (placeSatisfyObj, placeListJSON) => {
  let maxResult = 0;
  let placeResult;

  for (let i = 0; i < placeListJSON.length; i++) {
    let placeInfo = JSON.parse(placeListJSON[i]);
    let currentResult = 0;

    for (let j = 0; j < placeInfo.length; j++) {
      currentResult += placeSatisfyObj[placeInfo[j]];
    }

    if (maxResult > currentResult) {
      maxResult;
      placeResult;
    } else if (maxResult < currentResult) {
      maxResult = currentResult;
      placeResult = placeInfo;
    } else {
      maxResult;
      placeResult = [placeResult, placeInfo];
    }
  }
  console.log('Final Schedul Recommendation :::::: ', placeResult);
  return maxResult;
};

module.exports = getSatisfaction;
