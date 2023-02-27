function getNewYear() {
  const date = new Date();
  const currentYear = date.getFullYear();
  const newYear = `${currentYear + 1}-01-01T00:00:00.000Z`;
  return new Date(newYear);
}

function getTotalSecondsFromDate(endDate) {
  const currentDate = new Date();
  return (endDate - currentDate) / 1000;
}

function getDateInfo(totalSeconds) {
  return {
    days: Math.floor(totalSeconds / 3600 / 24),
    hours: Math.floor(totalSeconds / 3600) % 24,
    minutes: Math.floor(totalSeconds / 60) % 60,
    seconds: Math.floor(totalSeconds) % 60,
  };
}

function getFormattedDate(time) {
  return time < 10 ? `0${time}` : time;
}

function countdown() {
  const totalSeconds = getTotalSecondsFromDate(getNewYear());
  const dateInfo = getDateInfo(totalSeconds);

  document.getElementById("days").innerHTML = dateInfo.days;
  document.getElementById("hours").innerHTML = getFormattedDate(dateInfo.hours);
  document.getElementById("minutes").innerHTML = getFormattedDate(
    dateInfo.minutes
  );
  document.getElementById("seconds").innerHTML = getFormattedDate(
    dateInfo.seconds
  );
}

countdown();
setInterval(countdown, 1000);
