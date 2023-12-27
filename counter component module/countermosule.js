// Counter Module
const CounterModule = (function () {
  let count = 0;

  function getCount() {
    return count;
  }

  function increment() {
    count++;
    updateView();
  }

  function decrement() {
    count--;
    updateView();
  }

  function updateView() {
    const counterContainer = document.getElementById('counter-container');
    if (counterContainer) {
      counterContainer.textContent = `Count: ${count}`;
    }
  }

  return {
    getCount,
    increment,
    decrement,
  };
})();
