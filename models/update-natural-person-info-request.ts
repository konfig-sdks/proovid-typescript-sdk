/*
Proovid Electronic Verification

Proovid API is a RESTful application that specializes in electronic verification (Proof of address and Proof of Identity) by employing an advanced risk-tiered approacch in combination with a smart Risk assessment system. <a href='docs/PROOVid_ELV.pdf' target='_blank'>More information</a> 

The version of the OpenAPI document: v1
Contact: info@proovid.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EGender } from './egender';
import { EScore } from './escore';
import { UpdateNaturalPersonEconomicProfileRequest } from './update-natural-person-economic-profile-request';

/**
 * 
 * @export
 * @interface UpdateNaturalPersonInfoRequest
 */
export interface UpdateNaturalPersonInfoRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateNaturalPersonInfoRequest
     */
    'clientReferenceId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateNaturalPersonInfoRequest
     */
    'taxId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateNaturalPersonInfoRequest
     */
    'firstName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateNaturalPersonInfoRequest
     */
    'lastName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateNaturalPersonInfoRequest
     */
    'middleName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateNaturalPersonInfoRequest
     */
    'legalName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateNaturalPersonInfoRequest
     */
    'dateOfBirth'?: string | null;
    /**
     * 
     * @type {EGender}
     * @memberof UpdateNaturalPersonInfoRequest
     */
    'gender'?: EGender;
    /**
     * 
     * @type {string}
     * @memberof UpdateNaturalPersonInfoRequest
     */
    'countryBirth'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateNaturalPersonInfoRequest
     */
    'countryResidence'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateNaturalPersonInfoRequest
     */
    'countryMainBusiness'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateNaturalPersonInfoRequest
     */
    'nationality'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateNaturalPersonInfoRequest
     */
    'email'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateNaturalPersonInfoRequest
     */
    'emailTwo'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateNaturalPersonInfoRequest
     */
    'mobilePhone'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateNaturalPersonInfoRequest
     */
    'mobilePhoneTwo'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateNaturalPersonInfoRequest
     */
    'automaticallyUpdateNPRisk'?: boolean | null;
    /**
     * 
     * @type {EScore}
     * @memberof UpdateNaturalPersonInfoRequest
     */
    'riskLevel'?: EScore;
    /**
     * 
     * @type {string}
     * @memberof UpdateNaturalPersonInfoRequest
     */
    'riskLevelJustification'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateNaturalPersonInfoRequest
     */
    'isFlagged'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UpdateNaturalPersonInfoRequest
     */
    'comments'?: string | null;
    /**
     * 
     * @type {UpdateNaturalPersonEconomicProfileRequest}
     * @memberof UpdateNaturalPersonInfoRequest
     */
    'economicProfile'?: UpdateNaturalPersonEconomicProfileRequest;
}

