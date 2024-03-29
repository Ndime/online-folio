import React, { Suspense } from "react";
import LazyLoad from "react-lazyload";
import Work from "../work/Work";
import "./Home.scss";

export default function Home() {
  const HomeProfileImage = React.lazy(() => import("./HomeProfileImage"));

  return (
    <>
      <div className="section-wrapper">
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
        <div className="about-me-text">
          <h1>Terence NDIME</h1>
          <span className="user-title">FullStack Developer - Cloud Architect</span>
          <p>
            10 years experienced, full stack web developer & Cloud Architect with a proven track record of developing rich internet applications and
            building cloud architectures using modern web technologies & the cloud in the Front &amp; Backend stack.
          </p>
          <p>
            <strong>Tech Stack & Technologies - </strong> HTML, CSS, JavaScript, jQuery, ReactJS, VueJS, NodeJS, REST API's, AWS Cloud Architecture,
            Azure Cloud Architecture, Google Cloud Architecture, Jenkins, Terraform, Ansible, Docker, Kubernetes, AWS Cloud Formation, EC2, ECS, S3,
            AWS LightSail, AWS Lambda, IAM, Git, Github, Gitlab, BitBucket & CI/CD Pipelines etc
          </p>
        </div>
      </div>
      <Work />
    </>
  );
}
