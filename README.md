# Sample terraform localstack

Sample project to use Terraform, Localstack (AWS Local) and Docker compose with Nodejs.


### Important

As this is a simple example I will use only this references. Please change it :wink:

```
AWS_ACCESS_KEY_ID='123'
AWS_SECRET_KEY='xyz'
AWS_BUCKET_NAME='demo-bucket'
AWS_BUCKET_REGION='us-east-1'
```

### What is this about?

**Previous Steps...**
- You need to install [Docker and Docker Compose](https://docs.docker.com/install/) to play this game :wink:
- You need to simulate AWS in local?. 
    - I used [Localstack](https://localstack.cloud/) as part of the docker compose dependencies. Let's keep it simple and clean :muscle:
    - Just run `docker-compose up`
    - Check `http://localhost:8055/#/infra`


**Time to play**
- You need to run/test [Terraform scripts](https://www.terraform.io/)? 
    - You need to [install Terraform in your machine](https://learn.hashicorp.com/terraform/azure/install_az) (for mac: `brew install terraform`)
    - Check the example file `main.tf`
    - Initialize the enviroment `terraform init`
    - Execute it `terraform apply`
    - Check `http://localhost:4572/` and `http://localhost:8055/#/infra`
- You need to run AWS Cli commands?
    - You need to install [AWS CLI](https://docs.aws.amazon.com/es_es/cli/latest/userguide/cli-chap-install.html) (for mac: `brew install awscli`)
    - Example of bucket creation
        - Update you config `aws config` check `.env`
        - Create Bucket `aws --endpoint-url=http://localhost:4572 s3 mb s3://demo-bucket`
        - Attach an [ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html) to the bucket so it is readable `aws --endpoint-url=http://localhost:4572 s3api put-bucket-acl --bucket demo-bucket --acl public-read`
    - Check `http://localhost:4572/` and `http://localhost:8055/#/infra`
- You need to run SDK Scripts?
    - [Install Node](https://nodejs.org/en/download/)
    - Check `aws.js` and `upload-demo.js`
    - Install dependencies `npm install`
    - Run the script `node upload-demo`
    - Check `./localstack/data` files


### Context (Please Read)
- [How to fake AWS locally with LocalStack by Joseph Thomas (@good-idea)](https://dev.to/goodidea/how-to-fake-aws-locally-with-localstack-27me)
- [System testing: Localstack + Terraform by Rodion Chachura (@RodionChachura)](https://medium.com/@geekrodion/system-testing-localstack-terraforms-37b31ba99310)
- [Gist | Terraform + Localstack by Diego Pacheco(@diegopacheco)](https://gist.github.com/diegopacheco/6c2fe827444d4f3a350ba1f477a7d1e4)
- [Extra: Git Crypt Cheatsheet by @skylander](https://gitlab.com/snippets/1711341)
