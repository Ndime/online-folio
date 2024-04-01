import React from "react";
import { HashRouter } from "react-router-dom";
import { AwsRum } from "aws-rum-web";

import Body from "./components/body/Body";
import Sidebar from "./components/sidebar/Sidebar";

import "./App.css";

export default function App() {
  try {
    const config = {
      sessionSampleRate: 1,
      guestRoleArn: "arn:aws:iam::293097753573:role/RUM-Monitor-us-east-1-293097753573-2203337391171-Unauth",
      identityPoolId: "us-east-1:42d5e51c-6992-4f17-8470-40cb643923d1",
      endpoint: "https://dataplane.rum.us-east-1.amazonaws.com",
      telemetries: ["performance", "errors", "http"],
      allowCookies: true,
      enableXRay: false,
    };

    const APPLICATION_ID = "21bd472c-11ba-46ef-9366-16fd66afc16a";
    const APPLICATION_VERSION = "1.0.0";
    const APPLICATION_REGION = "us-east-1";

    const awsRum = new AwsRum(APPLICATION_ID, APPLICATION_VERSION, APPLICATION_REGION, config);
  } catch (error) {
    // Ignore errors thrown during CloudWatch RUM web client initialization
  }

  return (
    <div className="site-wrapper">
      <HashRouter basename="/">
        <Body />
        <Sidebar />
      </HashRouter>
    </div>
  );
}
