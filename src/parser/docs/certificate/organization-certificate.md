## Organization Certificate [/organization-certificates/{certificateId}]

+ Parameters
    + certificateId: 2007 (number) - Certificate ID.
+ Attributes (object)
    - id: `10000_1000` (string, required)
    - organizationId: `10000` (number, required)
    - certificate (object, required)
        - id: 1000 (number, required)
        - name: `Bluedrop Learning Network Certificate` (string, required)
    - defaultOrgCert: `true` (boolean, required)

### Get an organization certificate [GET]
Get an organization certificate.

This endpoint can be accessed by:

- `admin` in the certificate's organization.

+ Response 200 (application/json; charset=utf-8)
    + Attributes (Organization Certificate)
    + Schema

            :[](../../schema/organization-certificate/read.schema.json)

### Edit an organization certificate [PUT]
Update an organization certificate. Any organization that offers programs (i.e. product.type = 'newprogram') should have
a default certifcate at the time a program is created.

This endpoint can be accessed by:

- `admin` in the certificate's organization.

+ Request (application/json)
    + Attributes (object)
        - defaultOrgCert: false (boolean)
    + Schema

            :[](../../schema/organization-certificate/update.schema.json)

+ Response 200 (application/json; charset=utf-8)
    + Attributes (Organization Certificate)
    + Schema

            :[](../../schema/organization-certificate/read.schema.json)

### Remove a certificate from an organization [DELETE]
Remove a certificate from an organization. Once a certificate is removed from an organization, the certificate can no
longer be added to any product within the organization. The certficate will still be used for the products that were
previously assigned to.

This endpoint can be accessed by: 

- `admin` in the certificate's organization.

+ Response 200 (application/json; charset=utf-8)
    + Attributes (object)
        - certificateId: 2007 (number, required)

## Add an organization certificate [/organization-certificates]

### Add a certificate to an organization [POST]

Add a certificate to an organization.

This endpoint can be accessed by:

- `admin` of the organization.

+ Request (application/json)
    + Attributes (object)
        - certificateId: 2000 (number, required)
        - defaultOrgCert: false (boolean)
    + Schema

            :[](../../schema/organization-certificate/create.schema.json)

+ Response 201 (application/json; charset=utf-8)
    + Attributes (Organization Certificate)
