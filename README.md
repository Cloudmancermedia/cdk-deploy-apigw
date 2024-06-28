# Deploy and test a Lambda REST API Gateway

Deploy an API Gateway using the AWS CDK in Typescript.

to test your endpoint 

`curl -H "Origin: http://google.com" \
-H "Access-Control-Request-Method: GET" \
-H "Access-Control-Request-Headers: X-Requested-With" \
-X GET --verbose \
your-function-url-here`
