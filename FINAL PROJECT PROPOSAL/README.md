# FINAL PROJECT PROPOSAL 

## What will (likely) be the title of your project?
Sample-Based Audio Reactive Instrument

## In just a sentence or two, summarize your project. (E.g., "My project a web-based synthesizer.")
- My project is a browser-based audiovisual instrument built with p5.js. When I pressed a letter-key on my keyboard, a audio sample and image will be triggered simultaneously, and the visuals react dynamically and spectrally to the audio. 

## List at least 3 SPECIFIC resources you know you will use in developing your project! Links! Not "Rachel's Class Repository!" Not ChatGPT! Not "YouTube"!
- https://p5js.org/reference/p5.sound/ 
- https://p5js.org/reference/#Image 
- https://gist.github.com/jskyjohnson/d3e55b15c2311e796c89d75b53c2ccf7 

## In a paragraph or more, detail your project. What will your software do? What features will it have? How will it be executed?
- My project will function as a mini audiovisual performance tool. I would press keys on my computer keyboard (ones I choose possible resembling a MIDI keyboard). Each key will be mapped to a specific audio sample (like a kick, snare, vocal, or ambient) along with matching it with a image (maybe short video clip if I didnt find a reference for that). When one of the samples is triggered, the corresponding visual will appear and respond to the audio in real time. For example, the image could pulse, shake, or scale up and down, reacting to the amplitude or frequency spectrum of the sound.
If I press multiple keys together, the program would calculate the combined audio amplitude/frequency and respond with more exaggerated effects.
This would be done using p5.sound ’s Amplitude and possibly FFT for the audio analysis, and the image(, and transform functions (that I found in the p5 reference website) like scale(), rotate(), translate()) for image. I will preload the files and use keyPressed().

## Will any work as part of this project overlap with any work you are doing outside of this class? For another class? Who is the professor in this class?
- No

## In a sentence (or list of features), define a GOOD outcome for your final project. I.e., what WILL you accomplish no matter what?
- The keys trigger the corresponding audio samples 
- Image appears on the screen when the audio sample plays
- Image rotates in response to audio amplitude

## In a sentence (or list of features), define a BETTER outcome for your final project. I.e., what do you THINK you can accomplish before the final project's deadline?
- Multiple keys can trigger 2+ audios and overlap the analysis for reaction. 
- The image has more types of reactions to the amplitude (pulse, scale, rotate)
- Combo effects happen when audio samples are overlapped 

## In a sentence (or list of features), define a BEST outcome for your final project. I.e., what do you HOPE to accomplish before the final project's deadline?
- Video clips are integrated and react to sound as well
- Frequency-reacting visual effects (using FFT)
- Visuals blend across samples
- More intentional design of the interface that looks good to project or for performing 

## In a paragraph or more, outline your next steps WITH A SPECIFIC CALENDAR. What new skills will you need to acquire? What topics will you need to research?

### April 17–20:
- Make the audio samples, and find images
- Review p5.sound in their reference page.  
- Investigate more how the Amplitude and FFT work in p5.js sound
- Set up some key-to-sample and key-to-image trigger
### April 21–27:
- Start using the amplitude-based visual effects (scaling)
### April 28–May 3:
- Clean visuals and replace files if necessary, tweak effects and "combo" reactions
-Change parts of the code to make it clean 
- Test in chrome and safari 
### Week Before Submitting:
- Add finishing touches, documentation, and hopefullyy a "performance" mode
- Submit to GitHub or p5js.org as final

- I will need to research how the “objects” in the p5.js work. There are so many so I have to research about the ones that seem interesting to me for this project. 
