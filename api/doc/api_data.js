define({ "api": [
  {
    "type": "get",
    "url": "/regions",
    "title": "All",
    "name": "All",
    "group": "Regions",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/regions"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "regions",
            "description": "<p>Wine regions</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\"Bordeaux\", \"Loire\"]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server.js",
    "groupTitle": "Regions"
  },
  {
    "type": "get",
    "url": "/wines/:id",
    "title": "By Id",
    "name": "By_Id",
    "group": "Wines",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>the id of the wine</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/wines/:id"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the wine</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the wine</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type of wine</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "appellation",
            "description": "<p>Appellation of the wine</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "appellation.name",
            "description": "<p>Name of the appellation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "appellation.region",
            "description": "<p>Region of the appellation</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "grapes",
            "description": "<p>Grapes used to produce the wine</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"cheval-noir\",\n  \"name\": \"Cheval Noir\",\n  \"type\": \"Rouge\",\n  \"appellation\": {\"name\": \"Saint-Emilion\", \"region\": \"Bordeaux\"},\n  \"grapes\": [\"Cabernet Sauvignon\", \"Merlot\", \"Cabernet Franc\"]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "404",
            "description": "<p>Not found - No wine corresponding to given 'id'</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server.js",
    "groupTitle": "Wines"
  },
  {
    "type": "get",
    "url": "/wines?region=:region",
    "title": "By Region",
    "name": "By_Region",
    "group": "Wines",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "region",
            "description": "<p>the region to get wines from</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/wines"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "wines",
            "description": "<p>List of wines</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wines.id",
            "description": "<p>Id of the wine</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wines.name",
            "description": "<p>Name of the wine</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wines.type",
            "description": "<p>Type of wine</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "wines.appellation",
            "description": "<p>Appellation of the wine</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wines.appellation.name",
            "description": "<p>Name of the appellation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wines.appellation.region",
            "description": "<p>Region of the appellation</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "wines.grapes",
            "description": "<p>Grapes used to produce the wine</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"id\": \"cheval-noir\",\n    \"name\": \"Cheval Noir\",\n    \"type\": \"Rouge\",\n    \"appellation\": {\"name\": \"Saint-Emilion\", \"region\": \"Bordeaux\"},\n    \"grapes\": [\"Cabernet Sauvignon\", \"Merlot\", \"Cabernet Franc\"]\n  },\n  {\n    \"id\": \"les-hauts-de-tour-prignac\",\n    \"name\": \"Les Hauts de Tour Prignac\",\n    \"type\": \"Rouge\",\n    \"appellation\": {\"name\": \"Médoc\", \"region\": \"Bordeaux\"},\n    \"grapes\": [\"Cabernet Sauvignon\", \"Merlot\"]\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "400",
            "description": "<p>Bad request - 'region' query parameter is missing.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server.js",
    "groupTitle": "Wines"
  },
  {
    "type": "get",
    "url": "/wines/:id/comments",
    "title": "Comments",
    "name": "Comments",
    "group": "Wines",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>the id of the wine</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/wines/:id/comments"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>the date of the comment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>the title of the comment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>the comment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    date: \"2016-03-13T20:49:12.129Z\",\n    title: \"Un bon bordeaux !\",\n    content: \"J'ai bu le millésime 2009, parfait après une heure en carafe !\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "404",
            "description": "<p>Not found - No wine corresponding to given 'id'</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server.js",
    "groupTitle": "Wines"
  },
  {
    "type": "get",
    "url": "/wines/:id/image",
    "title": "Image",
    "name": "Image",
    "group": "Wines",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>the id of the wine</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "404",
            "description": "<p>Not found - No wine corresponding to given 'id'</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server.js",
    "groupTitle": "Wines"
  },
  {
    "type": "get",
    "url": "/wines/:id/image",
    "title": "Liked ?",
    "name": "Liked__",
    "group": "Wines",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>the id of the wine</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/api/wines/:id/like"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "like",
            "description": "<p>indicates if the current user likes the wine</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"like\": false\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "404",
            "description": "<p>Not found - No wine corresponding to given 'id'</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/server.js",
    "groupTitle": "Wines"
  }
] });
