# Deploy and test a Lambda REST API Gateway

Watch [Part 1](https://www.youtube.com/watch?v=f86Y6iVcn-4) on Youtube. This shows you to deploy the API Gateway normally.

Watch [Part 2](https://www.youtube.com/watch?v=A6hjOiw4yIQ) on YouTube. This shows how to use a function URL to bypass the 29 second API Gateway timeout.

Deploy an API Gateway using the AWS CDK in Typescript.

to test your endpoint 

`curl -H "Origin: http://google.com" \
-H "Access-Control-Request-Method: GET" \
-H "Access-Control-Request-Headers: X-Requested-With" \
-X GET --verbose \
your-function-url-here`
