const second = $('.seconds');
const minut = $('.minuts');
intervalId = setInterval(timerDecrement, 1000);

function timerDecrement() {
  const newSecond = second.text() - 1;

  if (newSecond === 0) {
    const newMinut = minut.text() - 1;
    second.text(newSecond);
    if (newMinut === -1) {
      clearInterval(intervalId);
    } else {
      minut.text(newMinut);
      second.text(59);
    }
  } else {
    second.text(newSecond);
  };
}