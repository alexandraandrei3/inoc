var gestureElement = document.getElementById('gesture-element');
var gestureText = document.getElementById('gesture-text');
var gestureFeedback = document.getElementById('gesture-feedback');

// Funcția de gestionare a gestului de apăsare (tap)
gestureElement.addEventListener('click', function() {
  gestureText.textContent = 'Apăsat';
  gestureFeedback.textContent = 'Gest: Apăsare';
});

// Funcția de gestionare a gestului de glisare spre stânga (swipe left)
gestureElement.addEventListener('swipeleft', function() {
  gestureText.textContent = 'Glisare spre stânga';
  gestureFeedback.textContent = 'Gest: Glisare spre stânga';
});

// Funcția de gestionare a gestului de glisare spre dreapta (swipe right)
gestureElement.addEventListener('swiperight', function() {
  gestureText.textContent = 'Glisare spre dreapta';
  gestureFeedback.textContent = 'Gest: Glisare spre dreapta';
});

// Funcția de gestionare a gestului de rostogolire în sus (swipe up)
gestureElement.addEventListener('swipeup', function() {
  gestureText.textContent = 'Rostogolire în sus';
  gestureFeedback.textContent = 'Gest: Rostogolire în sus';
});

// Funcția de gestionare a gestului de rostogolire în jos (swipe down)
gestureElement.addEventListener('swipedown', function() {
  gestureText.textContent = 'Rostogolire în jos';
  gestureFeedback.textContent = 'Gest: Rostogolire în jos';
});

// Funcția de gestionare a gestului de glisare (swipe)
gestureElement.addEventListener('swipe', function() {
  gestureText.textContent = 'Glisare';
  gestureFeedback.textContent = 'Gest: Glisare';
});
