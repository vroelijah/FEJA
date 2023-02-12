import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ScanCommand } from '@aws-sdk/client-dynamodb';
import {DynamoDBClient}from "@aws-sdk/client-dynamodb";
const client = new DynamoDBClient({ region: "us-east-1",
 secretAccessKey: '',
 accessKeyId: ''
});


const params ={
  TableName:"LibraryData"
}
const run = async () => {
  try {
    const data = await client.send(new ScanCommand(params));
    data.Items.forEach(function (element) {
      console.log(element.Title.S + " (" + element.Subtitle.S + ")");
    });
    return data;
  } catch (err) {
    console.log("Error", err);
  }
};
run();




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
