import React from 'react';
import { useEffect } from 'react';
import * as faceapi from 'face-api.js';
import { NONAME } from 'dns';
/**
 * 
 * 
 * 1. Attention and Perception
Know the location on the page of where your mask facial points are
Detect face, (in another particle style/glowing?), mainly concentrated around the main parts of a face (location info not the most, as we will match it to certain markers of our masks) - take them in 2 second intervals perhaps to get really concentrated areas dependent on “attention”/time
2. Short-Term Memory (for now, no visual? It would be cool for it to also “draw” a new mask based on the feature it sees, but only detect one face)
Data that has been held for at least 20 seconds will be chunked by their property into different cookies: 
Color
Size
orientation
3. Long-Term Memory Networks
Object Detection using 3 different CNNs (representing synapses) of:
Eyes
Nose
mouth
4. Forgetting
When you load it back up, have it constantly pulling different features and transition in with them for each. Take certain pixels from certain values (hmm have to look at storage options)
Which reminds me, on initial load, it already has a mix of at least one original mask, one mask being drawn by you, and the other ones surrounding them as a mix of other peoples’ features already. They are replaced according to the forgetting curve.
After a while, I will delete the oldest values, (what’s reasonable? 200?)

Visual

Grid of “cultural” masks (for fun, the ones frankensteined together have constantly oscillating parts to make it clear that they are mutated)


Plaque to the side explaining it and it can be be examined

7 masks
(frankenstein) (frankenstein) (frankenstein)
(frankenstein) (original intact) (empty space for children’s drawing reconstruction)     -  (plaque)
(frankenstein) (frankenstein) (frankenstein)

 * 
 * 
 */


const MODEL_LOCATION = '/weights';
const STM_THRESHOLD = 30*1000; // in milliseconds. items paid attention to for at least 20 - 30 seconds get stored in Short Term Memory
// CONST FORGETTING_S = 20; // 20 - 30 s   // NEED TO REFERENCE FORGETTING CURVE RATE



const Memory = (props) => {

  // TEST
  console.log(faceapi.nets);

  // componentDidMount
  useEffect(() => {
    setUp();
  });

  async function setUp() {
    try {
      // Let's start memorizing faces!

      // ATTENTION AND PERCEPTION
      // const net = new faceapi.SsdMobilenetv1();
      // await net.loadFromUri('/models');
      await faceapi.loadSsdMobilenetv1Model(MODEL_LOCATION);
      await faceapi.loadFaceLandmarkModel(MODEL_LOCATION);
      await faceapi.loadFaceRecognitionModel(MODEL_LOCATION);

      console.log("the models loaded");


      accessWebcam();
      setUpMaskReplacementPoints();
      setTimeout(snapshot, STM_THRESHOLD);
    } catch (e) {
      console.log("failed");
    }
  }

  function setUpMaskReplacementPoints() {
    // set up replacement points for masks

    return;
  }

  async function accessWebcam() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      console.log("stream", stream);

      if (stream) {
        const video = document.getElementById("videoElement");
        video.srcObject = stream;
      }
    } catch (e) {
      console.log("Cannot use webcam...");
    }
  }

  // function getFacePositionsOfTheMaskFeatures() {

  // }


  function snapshot() {
    const video = document.getElementById("videoElement");

    console.log("getting a snapshot", typeof video, video);
    if (video.videoWidth) {

      // now make an image
      var canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      canvas.getContext('2d')
            .drawImage(video, 0, 0, canvas.width, canvas.height);

      var img = document.createElement("img");
      img.src = canvas.toDataURL();

      console.log("what", img.src);

      // check the image

      const checkFacesWithDetection = detectSingleFace(img);



      // if (checkFacesWithDetection) {
        // let's store a crop of that image now that is just a face
        // console.log("croppy");


        // for now, store to localStorage



      // }
      

    }
  }


  // function processInShortTermMemory() {

  // }

  // function saveToLongTermMemory() {

  // }


  // function recallFacesFromLTM() {

  // }


  async function detectSingleFace(inputElement) { // inputs can be img, video, or canvas element
    console.log("we heeeaa", inputElement);    

    // if (!inputElement.length) {
    //   return;
    // }

    // temporary
    // inputElement = document.getElementById("test");
    
    const faceLandmarks = await faceapi.detectAllFaces(inputElement).withFaceLandmarks();


    // const singleResultWithDescriptors = await faceapi.detectAllFaces(inputElement).withFaceLandmarks().withFaceDescriptors();

    if (faceLandmarks.length) {
      console.log("we caught one, boys!", faceLandmarks);

      // var canvas = document.getElementById("canvastest");
      // canvas.width = inputElement.width;
      // canvas.height = inputElement.height;

      // faceapi.draw.drawFaceLandmarks(canvas, faceLandmarks);


      const landMarkPositions = faceLandmarks[0].landmarks.positions;

      const jawOutline = faceLandmarks[0].landmarks.getJawOutline()
      const nose = faceLandmarks[0].landmarks.getNose()
      const mouth = faceLandmarks[0].landmarks.getMouth()
      const leftEye = faceLandmarks[0].landmarks.getLeftEye()
      const rightEye = faceLandmarks[0].landmarks.getRightEye()
      const leftEyeBbrow = faceLandmarks[0].landmarks.getLeftEyeBrow()
      const rightEyeBrow = faceLandmarks[0].landmarks.getRightEyeBrow()



      console.log(landMarkPositions);
      console.log("jaw", jawOutline);
      console.log("nose", nose);
      console.log("mouth", mouth);
      console.log("leftEye", leftEye);
      console.log("rightEye", rightEye);
      console.log("leftEyebrow", leftEyeBbrow);
      console.log("rightEyebrow", rightEyeBrow);


      // REDUNDANT
      var canvas = document.getElementById("maskCanvas");
      var c = canvas.getContext('2d');
  
      //read width and height of the canvas
      // canvas.width = this.width;
      // canvas.height = this.height;
      var width = canvas.width;
      var height = canvas.height;
  
      // stamp the image on the left of the canvas
      c.drawImage(masks, 0, 0);
  
      // get all canvas pixel data
      var imageData = c.getImageData(0, 0, width, height);
      var oldImageData = imageData.data;
      var old_pixelSequence = obj_list(oldImageData);
      // REDUNDANT





      randomizeFaceInputs(old_pixelSequence, faceLandmarks[0].landmarks)

      return true;

      // const video = document.getElementById("videoElement");
      // faceapi.draw.drawDetections(video, singleResult);
    }

    return false;

  }

  function imageLoaded() {
    const canvas = document.getElementById("maskCanvas");
    const c = canvas.getContext('2d');

    //read width and height of the canvas
    canvas.width = this.width;
    canvas.height = this.height;
    const width = canvas.width;
    const height = canvas.height;

    // stamp the image on the left of the canvas
    c.drawImage(masks, 0, 0);

    // get all canvas pixel data
    const imageData = c.getImageData(0, 0, width, height);
    const oldImageData = imageData.data;
    const old_pixelSequence = obj_list(oldImageData);

    console.log("olden", oldImageData, old_pixelSequence);

    //process
    var new_pixelSequence = channel_shuffle(old_pixelSequence);
    imageData.data.set(unwrap(new_pixelSequence));
    c.putImageData(imageData, 0, 0);

    console.log("new", new_pixelSequence);

  }

  function unwrap(data) {
    var unwrapped_list = [];

    for(var i = 0; i < data.length; i++) {
      unwrapped_list.push(data[i].r);
      unwrapped_list.push(data[i].g);
      unwrapped_list.push(data[i].b);
      unwrapped_list.push(data[i].a);
    }

    return unwrapped_list;
  }

  function Pixel(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  // var obj_list = function(flat_array) {
  function obj_list(flat_array) {
    var new_obj = [];

    for (var i = 0; i < flat_array.length; i += 4) {
      new_obj.push(new Pixel(
        flat_array[i],
        flat_array[i + 1],
        flat_array[i + 2],
        flat_array[i + 3],
      ));
    }

    return new_obj;
  }

  function channel_shuffle(list) {
    for(var i = 0; i < list.length-1; i++) {
        list[i].b += 50;
  
        //comparison
        if (list[i].b > list[i].g) {
          list[i].r = list[i].b;
        } else {
          list[i].b = list[i].g;
        }

        //ranges
        if((list[i].g > 100) && (list[i].b > 200)) {
          if(i+5 < list.length) {
            list[i+5].r = 47;
            list[i+5].g = 32;
            list[i+5].b = 140;
          }
        }

        //grayscaling
        var avg = Math.floor((list[i].r + list[i].g + list[i].b)/3);
        if(avg < list[i].r) {
          list[i].r = avg;
        }
    }
    return list;
  }

  function randomizeFaceInputs(list, landmarks) {

    console.log("we are in here");


    for(var i = 0; i < list.length-1; i++) {

      //comparison
      if (list[i].b > list[i].g) {
        list[i].r = list[i].b;
      } else {
        list[i].b = list[i].g;
      }

      //ranges
      if((list[i].g > 100) && (list[i].b > 200)) {
        if(i+5 < list.length) {
          list[i+5].r = 47;
          list[i+5].g = 32;
          list[i+5].b = 140;
        }
      }

      //grayscaling
      var avg = Math.floor((list[i].r + list[i].g + list[i].b)/3);
      if(avg < list[i].r) {
        list[i].r = avg;
      }
    }
    return list;   

  }



  // TODO
  // get pixel at a certain location to match the features coords
  // get pixel values from video feed and dataset
  // ensure video and dataset matches size meant to match / proportions
  // put those dataset matches into localStorage
  // swap it out randomly with things in that storage


  // function brightness(r, g, b) {
  //   r = (r*r*0.241);
  //   g = (g*g*0.691);
  //   b = (b*b*0.068);
  //   var brightness = Math.floor(Math.sqrt(r+g+b));
  //   return brightness;
  // }

  // function sort_some(list, dark, light) {

  //   //select pieces of the list based off of dark or lightness
  //   var len = list.length;
  //   for(var i = 0; i < len-1; i++) {
  
  //     var bright = brightness(list[i].r,list[i].g,list[i].b);
  //     if(bright <= 100) {
  //       light[i] = 1;
  //     }
  //     if(bright >= 200) {
  //       dark[i] = 1;
  //     }
  
  //   }
  // }


  // Post-MVP: over time, but focus more on hover?
  // function recallAndRevamp() {



  // }

  const masks = new Image();
  masks.onload = imageLoaded;
  masks.src = '/maskstransparent.png';
  
      // {/* <center><img src="/maskscantransparent.png" id="masks"></img></center> */}
//      <video autoPlay={true} id="videoElement" style={{height: '100%', width: '100%'}}> </video>
  return (
    <div style={{backgroundColor: '#c1bfbf'}}>
      <center>
        <canvas id="maskCanvas" style={{ width: '1990px', height: '1530px'}}></canvas>
      </center>
      <video autoPlay={true} id="videoElement" style={{height: '100%', width: '100%'}}> </video>
    </div>
  );


}











export default Memory