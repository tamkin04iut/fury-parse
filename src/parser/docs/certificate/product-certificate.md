## Product Certificate [/product-certificates{?productId,certificateId}]

+ Parameters
    + productId: 4002 (number, required).
    + certificateId: 2006 (number, required).
+ Attributes (object)
    - id: `100_1000` (string, required)
    - product (object, required)
        - id: 100 (number, required)
        - name: `Resume Writing` (string, required)
    - certificate (object, required)
        - id: 1000 (number, required)
        - name: `Bluedrop Learning Network Certificate` (string, required)
    - defaultOrgCert (boolean, required)

### Delete product certificate [DELETE]
Remove product certificate record.

This endpoint can be accessed by:

- `admin` in the product's organization

+ Response 200 (application/json; charset=utf-8)
    + Attributes (object)
        - productId: 4002 (number, required)
        - certificateId: 2006 (number, required)

## Product Certificate Collection [/product-certificates{?productId,sort,order}]

### List product certificates [GET]
Get a list of product certificates.

This endpoint can be accessed by:
- `member` in the certificate's organization

+ Parameters
    + productId: `1601, 4001, 4002` (string, optional) - A list of product IDs. Accepts multiple IDs by comma-separated string.
    + sort (string, optional) - Sort the results by `productId`, `productName`, `certificateId` or `certificateName`.
        + Default: `productId`
    + order (string, optional) - Order the results in `asc` or `desc` order.
        + Default: `asc`

+ Response 200 (application/json; charset=utf-8)
    + Attributes (array[Product Certificate])
    + Schema

            :[](../../schema/product-certificate/find.schema.json)

## Add Product Certificate [/product-certificates]

### Add a new product certificate [POST]
Create a new product certificate. If `certificateId` is not provided then organization default certificate
will be assigned.

This endpoint can be accessed by:

- `admin` of the given product's organization.

+ Request (application/json)
    + Attributes (object)
        - productId: 4011 (number, required)
        - certificateId: 2006 (number, optional)
    + Schema

            :[](../../schema/product-certificate/create.schema.json)

+ Response 201 (application/json; charset=utf-8)
    + Attributes (Product Certificate)
    + Schema

            :[](../../schema/product-certificate/read.schema.json)
