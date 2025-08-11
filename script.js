const imageSets = [
    {
      left: 'IMG/Obama-AI.png',
      right: 'IMG/Obama-REAL.png',
      real: 1
    },
    {
      left: 'IMG/Tobey_Macguire-REAL.png',
      right: 'IMG/Tobey_Macquire-AI.png',
      real: 0
    },
    {
      left: 'IMG/Tom_Cruise-REAL.png',
      right: 'IMG/Tom_Cruise-AI.png',
      real: 0
    },
    {
      left: 'IMG/Putin-AI.png',
      right: 'IMG/Putin-REAL.png',
      real: 1
    },
    {
      left: 'IMG/RDJr-REAL.png',
      right: 'IMG/RDJr-AI.png',
      real: 0
    }
  ];
  
  let currentSet = 0;
  let score = 0;
  
  const leftImage = document.getElementById('leftImage');
  const rightImage = document.getElementById('rightImage');
  const leftImageContainer = document.getElementById('leftImageContainer');
  const rightImageContainer = document.getElementById('rightImageContainer');
  const restartButton = document.getElementById('restartButton');
  const continueButton = document.getElementById('continueButton');
  
  function loadSet() {
    const set = imageSets[currentSet];
    leftImage.src = set.left;
    rightImage.src = set.right;
  }
  
  function handleAnswer(selected) {
    const correct = imageSets[currentSet].real;
    if (selected === correct) {
      score++;
    }
    currentSet++;
    if (currentSet < imageSets.length) {
      loadSet();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'flex';
    const percentage = Math.round((score / imageSets.length) * 100);
    document.getElementById('resultText').innerText = `YOU COULD DETECT ${percentage}% OF DEEPFAKES`;
  }
  
  leftImageContainer.addEventListener('click', () => handleAnswer(0));
  rightImageContainer.addEventListener('click', () => handleAnswer(1));
  
  restartButton.addEventListener('click', () => {
    currentSet = 0;
    score = 0;
    loadSet();
    document.getElementById('result').style.display = 'none';
    document.getElementById('quiz').style.display = 'flex';
  });
  
  continueButton.addEventListener('click', () => {
    window.location.href = 'info.html'; // or wherever you want
  });
  
  // Show overlay text initially
  window.onload = () => {
    loadSet();
  
    setTimeout(() => {
      const overlayText = document.getElementById('overlayText');
      overlayText.style.opacity = '0'; // Fade out the text after 4 seconds
  
      // After the fade-out is complete, hide the text
      setTimeout(() => {
        overlayText.style.display = 'none'; // Hide completely after the fade-out
      }, 500); // Match the fade duration
    }, 4000); // Wait 4 seconds before starting the fade-out
  };
  
  