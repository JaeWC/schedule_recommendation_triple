getSatisfaction = (obj, json) => {
  let maxResult = 0;
  let placeResult;

  for (let i = 0; i < json.length; i++) {
    let placeInfo = JSON.parse(json[i]);
    let currentResult = 0;

    for (let j = 0; j < placeInfo.length; j++) {
      currentResult += obj[placeInfo[j]];
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
