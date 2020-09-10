import React from "react";
import $ from "jquery";
import {pricing} from "../../../../lists.js";

$(document).ready(function() {
    $('.pricing-table:nth-child(2)').addClass('pop-out'); 
    
    $('.pricing-table').hover( 
      function() {
        if ( $(this).hasClass('pop-out') ) {
          /* do nothing */
        } else {
          $('.pricing-table').removeClass('pop-out');
          $(this).addClass('pop-out');
        }
      }, function() {
        $(this).removeClass('pop-out');
        $('.pricing-table:nth-child(2)').addClass('pop-out');
      }
    );
  });

  function Card(props){
    return(
      <div className="pricing-tables">
          <ul className="pricing-table">
              <li className="title">{props.package}</li>
              <li className="price"><span className="disclaimer">{props.disclaimer}</span><br></br>{props.price}</li>
              <li className="description">{props.description}</li>
              {props.items}
              <li className="cta-button"><a href={props.link} className="button">Select</a></li>
          </ul>
      </div>
    );
  }

  function createCard(onePrice){
    var eachItem = onePrice.items.map(x => <li className="item">{x}</li> );
    return <Card 
      key = {onePrice.id}
      package = {onePrice.package}
      disclaimer = {onePrice.disclaimer}
      price = {onePrice.price}
      description = {onePrice.description}
      items = {eachItem}
      link = {onePrice.link}
    />
  }

function PaymentOptions() {
    return(
      <div>
        {pricing.map(createCard)} 
      </div>
      
        
        
            
        
    );
}

export default PaymentOptions;