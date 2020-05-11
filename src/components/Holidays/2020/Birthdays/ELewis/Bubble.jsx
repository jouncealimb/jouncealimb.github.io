import React from 'react';
import '/Users/danicasapit/code/personal-site/personal-site/src/components/Holidays/2020/Birthdays/ELewis/bubble.css';

export default class Bubble extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        content: []
      };
    }
  
    type() {
      var index = this.state.content.length - 1;

      if (this.state.content.length > 0 && (!this.props.text[index] || this.props.text[index] != this.state.content[index]) ) {
        // console.log("ok ok");
        this.setState({ content: [] });
        var index = this.state.content.length - 1;
      }
  
      var content = this.state.content.slice();

      if (
        typeof this.props.text[index] === "string" &&
        this.state.content[index] !== this.props.text[index]
      ) {
        content[index] = this.props.text[index].slice(
          0,
          this.state.content[index].length + 1
        );
        // console.log('content');
        return this.setState({ content: content });
      }
  
      index++;
  
      if (index >= this.props.text.length) {
        // console.log("ehhh2");

        // var child = this.props.text[
        //   index
        // ];
        // return this.setState({ content: [...this.state.content, child] });


        return clearInterval(this.interval);
      }
  
      if (typeof this.props.text[index] !== "string") {
        var child = this.props.text[
          index
        ];
        return this.setState({ content: [...this.state.content, child] });
      }
  
      if (typeof this.props.text[index] === "string")
        return this.setState({
          content: [...this.state.content, this.props.text[index].slice(0, 1)]
        });
    }
  
    componentDidMount() {
      this.timeout = setTimeout(() => {
        this.interval = setInterval(() => this.type(), 25);
      }, 1500);
    }

    componentDidUpdate() {
      if (this.interval) clearInterval(this.interval);
      if (this.timeout) clearTimeout(this.timeout);

      this.timeout = setTimeout(() => {
        this.interval = setInterval(() => this.type(), 25);
      }, 50);
    }

    componentWillUnmount() {
      if (this.timeout) clearTimeout(this.timeout);
      if (this.interval) clearInterval(this.interval);

      // this.state.content = [];
    }
  
    render() {
      // console.log("a child", this.state.content);

      // this.timeout = setTimeout(() => {
      //   this.interval = setInterval(() => this.type(), 25);
      // }, 1500);

      return (
        <div>
          <div>
            <div className="dialogue">
              <div className="dialogue-blobs">
                <div className="dialogue-blob-top"></div>
                <div className="dialogue-blob-bottom"></div>
                <div className="dialogue-text">{this.state.content}</div>
              </div>
              <div className="dialogue-character-wrap">
                <div className="dialogue-character">
                  <slot name="character">{this.props.title}</slot>
                </div>
              </div>
            </div>
          </div>
  
          <svg className="hide" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="old-goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                  result="goo"
                />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
              <filter id="fancy-goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                  result="goo"
                />
                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
              </filter>
            </defs>
          </svg>
        </div>
      );
    }
  }
  