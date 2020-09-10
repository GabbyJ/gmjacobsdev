import React from "react";
import ServiceOptions from "./ServiceOptions/ServiceOptions";
import PaymentOptions from "./Payment-options/PaymentOptions";
import BudgetSlider from "./Sliders/Budget";
import DeadlineSlider from "./Sliders/Deadline";
import Included from "./Payment-options/WhatsIncluded";




function HireMe() {
    return(
        <section className="hireme" id="hire">
            <h2 id="hire-title">Hire Me</h2>
            <div className="form">
                <form action="#" className="login-form">
                <input type="text" required="required" placeholder="Name" />
                <input type="Email" required="required" placeholder="Email" />
                <input type="text" placeholder="Company/Organization" />
                {/* HIRE ME PRICING */}
                <div className="pricing">
                    <PaymentOptions />
                    <Included />
                    <ServiceOptions />
                    {/* HIRE ME BUDGET SLIDER */}
                    <BudgetSlider />
                    {/* HIRE ME DEADLINE SLIDER */}
                    <DeadlineSlider />
                </div>
                {/* PROJECT DETAILS */}
                <textarea id="project-details" rows={5} cols={50} type="text" required="required" placeholder="Project Details" defaultValue={""} />
                <button>Send</button>
                </form>
            </div>
      </section>
    );
}

export default HireMe;