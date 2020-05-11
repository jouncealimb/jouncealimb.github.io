import React from 'react';
import Bubble from '/Users/danicasapit/code/personal-site/personal-site/src/components/Holidays/2020/Birthdays/ELewis/Bubble.jsx';
import Inventory from '/Users/danicasapit/code/personal-site/personal-site/src/components/Holidays/2020/Birthdays/ELewis/Inventory.jsx';

export default class elewis extends React.Component {

   constructor() {
       super();

       this.state = {
            displayText:`Whaaat?! It's your birthday, Eleanor?! ...Well, here are some gift offers! 
            Open (click) one to make a wish! All wishes are redeemable for quarantine OR when the outside is no longer illegal. Current times are trash, but you are not.`
       };

       this.items = [
        {
            src: "https://cdn.nookazon.com/miscellaneous/FtrMug_Remake_0_0.png",
            text: `I don't think you were able to get your Ember mug from the office, so I'm offering to get you an Ember gift card or some good tea and mochi.`,
        },
        {
            src: "https://cdn.nookazon.com/miscellaneous/FtrBooks_Remake_0_0.png",
            text: 'Books! Give me a list you want, or I can get you a gift box. Shrug.',
        },
        {
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAACFCAYAAACe7YA/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkZGMThEM0Y2RDM4MTFFQUJGQ0RBN0M1QTgzQzg3MUUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkZGMThENDA2RDM4MTFFQUJGQ0RBN0M1QTgzQzg3MUUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyRkYxOEQzRDZEMzgxMUVBQkZDREE3QzVBODNDODcxRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyRkYxOEQzRTZEMzgxMUVBQkZDREE3QzVBODNDODcxRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ptqh7QsAABkuSURBVHja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",
            text: `Recipes! Aka any food (either in recipe form or obtain-ingredients-for-you). I've been experimenting making mandu (dumplings) and Japanese curry as of late.`,
        },
        {
            src: "https://cdn.nookazon.com/housewares/FtrFloorpapers_Remake_0_0.png",
            text: `Something handmade from me? Gross. This could also be interpreted as being a sounding board for any material you have.`,
        },
        {
            src: "https://nookazon.com/static/media/old_tire.a663c947.png",
            text: `Just a really, really wretched trash time. I'll undo you. Why would you ever pick this?`,
        }      
    ];

       this.changeText = this.changeText.bind(this);
   }

   changeText(item, e) {
    //  console.log("yes, I'm debugging, shh", item, e, item.text);
     this.setState({
        displayText: item.text
     });
   }

   render() {
       const { displayText } = this.state;

    //    console.log("render for me, baby", displayText);
       return (
           <div style={{ backgroundImage: `url('/acnook.jpg')`, height: '700px' }}>
               <audio autoPlay={true}>
                    <source src="/ac7am.mp3" type="audio/mpeg"></source>
                </audio>
               <Inventory items={this.items} onClick={this.changeText}/><br/>
               <img src="/lewis.png" style={{ height: '400px', position: 'relative', top: '-350px' }}></img>
               <Bubble title="Danica" text={displayText} />
            </div>
        );
   }
}
  