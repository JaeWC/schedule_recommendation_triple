getPlaceOption = (obj, time) => {
  const maxTime = time;
  const placeName = Object.keys(obj);

  let recommendation = [];
  for (let i = 0; i < placeName.length - 1; i++) {
    currentPlace = placeName[i];

    let inner = [];
    let currentTime = 0;

    if (obj[currentPlace] > maxTime) {
      continue;
    } else if (obj[currentPlace] === maxTime) {
      placeOption = JSON.stringify([currentPlace]);
      recommendation.push(placeOption);
      continue;
    } else {
      currentTime += obj[currentPlace];
      inner.push(currentPlace);

      for (let j = i + 1; j < placeName.length; j++) {
        newPlace = placeName[j];

        currentTime += obj[newPlace];
        inner.push(newPlace);

        if (currentTime < maxTime) {
          recommendation.push(JSON.stringify(inner));
          continue;
        } else if (currentTime > maxTime) {
          currentTime -= obj[newPlace];
          inner.pop();
        } else {
          recommendation.push(JSON.stringify(inner));
          currentTime -= obj[newPlace];
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
