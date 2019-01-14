getPlaceOption = (placeTimeObj, maximumTime) => {
  const travelTime = maximumTime;
  const placeName = Object.keys(placeTimeObj);

  let recommendation = [];
  for (let i = 0; i < placeName.length - 1; i++) {
    currentPlace = placeName[i];

    let inner = [];
    let currentTime = 0;

    if (placeTimeObj[currentPlace] > travelTime) {
      continue;
    } else if (placeTimeObj[currentPlace] === travelTime) {
      placeOption = JSON.stringify([currentPlace]);
      recommendation.push(placeOption);
      continue;
    } else {
      currentTime += placeTimeObj[currentPlace];
      inner.push(currentPlace);

      for (let j = i + 1; j < placeName.length; j++) {
        newPlace = placeName[j];

        currentTime += placeTimeObj[newPlace];
        inner.push(newPlace);

        if (currentTime < travelTime) {
          recommendation.push(JSON.stringify(inner));
          continue;
        } else if (currentTime > travelTime) {
          currentTime -= placeTimeObj[newPlace];
          inner.pop();
        } else {
          recommendation.push(JSON.stringify(inner));
          currentTime -= placeTimeObj[newPlace];
          inner.pop();

          continue;
        }
      }
    }
  }
  console.log('Final Schedule Recommendation :::::: ', recommendation);
  return recommendation;
};

module.exports = getPlaceOption;
