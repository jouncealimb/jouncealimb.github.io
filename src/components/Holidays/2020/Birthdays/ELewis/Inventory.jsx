import React from 'react';
import '/Users/danicasapit/code/personal-site/personal-site/src/components/Holidays/2020/Birthdays/ELewis/inventory.css';

export default class Inventory extends React.Component {
    render() {

      const { items, onClick } = this.props;
    
      const itemsList = items.map(function(item) {
        let boundItemClick = onClick.bind(this, item);

        return <li className="inventory-slot"><img onClick={boundItemClick} className="inventory-icon" src={item.src}></img></li>
      });

      return (
        <div className="acnh-inventory">
        <center><svg className="inventory-background" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 788.5851 331.74817">
            <path d="M770,125.03169c46,79,1.69568,194.60284-79,205-79.466,10.23871-159.64124-28.56955-291-31-107.998-1.99823-253.04626,48.43927-323,23-70.84346-25.76282-77-98.85478-77-140,0-32.63885,23.04807-84.65914,75-118,36.93143-23.70125,94.36634-39.39823,142-50,54.3-12.0855,127.11-13.717,175-14,152.27094-.89973,242.18616,17.31226,310,61C738.15436,84.32343,751.89178,93.93278,770,125.03169Z" fill="#fdf9e2"/>
        </svg></center>
            <ul className="inventory-items">
                {itemsList}
            </ul>
        </div>
      );
    }
  }
  