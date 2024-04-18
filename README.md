This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

So basically this is a redesign and transformation of my former online prtfolio (before 2022) terencendime.com using reactJS & Redux etc

- Clone Project
- run npm install

N:B

- This project has a yml file in the `./github` folder that uses Github actions to automate its CI/CD process.
- The yml script includes, an `npm run build` step that builds the project. It also has an AWS ClI Command that syncs the `./build` folder to an AWS S3 bucket.
- As well as step that invalidates AWS Cloudfront cache via the `AWS CLI v2`
