import React from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [requestParams, setRequestParams] = useState({});
  const [dataArray, setDataArray] = useState([]);

  const callApi = async(reqParams) => {
    setRequestParams(reqParams);

    const newDataArray = [...dataArray, reqParams];
    setDataArray(newDataArray);
    const response = await axios.get(reqParams.url);
    const newData = {
      count: newDataArray.length,
      results: response.data 
    };

    setData(newData);
  }

  return (
    <React.Fragment>
      <Header />
      <div data-testid="req-method">Request Method: {requestParams.method}</div>
      <div data-testid="url">URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
