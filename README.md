# Products - API for Project Catwalk
This service acts as a back-end system to provide the resources and data for all Products found in Project Catwalk. This service is part of a larger service that replaces the Atelier API.

## Set up

### Getting Started
  * Run `npm install` to download dependencies
  * Run `npm start` to start server running on Port 3001
  * Create a .env file and fill in the appropriate values (note LOADER_IO is optionally for testing):
    POSTGRES_USER=username
    POSTGRES_HOST=localhost
    POSTGRES_PASSWORD=yourpassword
    POSTGRES_DB=yourdb
    POSTGRES_PORT=5432
    LOADER_IO=somelongstringfromloader.io

### Set-up databases
  * Change the paths for your data (CSVs) in server/db/schema.sql
  * Run `npm run create-db` to load and index the database to postgreSQL

## API services
The following are the services provided by this API.

### Get products
  * GET `api/products`
  * Retrieves the list of products

**Query Parameters:**
  * `page` - Selects the page of results to return. Default 1.
  * `count` - Specifies how many results per page to return. Default 5.

**Success Status Code:** `200 OK`

**Returns:** JSON

```json
    {
      "id": "Number",
      "name": "String",
      "slogan": "String",
      "description": "String",
      "category": "String",
      "default_price": "String",
      "created_at": "String",
      "updated_at": "String"
    }
```

### Get product information by ID
  * GET `api/products/:product_id`
  * Retrieves product level information for a specified product id

**Path Parameters:**
  * `product_id` - Required ID of the product requested

**Success Status Code:** `200 OK`

**Returns:** JSON

```json
    {
      "id": "Number",
      "name": "String",
      "slogan": "String",
      "description": "String",
      "category": "String",
      "default_price": "String",
      "created_at": "String",
      "updated_at": "String",
      "features": [
        {
          "feature": "String",
          "value": "String"
        }
      ]
    }
```

### Get product styles
  * GET `api/products/:product_id/styles`
  * Retrieves all styles for a specified product id

**Path Parameters:**
  * `product_id` - Required ID of the product requested

**Success Status Code:** `200 OK`

**Returns:** JSON
```json
    {
      "product_id": "String",
      "results": [
        {
          "style_id": "Number",
          "name": "String",
          "original_price": "String",
          "sale_price": "String",
          "default?": "Boolean",
          "photos": [
            {
              "thumbnail_url": "String",
              "url": "String"
            },
          ],
          "skus": {
            "[sku_id]": {
                "quantity": "Number",
                "size": "String"
              }
          }
        }
      ]
    }
```

### Get related product styles
  * GET `api/products/:product_id/related`
  * Retrieves all related styles for a specified product id

**Path Parameters:**
  * `product_id` - Required ID of the product requested

**Success Status Code:** `200 OK`

**Returns:** JSON
```json
    [
      "Number",
      "Number",
      "Number"
    ]
```