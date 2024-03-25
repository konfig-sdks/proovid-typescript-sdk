<div align="left">

[![Visit Proovid](./header.png)](https://www.proovid.com&#x2F;)

# [Proovid](https://www.proovid.com&#x2F;)<a id="proovid"></a>

Proovid API is a RESTful application that specializes in electronic verification (Proof of address and Proof of Identity) by employing an advanced risk-tiered approacch in combination with a smart Risk assessment system. <a href='docs/PROOVid_ELV.pdf' target='_blank'>More information</a> 

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`proovid.address.createNaturalPersonElv`](#proovidaddresscreatenaturalpersonelv)
  * [`proovid.address.linkResponse`](#proovidaddresslinkresponse)
  * [`proovid.address.verifyById`](#proovidaddressverifybyid)
  * [`proovid.address.verifyById_0`](#proovidaddressverifybyid_0)
  * [`proovid.address.verifyByLevel`](#proovidaddressverifybylevel)
  * [`proovid.address.verifyCertificatePdf`](#proovidaddressverifycertificatepdf)
  * [`proovid.document.getCertificate`](#prooviddocumentgetcertificate)
  * [`proovid.document.verifyDeletion`](#prooviddocumentverifydeletion)
  * [`proovid.document.verifyStatus`](#prooviddocumentverifystatus)
  * [`proovid.document.verifyStatus_0`](#prooviddocumentverifystatus_0)
  * [`proovid.health.getVersion`](#proovidhealthgetversion)
  * [`proovid.health.statusCheck`](#proovidhealthstatuscheck)
  * [`proovid.naturalPerson.createOrUpdate`](#proovidnaturalpersoncreateorupdate)
  * [`proovid.naturalPerson.deleteById`](#proovidnaturalpersondeletebyid)
  * [`proovid.naturalPerson.getById`](#proovidnaturalpersongetbyid)
  * [`proovid.naturalPerson.getById_0`](#proovidnaturalpersongetbyid_0)
  * [`proovid.naturalPerson.getCertificate`](#proovidnaturalpersongetcertificate)
  * [`proovid.naturalPerson.getDetails`](#proovidnaturalpersongetdetails)
  * [`proovid.naturalPerson.getVerificationRecord`](#proovidnaturalpersongetverificationrecord)
  * [`proovid.naturalPerson.getVerifications`](#proovidnaturalpersongetverifications)
  * [`proovid.naturalPerson.removeById`](#proovidnaturalpersonremovebyid)
  * [`proovid.naturalPerson.updateDocuments`](#proovidnaturalpersonupdatedocuments)
  * [`proovid.naturalPerson.updateInformation`](#proovidnaturalpersonupdateinformation)
  * [`proovid.naturalPerson.verifyDetails`](#proovidnaturalpersonverifydetails)
  * [`proovid.naturalPerson.verifyDetails_0`](#proovidnaturalpersonverifydetails_0)
  * [`proovid.naturalPerson.verifyDocuments`](#proovidnaturalpersonverifydocuments)
  * [`proovid.naturalPerson.verifyEntity`](#proovidnaturalpersonverifyentity)
  * [`proovid.screening.getAmlReport`](#proovidscreeninggetamlreport)
  * [`proovid.screening.getNaturalPersonById`](#proovidscreeninggetnaturalpersonbyid)
  * [`proovid.screening.removeNaturalPerson`](#proovidscreeningremovenaturalperson)
  * [`proovid.screening.submitNaturalPersonScreening`](#proovidscreeningsubmitnaturalpersonscreening)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=PROOViD&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { ProoViD } from "proovid-typescript-sdk";

const proovid = new ProoViD({
  // Defining the base path is optional and defaults to https://proovidapi.azurewebsites.net
  // basePath: "https://proovidapi.azurewebsites.net",
  apiKey: "API_KEY",
});

const createNaturalPersonElvResponse =
  await proovid.address.createNaturalPersonElv({});

console.log(createNaturalPersonElvResponse);
```

## Reference<a id="reference"></a>


### `proovid.address.createNaturalPersonElv`<a id="proovidaddresscreatenaturalpersonelv"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNaturalPersonElvResponse =
  await proovid.address.createNaturalPersonElv({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### naturalPersonIndexId: `number`<a id="naturalpersonindexid-number"></a>

##### street: `string`<a id="street-string"></a>

##### streetNumber: `string`<a id="streetnumber-string"></a>

##### unit: `string`<a id="unit-string"></a>

##### zipCode: `string`<a id="zipcode-string"></a>

##### city: `string`<a id="city-string"></a>

##### district: `string`<a id="district-string"></a>

##### region: `string`<a id="region-string"></a>

##### country: `string`<a id="country-string"></a>

##### email: `string`<a id="email-string"></a>

##### mobile: `string`<a id="mobile-string"></a>

##### fullAddress: `string`<a id="fulladdress-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AddressVerificationResult](./models/address-verification-result.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/Address/NaturalPersonELV` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `proovid.address.linkResponse`<a id="proovidaddresslinkresponse"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const linkResponseResponse = await proovid.address.linkResponse({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### link: `string`<a id="link-string"></a>

##### coords: [`GpsLocation`](./models/gps-location.ts)[]<a id="coords-gpslocationmodelsgps-locationts"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/Address/LinkResponse` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `proovid.address.verifyById`<a id="proovidaddressverifybyid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const verifyByIdResponse = await proovid.address.verifyById({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AddressVerificationResult](./models/address-verification-result.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/Address/AddressVerification/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `proovid.address.verifyById_0`<a id="proovidaddressverifybyid_0"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const verifyById_0Response = await proovid.address.verifyById_0({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AddressVerificationDeleteResult](./models/address-verification-delete-result.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/Address/AddressVerification/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `proovid.address.verifyByLevel`<a id="proovidaddressverifybylevel"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const verifyByLevelResponse = await proovid.address.verifyByLevel({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### referenceId: `string`<a id="referenceid-string"></a>

##### email: `string`<a id="email-string"></a>

##### naturalPersonId: `number`<a id="naturalpersonid-number"></a>

##### naturalPersonIndexId: `number`<a id="naturalpersonindexid-number"></a>

##### name: `string`<a id="name-string"></a>

##### surname: `string`<a id="surname-string"></a>

##### mobilePhone: `string`<a id="mobilephone-string"></a>

##### language: `string`<a id="language-string"></a>

##### verificationLevel: `number`<a id="verificationlevel-number"></a>

##### document: `string`<a id="document-string"></a>

##### street: `string`<a id="street-string"></a>

##### streetNumber: `string`<a id="streetnumber-string"></a>

##### unit: `string`<a id="unit-string"></a>

##### district: `string`<a id="district-string"></a>

##### city: `string`<a id="city-string"></a>

##### region: `string`<a id="region-string"></a>

##### zipCode: `string`<a id="zipcode-string"></a>

##### country: `string`<a id="country-string"></a>

##### fullAddress: `string`<a id="fulladdress-string"></a>

##### skipDocumentComparison: `boolean`<a id="skipdocumentcomparison-boolean"></a>

##### validityPeriod: `number`<a id="validityperiod-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AddressVerificationResult](./models/address-verification-result.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/Address/VerificationByLevel` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `proovid.address.verifyCertificatePdf`<a id="proovidaddressverifycertificatepdf"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const verifyCertificatePdfResponse = await proovid.address.verifyCertificatePdf(
  {
    id: 1,
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/Address/AddressVerification/{id}/certificate.pdf` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `proovid.document.getCertificate`<a id="prooviddocumentgetcertificate"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCertificateResponse = await proovid.document.getCertificate({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/Document/DocumentVerification/{id}/certificate.pdf` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `proovid.document.verifyDeletion`<a id="prooviddocumentverifydeletion"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const verifyDeletionResponse = await proovid.document.verifyDeletion({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DeleteDocumentVerificationResponse](./models/delete-document-verification-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/Document/DocumentVerification/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `proovid.document.verifyStatus`<a id="prooviddocumentverifystatus"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const verifyStatusResponse = await proovid.document.verifyStatus({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DocumentVerificationResponse](./models/document-verification-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/Document/DocumentVerification/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `proovid.document.verifyStatus_0`<a id="prooviddocumentverifystatus_0"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const verifyStatus_0Response = await proovid.document.verifyStatus_0({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### email: `string`<a id="email-string"></a>

##### country: `string`<a id="country-string"></a>

##### document: `string`<a id="document-string"></a>

##### additionalDocument: `string`<a id="additionaldocument-string"></a>

##### face: `string`<a id="face-string"></a>

##### documentType: `string`<a id="documenttype-string"></a>

##### naturalPersonId: `number`<a id="naturalpersonid-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DocumentVerificationResponse](./models/document-verification-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/Document/VerifyDocument` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `proovid.health.getVersion`<a id="proovidhealthgetversion"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getVersionResponse = await proovid.health.getVersion();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/Health/Version` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `proovid.health.statusCheck`<a id="proovidhealthstatuscheck"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const statusCheckResponse = await proovid.health.statusCheck();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/Health/Status` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `proovid.naturalPerson.createOrUpdate`<a id="proovidnaturalpersoncreateorupdate"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createOrUpdateResponse = await proovid.naturalPerson.createOrUpdate({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### info: [`AddNaturalPersonInfoRequest`](./models/add-natural-person-info-request.ts)<a id="info-addnaturalpersoninforequestmodelsadd-natural-person-info-requestts"></a>

##### clientReferenceId: `string`<a id="clientreferenceid-string"></a>

##### documents: [`NaturalPersonDocumentsRequest`](./models/natural-person-documents-request.ts)<a id="documents-naturalpersondocumentsrequestmodelsnatural-person-documents-requestts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AddNaturalPersonResponseBaseResponse](./models/add-natural-person-response-base-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/NaturalPerson` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `proovid.naturalPerson.deleteById`<a id="proovidnaturalpersondeletebyid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByIdResponse = await proovid.naturalPerson.deleteById({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DeleteAmlReport](./models/delete-aml-report.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/NaturalPerson/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `proovid.naturalPerson.getById`<a id="proovidnaturalpersongetbyid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await proovid.naturalPerson.getById({
  id: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AmlReport](./models/aml-report.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/NaturalPerson/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `proovid.naturalPerson.getById_0`<a id="proovidnaturalpersongetbyid_0"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getById_0Response = await proovid.naturalPerson.getById_0({
  reference: "reference_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### reference: `string`<a id="reference-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AmlReport](./models/aml-report.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/NaturalPerson/{reference}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `proovid.naturalPerson.getCertificate`<a id="proovidnaturalpersongetcertificate"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCertificateResponse = await proovid.naturalPerson.getCertificate({
  naturalPersonId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### naturalPersonId: `number`<a id="naturalpersonid-number"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/NaturalPerson/{naturalPersonId}/certificate` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `proovid.naturalPerson.getDetails`<a id="proovidnaturalpersongetdetails"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await proovid.naturalPerson.getDetails({
  naturalPersonId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### naturalPersonId: `number`<a id="naturalpersonid-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[NaturalPersonResponseBaseResponse](./models/natural-person-response-base-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/NaturalPerson/{naturalPersonId}/get` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `proovid.naturalPerson.getVerificationRecord`<a id="proovidnaturalpersongetverificationrecord"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getVerificationRecordResponse =
  await proovid.naturalPerson.getVerificationRecord({
    verificationId: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### verificationId: `number`<a id="verificationid-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[NaturalPersonInfoResponseBaseResponse](./models/natural-person-info-response-base-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/NaturalPerson/verificationRecord/{verificationId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `proovid.naturalPerson.getVerifications`<a id="proovidnaturalpersongetverifications"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getVerificationsResponse = await proovid.naturalPerson.getVerifications({
  naturalPersonId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### naturalPersonId: `number`<a id="naturalpersonid-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SumSubVerificationResponseListBaseResponse](./models/sum-sub-verification-response-list-base-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/NaturalPerson/{naturalPersonId}/verifications` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `proovid.naturalPerson.removeById`<a id="proovidnaturalpersonremovebyid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeByIdResponse = await proovid.naturalPerson.removeById({
  naturalPersonId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### naturalPersonId: `number`<a id="naturalpersonid-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[BaseResponse](./models/base-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/NaturalPerson/{naturalPersonId}/delete` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `proovid.naturalPerson.updateDocuments`<a id="proovidnaturalpersonupdatedocuments"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDocumentsResponse = await proovid.naturalPerson.updateDocuments({
  naturalPersonId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### naturalPersonId: `number`<a id="naturalpersonid-number"></a>

##### idDocument: [`NaturalPersonIdDocumentRequest`](./models/natural-person-id-document-request.ts)<a id="iddocument-naturalpersoniddocumentrequestmodelsnatural-person-id-document-requestts"></a>

##### addressDocument: [`NaturalPersonDocumentRequest`](./models/natural-person-document-request.ts)<a id="addressdocument-naturalpersondocumentrequestmodelsnatural-person-document-requestts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UpdateNaturalPersonDocumentsResponseBaseResponse](./models/update-natural-person-documents-response-base-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/NaturalPerson/{naturalPersonId}/updateDocuments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `proovid.naturalPerson.updateInformation`<a id="proovidnaturalpersonupdateinformation"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateInformationResponse = await proovid.naturalPerson.updateInformation(
  {
    naturalPersonId: 1,
    gender: 0,
    riskLevel: 0,
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### naturalPersonId: `number`<a id="naturalpersonid-number"></a>

##### clientReferenceId: `string`<a id="clientreferenceid-string"></a>

##### taxId: `string`<a id="taxid-string"></a>

##### firstName: `string`<a id="firstname-string"></a>

##### lastName: `string`<a id="lastname-string"></a>

##### middleName: `string`<a id="middlename-string"></a>

##### legalName: `string`<a id="legalname-string"></a>

##### dateOfBirth: `string`<a id="dateofbirth-string"></a>

##### gender:<a id="gender"></a>

##### countryBirth: `string`<a id="countrybirth-string"></a>

##### countryResidence: `string`<a id="countryresidence-string"></a>

##### countryMainBusiness: `string`<a id="countrymainbusiness-string"></a>

##### nationality: `string`<a id="nationality-string"></a>

##### email: `string`<a id="email-string"></a>

##### emailTwo: `string`<a id="emailtwo-string"></a>

##### mobilePhone: `string`<a id="mobilephone-string"></a>

##### mobilePhoneTwo: `string`<a id="mobilephonetwo-string"></a>

##### automaticallyUpdateNPRisk: `boolean`<a id="automaticallyupdatenprisk-boolean"></a>

##### riskLevel:<a id="risklevel"></a>

##### riskLevelJustification: `string`<a id="riskleveljustification-string"></a>

##### isFlagged: `boolean`<a id="isflagged-boolean"></a>

##### comments: `string`<a id="comments-string"></a>

##### economicProfile: [`UpdateNaturalPersonEconomicProfileRequest`](./models/update-natural-person-economic-profile-request.ts)<a id="economicprofile-updatenaturalpersoneconomicprofilerequestmodelsupdate-natural-person-economic-profile-requestts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[NaturalPersonInfoResponseBaseResponse](./models/natural-person-info-response-base-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/NaturalPerson/{naturalPersonId}/updateInfo` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `proovid.naturalPerson.verifyDetails`<a id="proovidnaturalpersonverifydetails"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const verifyDetailsResponse = await proovid.naturalPerson.verifyDetails({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### info: [`AddNaturalPersonInfoRequest`](./models/add-natural-person-info-request.ts)<a id="info-addnaturalpersoninforequestmodelsadd-natural-person-info-requestts"></a>

##### clientReferenceId: `string`<a id="clientreferenceid-string"></a>

##### documents: [`NaturalPersonDocumentsRequest`](./models/natural-person-documents-request.ts)<a id="documents-naturalpersondocumentsrequestmodelsnatural-person-documents-requestts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AddNaturalPersonResponseBaseResponse](./models/add-natural-person-response-base-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/NaturalPerson/verify` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `proovid.naturalPerson.verifyDetails_0`<a id="proovidnaturalpersonverifydetails_0"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const verifyDetails_0Response = await proovid.naturalPerson.verifyDetails_0({
  naturalPersonId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### naturalPersonId: `number`<a id="naturalpersonid-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SumSubVerificationResponseBaseResponse](./models/sum-sub-verification-response-base-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/NaturalPerson/{naturalPersonId}/verify` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `proovid.naturalPerson.verifyDocuments`<a id="proovidnaturalpersonverifydocuments"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const verifyDocumentsResponse = await proovid.naturalPerson.verifyDocuments({
  naturalPersonId: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### naturalPersonId: `number`<a id="naturalpersonid-number"></a>

##### idDocument: [`NaturalPersonIdDocumentRequest`](./models/natural-person-id-document-request.ts)<a id="iddocument-naturalpersoniddocumentrequestmodelsnatural-person-id-document-requestts"></a>

##### addressDocument: [`NaturalPersonDocumentRequest`](./models/natural-person-document-request.ts)<a id="addressdocument-naturalpersondocumentrequestmodelsnatural-person-document-requestts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UpdateNaturalPersonDocumentsResponseBaseResponse](./models/update-natural-person-documents-response-base-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/NaturalPerson/{naturalPersonId}/updateDocuments/verify` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `proovid.naturalPerson.verifyEntity`<a id="proovidnaturalpersonverifyentity"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const verifyEntityResponse = await proovid.naturalPerson.verifyEntity({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### info: [`AddNaturalPersonInfoRequest`](./models/add-natural-person-info-request.ts)<a id="info-addnaturalpersoninforequestmodelsadd-natural-person-info-requestts"></a>

##### clientReferenceId: `string`<a id="clientreferenceid-string"></a>

##### documents: [`NaturalPersonDocumentsRequest`](./models/natural-person-documents-request.ts)<a id="documents-naturalpersondocumentsrequestmodelsnatural-person-documents-requestts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AddNaturalPersonResponseBaseResponse](./models/add-natural-person-response-base-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/NaturalPerson/verifyentity` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `proovid.screening.getAmlReport`<a id="proovidscreeninggetamlreport"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAmlReportResponse = await proovid.screening.getAmlReport({
  reference: "reference_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### reference: `string`<a id="reference-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AmlReport](./models/aml-report.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/Screening/AmlReport/{reference}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `proovid.screening.getNaturalPersonById`<a id="proovidscreeninggetnaturalpersonbyid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getNaturalPersonByIdResponse =
  await proovid.screening.getNaturalPersonById({
    id: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AmlReport](./models/aml-report.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/Screening/NaturalPerson/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `proovid.screening.removeNaturalPerson`<a id="proovidscreeningremovenaturalperson"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeNaturalPersonResponse = await proovid.screening.removeNaturalPerson(
  {
    id: 1,
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `number`<a id="id-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DeleteAmlReport](./models/delete-aml-report.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/Screening/NaturalPerson/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `proovid.screening.submitNaturalPersonScreening`<a id="proovidscreeningsubmitnaturalpersonscreening"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const submitNaturalPersonScreeningResponse =
  await proovid.screening.submitNaturalPersonScreening({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### naturalPersonId: `number`<a id="naturalpersonid-number"></a>

##### firstName: `string`<a id="firstname-string"></a>

##### middleName: `string`<a id="middlename-string"></a>

##### lastName: `string`<a id="lastname-string"></a>

##### dob: `string`<a id="dob-string"></a>

##### partialMatch: `string`<a id="partialmatch-string"></a>

##### document: `string`<a id="document-string"></a>

##### documentType: `string`<a id="documenttype-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[AmlReport](./models/aml-report.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/Screening/NaturalPerson` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
