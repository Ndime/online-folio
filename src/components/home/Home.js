import React, { Suspense } from "react";
import LazyLoad from "react-lazyload";
import Work from "../work/Work";
import Certs from "../certs/Certs";
import "./Home.scss";

export default function Home() {
  const HomeProfileImage = React.lazy(() => import("./HomeProfileImage"));

  return (
    <>
      <div className="section-wrapper">
        <div className="picture-and-cert">
          <div className="picture-of-me">
            <Suspense
              fallback={
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "300px", height: "300px" }}>Loading...</div>
              }>
              <LazyLoad>
                <HomeProfileImage />
              </LazyLoad>
            </Suspense>
            <div className="circle circle_1"></div>
            <div className="circle circle_2"></div>
            <div className="circle circle_3"></div>
            <div className="circle circle_4"></div>
            <div className="circle circle_5"></div>
            <div className="circle circle_6"></div>
          </div>
          <Certs />
        </div>
        <div className="about-me-text">
          <h1>Terence NDIME</h1>
          <span className="user-title">Javascript - React - Cloud Developer</span>
          <p>
            10 years experienced frontend developer, self starter, with a good knowledge of the CI/CD process & cloud technologies. I have spent 8 of my 10 years of experience utilizing frontend tecnologies (e.g HTML, CSS, Javascipt, jQuery & React JS) to develop and support rich internet applications throughout my carreer.
          </p>
          <p>
            <strong>Tech Stack & Technologies - </strong> HTML, CSS, JavaScript, jQuery, ReactJS, VueJS, NodeJS, REST API's, AWS Cloud Architecture,
            Azure Cloud Architecture, Google Cloud Architecture, Jenkins, Terraform, Ansible, Docker, Kubernetes, AWS Cloud Formation, EC2, ECS, S3,
            AWS LightSail, Lambda, IAM, Git, Github, Gitlab, BitBucket, CodeCommit, CodeBuild, CodeDeploy, CodePipeline, DynamoDB, Route53, CloudFront
            etc
          </p>
        </div>
      </div>
      <Work />
    </>
  );
}
