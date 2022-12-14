import React, { Fragment } from 'react'; // eslint-disable-line
import * as LINKS          from '../../data/links';

const Instructions = (props) => {
    return (
        <Fragment>
            <div className="usa-alert usa-alert--warning usa-alert--slim" >
              <div className="usa-alert__body">
                <p className="usa-alert__text">
                    <strong>This site is in Alpha</strong>. Help us improve it by emailing site-scanning@gsa.gov with feedback.
                </p>
              </div>
            </div>
            <h1>Site Scanning Query Builder</h1>
            This tool walks through filtering and pulling into a spreadsheet website data from the <a href="https://digital.gov/site-scanning/">Site Scanning program</a>.
            <p>To get started:</p>
            <ol>
                    <li>On the left, set the filters you want.</li>
                    <li>Copy the API URL generated below.</li>
                    <li>Click here to open the <a href={LINKS.GOOGLE_SHEETS_LINK} target='_blank' className='usa-link'>Google Sheets template</a>. You'll be prompted to make a copy.</li>
                    <li>Paste the API URL into the appropriate box in the Google Sheet.</li>
                    <li>From there, follow the instructions in the Google Sheet.</li>
            </ol>
        </Fragment>
    );
};

Instructions.propTypes = {};

export default Instructions;
