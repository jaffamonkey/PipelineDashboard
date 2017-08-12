# PipelineDashboard API

Using Serverless framework on AWS Lambda

## QuickStart

Install [Serverless](https://serverless.com) with `npm install -g serverless`.

### Deploy

`serverless deploy -v`

### Delete Deployment

`serverless remove`

## Development

1. `npm install`
2. `serverless dynamodb install`
3. `serverless offline start` (need `java` installed)
4. `serverless dynamodb migrate` (this imports schema)

### Debugging

`serverless logs -f environmentList -t`

## Restful API

### List

`GET /environments`

```json
{
    "total": 2,
    "list": [
        {
            "latestRelease": null,
            "isPrivate": false,
            "releases": 0,
            "updatedAt": "2017-07-30T10:22:00.297Z",
            "createdAt": "2017-07-30T10:22:00.297Z",
            "description": "This is a test server",
            "id": "ec546590-7510-11e7-91bc-8353beebb88a",
            "tags": [
                "dev"
            ],
            "title": "Test server"
        },
        {
            "latestRelease": "v0.0.3",
            "isPrivate": false,
            "releases": 2,
            "updatedAt": "2017-08-04T08:44:56.748Z",
            "createdAt": "2017-08-04T08:27:14.578Z",
            "link": null,
            "description": "This is a test server 2 aaaa",
            "id": "b82fcf20-78ee-11e7-9196-efded3e8d95c",
            "tags": [
                "test"
            ],
            "title": "Test server 2"
        }
    ]
}
```

### Create

```
POST /environments

{
	"title":"Test server",
	"description":"This is a test server",
	"tags": ["dev"]
}

```

```json
{
    "id": "ec546590-7510-11e7-91bc-8353beebb88a",
    "title": "Test server",
    "description": "This is a test server",
    "tags": [
        "dev"
    ],
    "isPrivate": false,
    "createdAt": "2017-07-30T10:22:00.297Z",
    "updatedAt": "2017-07-30T10:22:00.297Z"
}
```

### Details

`GET /environments/{id}

```json
{
    "latestRelease": "v0.0.3",
    "isPrivate": false,
    "releases": 2,
    "updatedAt": "2017-08-04T08:44:56.748Z",
    "createdAt": "2017-08-04T08:27:14.578Z",
    "link": null,
    "description": "This is a test server 2 aaaa",
    "id": "b82fcf20-78ee-11e7-9196-efded3e8d95c",
    "tags": [
        "test"
    ],
    "title": "Test server 2"
}
```

### Update

```
PATCH /environments/{id}

[
	{
		"op": "replace",
		"path": "/title",
		"value": "test server 2a"
	},
	{
		"op": "replace",
		"path": "/description",
		"value": "test description 2a"
	}
]
```

```json
{
    "id": "ec546590-7510-11e7-91bc-8353beebb88a",
    "title": "test server 2a",
    "description": "test description 2a",
    "tags": [
        "dev"
    ],
    "isPrivate": false,
    "createdAt": "2017-07-30T10:22:00.297Z",
    "updatedAt": "2017-07-30T10:22:00.297Z"
}
```

### Deployed version

```
POST /environments/{id}/deployed

{
	"release": "v0.0.3"
}
```

```json
{
    "latestRelease": "v0.0.3",
    "isPrivate": false,
    "releases": 2,
    "updatedAt": "2017-08-04T08:28:05.848Z",
    "createdAt": "2017-08-04T08:27:14.578Z",
    "description": "This is a test server 2",
    "id": "b82fcf20-78ee-11e7-9196-efded3e8d95c",
    "tags": [
        "test"
    ],
    "title": "Test server 2"
}
```