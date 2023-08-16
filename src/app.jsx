import React from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});

  const callApi = (reqParams) => {
    // Mock output
    const newData = {
      count: 2,
      results: [
        { name: 'fake thing 1', url: 'http://fakethings.com/1' },
        { name: 'fake thing 2', url: 'http://fakethings.com/2' },
      ],
    };
    setData(newData);
    setRequestParams(reqParams);
    console.log(data)
  }

  return (
    <React.Fragment>
      <Header />
      <div data-testid="req-method">Request Method: {requestParams.method}</div>
      <div data-testid="url">URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={requestParams.data} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
