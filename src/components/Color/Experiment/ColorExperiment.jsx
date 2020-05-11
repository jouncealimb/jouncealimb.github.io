import React from 'react';
// import { AlphaPicker as Picker } from 'react-color';
import { Image, Transformation } from 'cloudinary-react';



// const red = { r: 255, g: 0, b: 0, a: 1 };

// const canvas = document.getElementById('canvas');
// const context = canvas.getContext('2d');
// const context = (document.getElementById('canvas')).getContext('2d');

// const copy = () => {
//   const imgData = context.getImageData();
//   console.log(imgData); // HUH
// }

export default class ColorExperiment extends React.Component {


  render() {
    return (
    <div>
      <h1>COLOR expt</h1>
      <Image publicId="color" cloudName="colordanica">
        {/* {this.getTransformations()} */}
      </Image>
      {/* <Picker rgb={red} direction='vertical' height='316px' width='16px'/> */}
    </div>
    );
  }

  getTransformations() {

    return this.state.transforms.map((tranform) => {

        return ( <Transformation effect={`${tranform.key}:${tranform.value}`} gravity="center" crop="fill" />)
    })
}

}

// https://overflowjs.com/posts/Image-Processing-In-Reactjs-Part-1.html
// https://blog.filestack.com/tutorials/crop-resize-filter-images-javascript-react/
// http://colormind.io/blog/extracting-colors-from-photos-and-video/
// https://cloudinary.com/documentation/react_image_manipulation
// https://www.w3schools.com/tags/canvas_getimagedata.asp


// export default ColorExperiment