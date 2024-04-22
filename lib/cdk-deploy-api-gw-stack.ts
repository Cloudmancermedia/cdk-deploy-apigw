import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Runtime, FunctionUrlAuthType } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { LambdaRestApi, LambdaIntegration } from 'aws-cdk-lib/aws-apigateway';

export class CdkDeployApiGwStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const nodejsFunction = new NodejsFunction(
      this,
      "NodeJsFunction",
      {
        entry: "lib/lambdas/nodeLambdaFunction.ts",
        handler: "handler",
        memorySize: 128,
        runtime: Runtime.NODEJS_LATEST
      }
    )

    const apigateway = new LambdaRestApi(
      this,
      "LambdaRestApi",
      {
        handler: nodejsFunction,
        proxy: false,
        restApiName: "MyRestApi",
      }
    )

    const sayHello = apigateway.root.addResource("say-hello")
    sayHello.addMethod("GET", new LambdaIntegration(nodejsFunction))

    nodejsFunction.addFunctionUrl({
      authType: FunctionUrlAuthType.NONE
    })
  }
}
