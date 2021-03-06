import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QA = ({ question }) => {
  const { name, subject, content, time, response } = question;

  return (
    <div className="card mb-4">
      <div className="card-header" role="tab" id="headingOne">
        <h5 className="mb-0">
          <a
            data-toggle="collapse"
            data-parent="#accordion"
            href="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {subject}
          </a>
        </h5>
      </div>
      <div
        id="collapseOne"
        className="collapse show"
        role="tabpanel"
        aria-labelledby="headingOne"
      >
        <div className="card-body">
          <div className="row">
            <div className="col-md-1 text-primary">
              <h1>Q.</h1>
            </div>
            <div className="col-md-11">
              <p>
                {name} {time}：
              </p>
              <p>{content}</p>
            </div>
          </div>
          <hr />
          {response !== undefined ? (
            <div className="row">
              <div className="col-md-1 text-info">
                <h1>A.</h1>
              </div>
              <div className="col-md-11">
                <p>
                  {response.name} {response.time}：
                </p>
                <p>{response.content}</p>
              </div>
            </div>
          ) : (
              <div></div>
            )}
        </div>
      </div>
    </div>
  );
};

const MessageBoard = ({ submitInput }) => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    submitInput(inputs);
    setInputs({});
  };

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="row">
      <div className="col-lg-12 mb-4">
        <h2 style={{ fontWeight: 'bold' }}>— 聯絡我們 —</h2>
        <form
          method="post"
          name="sentMessage"
          onSubmit={handleSubmit}
          id="contactForm"
          noValidate
        >
          <div className="control-group form-group">
            <div className="controls">
              <label>您的名字：</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                onChange={handleInputChange}
                value={inputs.name || ''}
                required
                data-validation-required-message="Please enter your name."
              />
              <p className="help-block"></p>
            </div>
          </div>
          <div className="control-group form-group">
            <div className="controls">
              <label>您的電子郵件信箱：</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={handleInputChange}
                value={inputs.email || ''}
                required
                data-validation-required-message="Please enter your email address."
              />
            </div>
          </div>
          <div className="control-group form-group">
            <div className="controls">
              <label>標題：</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="subject"
                onChange={handleInputChange}
                value={inputs.subject || ''}
                required
                data-validation-required-message="Please enter your title."
              />
              <p className="help-block"></p>
            </div>
          </div>
          <div className="control-group form-group">
            <div className="controls">
              <label>您的留言：</label>
              <textarea
                rows="10"
                cols="100"
                className="form-control"
                id="message"
                name="content"
                onChange={handleInputChange}
                value={inputs.content || ''}
                required
                data-validation-required-message="Please enter your message"
                maxLength="999"
                style={{ resize: 'none' }}
              ></textarea>
            </div>
          </div>
          <div id="success"></div>
          <button
            type="submit"
            className="btn btn-primary"
            id="sendMessageButton"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
const Question = () => {
  const [questions, setQuestions] = useState([
    { name: '', subject: '', time: '', content: '' },
  ]);

  const fetchQuestions = async () => {
    const result = await axios('/api/queryQuestions');
    setQuestions(result.data);
  };
  useEffect(() => {
    fetchQuestions();
  }, []);

  const submitInput = async inputs => {
    const result = await axios.post('/api/creatQuestion', inputs);
    const response = result.data;
    console.log(response);
    if (response !== 'QQ') {
      fetchQuestions();
    }
  };

  return (
    <div className="container">
      <h1 className="mt-4 mb-3">問題反應</h1>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="index.html">Home</a>
        </li>
        <li className="breadcrumb-item active">問題反應</li>
      </ol>
      <div
        className="mb-4"
        id="accordion"
        role="tablist"
        aria-multiselectable="true"
      >
        {questions.map((question, index) =>
          question.name ? <QA key={index} question={question} /> : <div></div>,
        )}
      </div>
      <MessageBoard submitInput={submitInput} />
    </div>
  );
};
export default Question;
