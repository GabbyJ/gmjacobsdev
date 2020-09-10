import React, {Component} from "react";
import $ from "jquery";

class Included extends Component{
    componentDidMount(){
        $('.toggle').click(function(e) {
            e.preventDefault();
        
          var $this = $(this);
        
          if ($this.next().hasClass('show')) {
              $this.next().removeClass('show');
              $this.next().slideUp(350);
          } else {
              $this.parent().parent().find('li .inner').removeClass('show');
              $this.parent().parent().find('li .inner').slideUp(350);
              $this.next().toggleClass('show');
              $this.next().slideToggle(350);
          }
      });
        
    }
    
    render(){
        return(
            <div className="footnotes">
        <ul className="accordion">
          <li>
            <a className="toggle" href="javascript:void(0);">What's Included in all Packages? &nbsp;&nbsp;&nbsp;<i class="fas fa-chevron-down"></i></a>
            <table cellSpacing={20} className="inner">
                <tbody>
                    <tr>
                        <td>Mobile Responsiveness</td>
                        <td>Domain</td>
                        <td>Hosting</td>
                    </tr>
                    <tr>
                        <td>Security Protection</td>
                        <td>SSL Certificate</td>
                    </tr>
                </tbody>
            </table>
          </li>
          <li>
            <a className="toggle" href="javascript:void(0);">Maintenance Options &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-chevron-down"></i></a>
            <table cellSpacing={20} className="inner">
                <tbody>
                    <tr>
                        <td>Content Management</td>
                        <td>Analytics Interpretation</td>
                        <td>Email Blasts</td>
                    </tr>
                </tbody>
            </table>
          </li>
          <li>
            <a className="toggle" href="javascript:void(0);">Popular Optional Add-ons &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><i class="fas fa-chevron-down"></i></span></a>
            <table cellSpacing={20} className="inner">
                <tbody>
                    <tr>
                        <td>Photography</td>
                        <td>Image Editing</td>
                        <td>eCommerce</td>
                        <td>Translations</td>
                        <td>Chat/ Message</td>
                    </tr>
                    <tr>
                        <td>Password Protection</td>
                        <td>Email Template</td>
                        <td>Custom Designs</td>
                        <td>Custom Development</td>
                        <td>Many More...</td>
                    </tr>
                </tbody>
            </table>
          </li>
          
          
        </ul>
      </div>
        );
    }
}

export default Included;

