/*
Proovid Electronic Verification

Proovid API is a RESTful application that specializes in electronic verification (Proof of address and Proof of Identity) by employing an advanced risk-tiered approacch in combination with a smart Risk assessment system. <a href='docs/PROOVid_ELV.pdf' target='_blank'>More information</a> 

The version of the OpenAPI document: v1
Contact: info@proovid.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface Agent
 */
export interface Agent {
    /**
     * 
     * @type {boolean}
     * @memberof Agent
     */
    'isDesktop'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Agent
     */
    'isPhone'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Agent
     */
    'useragent'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Agent
     */
    'deviceName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Agent
     */
    'browserName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Agent
     */
    'platformName'?: string | null;
}
