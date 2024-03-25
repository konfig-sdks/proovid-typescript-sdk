/*
Proovid Electronic Verification

Proovid API is a RESTful application that specializes in electronic verification (Proof of address and Proof of Identity) by employing an advanced risk-tiered approacch in combination with a smart Risk assessment system. <a href='docs/PROOVid_ELV.pdf' target='_blank'>More information</a> 

The version of the OpenAPI document: v1
Contact: info@proovid.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Level } from './level';

/**
 * 
 * @export
 * @interface DescriptionLevels
 */
export interface DescriptionLevels {
    /**
     * 
     * @type {Level}
     * @memberof DescriptionLevels
     */
    'level1'?: Level;
    /**
     * 
     * @type {Level}
     * @memberof DescriptionLevels
     */
    'level2'?: Level;
    /**
     * 
     * @type {Level}
     * @memberof DescriptionLevels
     */
    'level3'?: Level;
    /**
     * 
     * @type {Level}
     * @memberof DescriptionLevels
     */
    'level4'?: Level;
}

