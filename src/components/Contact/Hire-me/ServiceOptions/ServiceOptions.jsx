import React from "react";

function ServiceOptions() {
    return(
        <div className="service_list">
            <table width="100%">
            <tbody>
                <tr>
                <td>
                    <input type="checkbox" name="logo_design" id="service1" />
                    <label className="checkboxes" htmlFor="service1">Logo Design</label>
                </td>
                <td>
                    <input type="checkbox" name="web_dev" id="service4" />
                    <label className="checkboxes" htmlFor="service4">Custom Web Development</label>
                </td>
                <td>
                    <input type="checkbox" name="maintenance" id="service7" />
                    <label className="checkboxes" htmlFor="service7">Maintenance</label>
                </td>
                </tr>
                <tr>
                <td>
                    <input type="checkbox" name="web_design" id="service2" />
                    <label className="checkboxes" htmlFor="service2">Web Design</label>
                </td>
                <td>
                    <input type="checkbox" name="ecommerce" id="service5" />
                    <label className="checkboxes" htmlFor="service5">E-commerce</label>
                </td>
                <td>
                    <input type="checkbox" name="seo" id="service8" />
                    <label className="checkboxes" htmlFor="service8">SEO</label>
                </td>
                </tr>
                <tr>
                <td>
                    <input type="checkbox" name="photography" id="service3" />
                    <label className="checkboxes" htmlFor="service3">Photography</label>
                </td>
                <td>
                    <input type="checkbox" name="wordpress" id="service6" />
                    <label className="checkboxes" htmlFor="service6">WordPress or other CMS</label>
                </td>
                <td>
                    <input type="checkbox" name="hosting" id="service9" />
                    <label className="checkboxes" htmlFor="service9">Hosting</label>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
    );
}

export default ServiceOptions;