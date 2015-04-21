Sample code to use AWS Lambda to receive and event (JSON hash) and HTTP GET the URLs.  
Ideally, you would create a AWS Lambda function in each region you want to execute from.


##### Create function using AWS CLI (Assumes you have zipped up your function in a .zip)

```
aws lambda create-function --region us-west-2 --function-name warm_cdn --zip-file fileb://warm_cdn.zip --role arn:aws:iam::<YOURID>:role/executionrole --handler warm_cdn.handler --runtime nodej
```

##### Run the function in us-west-2 (The function will log to CloudWatch for troubleshooting)

```
aws lambda invoke --invocation-type RequestResponse --function-name warm_cdn --region us-west-2 --payload file://example_event.json outputfile.txt
```

##### TODO:

* Need better logging, it doesn't appear to log response codes
