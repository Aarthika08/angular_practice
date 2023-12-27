// Application
document.addEventListener('DOMContentLoaded', function () {
  const counterContainer = document.getElementById('counter-container');

  // Create buttons
  const incrementButton = document.createElement('button');
  incrementButton.textContent = 'Increment';
  incrementButton.addEventListener('click', function () {
    CounterModule.increment();
  });

  const decrementButton = document.createElement('button');
  decrementButton.textContent = 'Decrement';
  decrementButton.addEventListener('click', function () {
    CounterModule.decrement();
  });

  // Append buttons to the container
  if (counterContainer) {
    counterContainer.appendChild(incrementButton);
    counterContainer.appendChild(decrementButton);
  }

  // Initial update
  CounterModule.updateView();
});
