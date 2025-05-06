# Visual Synth - Final Project - MATTEO

## [Final project](https://editor.p5js.org/Electro-Matteo/full/7NIUCDg0tw)

I decided to approach this project an extension of my Midterm Project, where I  experimented with sample triggering in p5.js. For this final, I took it further by designing a visual synth that responds to amplitude and frequency data using p5’s sound library.

## How It Started

- At first to begin experimenting, I reused the audio samples from my Midterm and began researching what else I could do in p5.js.
- Found a video of someone drawing a face that reacted to amplitude via mic input and  inspired me to dive more  into p5’s audio capabilities.
- Explored the [p5.js Reference](https://p5js.org/reference/) both the [Visual](https://p5js.org/reference/#group-Transform) and [Sound](https://p5js.org/reference/#group-Sound) sections.

## Visuals

### Amplitude

- Started with a circle (`ellipse`) that increased size based on `amp.getLevel()`.
- Switched to a rotating cube using `box()` once I explored the 3D Geometry WebGL functions(https://p5js.org/reference/#/p5/createCanvas).
- I then removed `fill()` so the you could the outline of the cube since the 3D effect wasnt as noticeable if filled.  
- Used a black background `background(10)` to help visuals stand out.
- Added rotation using the [rotate()](https://p5js.org/reference/#/p5/rotate) function I found in the p5 Transform section.

### Frequency

- Used `p5.FFT` to analyze the frequency spectrum.
- Followed this reference: [p5.FFT().analyze()](https://p5js.org/reference/#/p5.FFT/analyze)
- Drew a reactive waveform line using [vertex()](https://p5js.org/reference/#/p5/vertex) across the canvas.
- Found `resetMatrix()` reference: (https://p5js.org/reference/#/p5/resetMatrix) so the FFT line wouldn’t rotate along with the cube.
- The FFT line didn’t stretch across the entire x axis as i expected and i tried tweaking values but ended up leaving it as is because it didnt work.

## SOUNDZ
- Designed my own synth pad/lead and exported sustained note samples (a full octave).
- Mapped each sample to keyboard keys like a “musical typing” layout from DAWs
- Replaced Midterm samples with these exported ones.

## Audio Effects (Attempted)

- I tried to implement `p5.Delay()` and `p5.LowPass()` effects.
- Plan was to trigger them when pressing keys without assigned samples.
- Got it to work partially since effects only worked once after running the code in p5
- I eventually removed them due to HEAVY latency and glitches

##Fixes

- Still noticed lag and glitching even after removing effects.
- Some samples wouldn’t play even when loaded message appeared, and visuals froze on “loading…”.
- I had to go back to an older working version and re-imported samples from scratch.
- Reached out to ChatGPT :'(  I include screenshots. It gave me these tips for latency tips:
  - Lowered FFT bins to reduce CPU load:  
    fft = new p5.FFT(0.8, 64);
  - Made sure samples don't overlap with themselves:
    function playSound(sound) {
      if (sound.isLoaded()) {
        if (sound.isPlaying()) {
          sound.stop(); // prevents overlapping
        }
        sound.play();
        currentSound = sound;
        fft.setInput(sound);
        amp.setInput(sound);
      }
    }
    ```

## FULLSCREEN
- When I finally clicked fullscreen the proportions were super off
- I found a solution to switch to`createCanvas(windowWidth, windowHeight, WEBGL)` for fullscreen visuals


## Learnef that

- p5.js is more powerful than I expected when it comes to visuals + audio.
- `resetMatrix()` was a key concept bc it allowed separate layers for visuals.
- Keep saving duplicates when trying new things…...

## References

- [p5.FFT.analyze()](https://p5js.org/reference/#/p5.FFT/analyze)
- [p5.vertex()](https://p5js.org/reference/#/p5/vertex)
- [p5.rotate()](https://p5js.org/reference/#/p5/rotate)
- [p5.resetMatrix()](https://p5js.org/reference/#/p5/resetMatrix)
- [p5.sound library](https://p5js.org/reference/#group-Sound)
- [p5.transform (3D)](https://p5js.org/reference/#group-Transform)