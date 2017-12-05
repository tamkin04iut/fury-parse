## Certificate [/certificates/{certificateId}]

+ Parameters
    + certificateId: 3001 (number) - Certificate ID.
+ Attributes (object)
    - id: `3001` (number, required)
    - name: `Bluedrop Learning Network Certificate` (string, required)
    - ownerOrganizationId: `501` (number, required)
    - positioning (object, nullable, required)
    - spec (object, nullable, required)
    - backgroundUrl (object, required)
        - url: `https://dev-bln-content.s3.amazonaws.com/040d18b5-1252-4e2a-94f4-326325f5230a/education.png` (string, required)
        - fileName: `education.png` (string, required)
    - created: `2015-10-01 10:23:54+02` (string, required)
    - modified (string, nullable, required)

### Get a certificate [GET]
Get a certificate.

This endpoint can be accessed by:

- `admin` in the organization.

+ Response 200 (application/json; charset=utf-8)
    + Attributes (Certificate)
    + Schema

            :[](../../schema/certificate/read.schema.json)

### Edit a certificate [PUT]
Update a certificate.

This endpoint can be accessed by:

- `admin` of given certificateId's owner organization

+ Request (application/json)
    + Attributes (object)
        - name: `Updated Bluedrop Learning Network Certificate` (string)
    + Schema

            :[](../../schema/certificate/update.schema.json)

+ Response 200 (application/json; charset=utf-8)
    + Attributes (Certificate)
    + Schema

            :[](../../schema/certificate/read.schema.json)

### Delete a certificate [DELETE]
Remove a certificate. The certificate will be removed from all organizations and all products that are currently
assigned to.

This endpoint can be accessed by:

- `admin` of given certificateId's owner organization

+ Response 200 (application/json; charset=utf-8)
    + Attributes (object)
        - id: 3001 (number, required)

## Certificate Collection [/certificates{?ownerOrganizationId,query,sort,order}]

### List certificates [GET]
Get a list of certificates.

This endpoint can be accessed by:
- `admin` of organization

+ Parameters
    + ownerOrganizationId: `501` (integer, optional) - Certificate ownerOrganizationId.
    + query (string, optional) - Search partial matches on `name`.
    + sort (string, optional) - Sort the results by `name` or `created`.
        + Default: `name`
    + order (string, optional) - Order the results in `asc` or `desc` order.
        + Default: `asc`

+ Response 200 (application/json; charset=utf-8)
    + Attributes (array[Certificate])
    + Schema

            :[](../../schema/certificate/find.schema.json)

## Add a certificate [/certificates]

### Add a certificate [POST]

Add a certificate.

This endpoint can be accessed by:

- `admin` of the organization.

+ Request (application/json)
    + Attributes (object)
        - name: `Bluedrop Learning Network Certificate` (string, required)
        - backgroundUrl (object, required)
            - url: `https://dev-bln-content.s3.amazonaws.com/040d18b5-1252-4e2a-94f4-326325f5230a/education.png` (string, required)
    + Schema

            :[](../../schema/certificate/create.schema.json)

+ Response 201 (application/json; charset=utf-8)
    + Attributes (Certificate)
