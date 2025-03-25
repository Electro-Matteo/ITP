LINK TO MY PROJECT: https://editor.p5js.org/Electro-Matteo/sketches/s2kffBB1j
The first thing I tried was trying to add a audio file with &&. 
let myFirstSound && mySecondSound 
That did not work. I was initially attempting two random samples to play and once I figured that out I could include cohesive-sounding audios. 
I read that && was for concatenating conditions and NOT variables like myFirstSound and my SecondSounds
I then put one variable in one row and the other variable in the next row followed by a ;

In the "Move your cursor to the 'Preview' section\nPress 'P' to play sound" I just added a ‘W’ for the message to display since that was the key that I wanted to use
I remember Rachael recommending using ‘else if’ statements for this

I tried this code first but I couldn’t find a pattern on how to make the code differentiate between playCustomSound (like the example code showed) for MyFirstSound and play CustomSound for MySecond Sound. 

function keyPressed() {
  console.log("Key pressed:", key);
  if (key.toLowerCase() === 'p') {
    playCustomSound();
  } else if (key.toLowerCase() === 'w') {
    if playCustomSound();
}

Then this is what I wrote to ChatGBT: 

I want my code to play a specific .wav file when I press ‘p’, and I want it to play a separate specific file when I press ‘w’. The first .wav file is MyFirstSound. The other .wav file is MySecondSound. How can I make my code play the corresponding sound if playCustomSound will play MyFirstSound? This is my non-working fragment code so far: 

function keyPressed() {
  console.log("Key pressed:", key);
  if (key.toLowerCase() === 'p') {
    playCustomSound();
  } else if (key.toLowerCase() === 'w') {
    if playCustomSound();
}


This is the solution ChatGbt gave:
function keyPressed() {
  console.log("Key pressed:", key);
  if (key.toLowerCase() === 'p') {
    if (MyFirstSound.isLoaded()) MyFirstSound.play();
  } else if (key.toLowerCase() === 'w') {
    if (MySecondSound.isLoaded()) MySecondSound.play();
  }
}

I didn’t know that that was how you commanded the separate samples to play. By including Variable.isLoaded()) and Variable.play(); 
Now, that makes sense but my question is how would I know that the .isLoaded and .play were what I had to write for the code to work accordingly? The example code read playCustomSound which is different. I am a little confused on that. 

I tried it, and it didnt work, and after a while, I realized it was because some letters were capitalized and some weren't in myFirstSound vs MyFirstSound. So I got that fixed and it worked.

After getting it to work I dived in the creative aspect. I went to ableton and layered an 808 bass, a break, and synth chords. I also added a vocal with an AI speech tool and used Vocoder on it. I exported the two different break loops with two different bass notes. I also exported two different sustained synth chords. Lastly I exported the silly vocoder phrase “You should give Matteo an A+!” I name the files accordingly (BREAK1.WAV, BREAK2.WAV, SYNTH1.WAV, SYNTH2.WAV, APLUS.WAV) and I put them in a folder. I wanted to use keys A, S, D, F, W because they are close together and resemble drum pads. I named the variables SoundA, SoundS, SoundD, SoundF, SoundW. After that I used my working code and substituted + added.
Instead of myFirstSound and mySecondSound is used:

function preload() {
  soundFormats('wav', 'mp3');  
  soundA = loadSound('BREAK1.wav', soundLoaded);   
  soundS = loadSound('BREAK2.wav', soundLoaded);   
  soundD = loadSound('SYNTH1.wav', soundLoaded);   
  soundF = loadSound('SYNTH2.wav', soundLoaded);   
  soundW = loadSound('APLUS.wav', soundLoaded);    
}

And so on. 


