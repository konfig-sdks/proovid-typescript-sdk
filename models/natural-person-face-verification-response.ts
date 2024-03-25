/*
Proovid Electronic Verification

Proovid API is a RESTful application that specializes in electronic verification (Proof of address and Proof of Identity) by employing an advanced risk-tiered approacch in combination with a smart Risk assessment system. <a href='docs/PROOVid_ELV.pdf' target='_blank'>More information</a> 

The version of the OpenAPI document: v1
Contact: info@proovid.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EStatus } from './estatus';
import { RejectLabelType } from './reject-label-type';

/**
 * 
 * @export
 * @interface NaturalPersonFaceVerificationResponse
 */
export interface NaturalPersonFaceVerificationResponse {
    /**
     * 
     * @type {EStatus}
     * @memberof NaturalPersonFaceVerificationResponse
     */
    'status'?: EStatus;
    /**
     * 
     * @type {string}
     * @memberof NaturalPersonFaceVerificationResponse
     */
    'comment'?: string | null;
    /**
     * 
     * @type {Array<RejectLabelType>}
     * @memberof NaturalPersonFaceVerificationResponse
     */
    'rejectLabels'?: Array<RejectLabelType> | null;
    /**
     * 
     * @type {number}
     * @memberof NaturalPersonFaceVerificationResponse
     */
    'faceMatchConfidence'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof NaturalPersonFaceVerificationResponse
     */
    'imageId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof NaturalPersonFaceVerificationResponse
     */
    'creationDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof NaturalPersonFaceVerificationResponse
     */
    'lastUpdatedDate'?: string;
}
