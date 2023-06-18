// Obțineți elementul interactiv
var interactiveElement = document.getElementById('interactive-element');

// Variabile pentru coordonatele gestului de glisare
var startX, startY, endX, endY;

// Adăugați un eveniment pentru începutul gestului de atingere
interactiveElement.addEventListener('touchstart', function(event) {
  startX = event.touches[0].clientX;
  startY = event.touches[0].clientY;
});

// Adăugați un eveniment pentru sfârșitul gestului de atingere
interactiveElement.addEventListener('touchend', function(event) {
  endX = event.changedTouches[0].clientX;
  endY = event.changedTouches[0].clientY;
  
  // Calculați diferența de coordonate pe axele X și Y
  var deltaX = endX - startX;
  var deltaY = endY - startY;
  
  // Verificați gesturile de glisare
  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    if (deltaX > 0) {
      // Gestul de glisare spre dreapta
      showGestureFeedback('Swipe right');
    } else {
      // Gestul de glisare spre stânga
      showGestureFeedback('Swipe left');
    }
  } else {
    if (deltaY > 0) {
      // Gestul de glisare în jos
      showGestureFeedback('Swipe down');
    } else {
      // Gestul de glisare în sus
      showGestureFeedback('Swipe up');
    }
  }
});

// Adăugați un eveniment pentru gestul de apăsare
interactiveElement.addEventListener('touchstart', function(event) {
  // Verificați dacă gestul de apăsare este suficient de scurt
  if (event.touches[0].radiusX < 10 && event.touches[0].radiusY < 10) {
    showGestureFeedback('Tap');
  }
});

// Adăugați un eveniment pentru gestul de pumn strâns
interactiveElement.addEventListener('touchend', function(event) {
  // Verificați dacă gestul de pumn strâns este suficient de scurt
  if (event.changedTouches[0].radiusX < 10 && event.changedTouches[0].radiusY < 10) {
    showGestureFeedback('Fist bump');
  }
});

// Funcția pentru a afișa feedback-ul gestului
function showGestureFeedback(gesture) {
  var gestureText = document.getElementById('gesture-text');
  gestureText.textContent = gesture;
}
