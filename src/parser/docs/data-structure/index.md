# Data Structures

## Address (object)
- id: 10000 (number)
- name (string)
- `post-office-box` (string)
- `extended-address` (string)
- `street-address`: `1230 Main Street` (string)
- locality: `Vancouver` (string)
- region: `BC` (string)
- `postal-code`: `V6B 5N2` (string)
- `country-name`: `CA` (string)
- district (string)

## Category Base (object)
- id: 1000 (number, required)
- name: `Bluedrop Learning Network Category` (string, required)

## Contact (object)
- name (string)
- tel (object)
    - type: `work` (enum[string], required)
        - `work`
    - value: `1-604-111-2222` (string, required)
- fax (string)
- email (object)
    - type: `work` (enum[string], required)
        - `work`
    - value: `whinstructor@example.com` (string, required)

## Class Base (object)
- id: 1000 (number, required)
- name: `Class 1000` (string, nullable, required)
- logo (object, nullable, required)
    - url: `https://dev-bln-content.s3.amazonaws.com/040d18b5-1252-4e2a-94f4-326325f5230a/Nursing_Assistant.png` (string, required)
    - fileName: `image.jpg` (string, required)

## Employer Base (object)
- id: 100 (number, required)
- name: `employer 100` (string, required)
- networkId: 1001 (number, nullable, required)
- externalId: `100-100` (string, nullable, required)
- address (Address, required)
- contact (object, required)

## Event Base (object)
- id: 10000 (number, required)
- dtStart: `2015-10-01 10:00:00+02` (string, required)
- dtEnd: `2015-10-01 12:00:00+02` (string, required)

## Learning Activity Base (object)
- id: 10000 (number, required)
- organizationId: 401 (number, required)
- networkId (number, nullable, required)
- name: `Resume Writing` (string, required)
- description: `How to write a great resume` (string, required)
- type: `online` (enum[string], required)
    - `assignment`
    - `document`
    - `lab`
    - `offline`
    - `online`
    - `resource`
    - `test`
- logo (object, nullable, required)
    - url: `https://dev-bln-content.s3.amazonaws.com/040d18b5-1252-4e2a-94f4-326325f5230a/Nursing_Assistant.png` (string, required)
    - fileName: `image.jpg` (string, required)
- xapiActivityId: `tag:bluedrop.io,2016:learning-activity:401` (string, nullable, required)
- contentUpdated: null (string, nullable, required)
- attachment (object, nullable, required)
    - url: `https://dev-bln-content.s3.amazonaws.com/040d18b5-1252-4e2a-94f4-326325f5230a/Nursing_Assistant.png` (string, required)
    - fileName: `image.jpg` (string, required)
- created: `2015-10-01 10:23:54+02` (string, required)

## Network Base (object)
- id: 10000 (number, required)
- name: `Nursing network` (string, required)

## Organization Base (object)
- id: 10000 (number, required)
- key: `nurse` (string, required)
- name: `Nursing organization` (string, required)
- logo (object, nullable, required)
    - url: `https://dev-bln-content.s3.amazonaws.com/040d18b5-1252-4e2a-94f4-326325f5230a/Nursing_Assistant.png` (string, required)
    - fileName: `image.jpg` (string, required)

## Payment Base (object)
- id: 10000 (number, required)
- paymentMethod (object, required)
    - id: 10000 (number, required)
    - key: `credit_card` (string, required)

## Product Base (object)
- id: 10000 (number, required)
- name: `Nursing network` (string, required)
- type: `online` (string, required)
- logo (object, nullable, required)
    - url: `https://dev-bln-content.s3.amazonaws.com/040d18b5-1252-4e2a-94f4-326325f5230a/Nursing_Assistant.png` (string, required)
    - fileName: `image.jpg` (string, required)

## Program Item Raw (object)
- id: 10000 (number, required)
- programId: 401 (number, required)
- weight: 0.3 (number, required)
- topicId: 407 (number, nullable, required)
- learningActivityId (number, nullable, required)
- learningActivityTopicId (number, nullable, required)
- position: 0 (number, required)
- created: `2015-10-01 10:23:54+02` (string, required)
- modified (string, nullable, required)

## Topic Base (object)
- id: 10000 (number, required)
- programId: 401 (number, required)
- networkId (number, nullable, required)
- name: `Introduction to Resume Writing` (string, required)
- type: `learning` (enum[string], required)
    - `learning`
    - `resource`

## User Base (object)
- id: 10000 (number, required)
- firstname: `Mary` (string, nullable, required)
- lastname: `Smithe` (string, nullable, required)
- avatar (object)
    - gravatar: `b1ee5260fbee69bd3d2426375772e741` (string)
    - url: `https://dev-bln-content.s3.amazonaws.com/040d18b5-1252-4e2a-94f4-326325f5230a/Nursing_Assistant.png` (string)
