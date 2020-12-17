import { React, Component, useRef, useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './SearchBar.css';
const axios = require('axios');

function SearchBar(props) {
  const textInput = useRef();

  function show() {
    const text = textInput.current.value;
    var isCheck = false;
    if (!text) {
      alert('Không được để trống');
      return false;
    }
    async function callApi(name) {
      const url = 'https://api.openweathermap.org/data/2.5/weather';
      const appId = '82471f382216cbbdbb412df76b9b8cb8';

      try {
        const response = await axios.get(url, {
          params: {
            q: name,
            units: 'metric',
            appid: appId,
            lang: 'vi',
          },
        });

        textInput.current.value = '';
        return true;
      } catch (err) {
        alert('Tên thành phố không tồn tại');
        textInput.current.value = '';
        return false;
      }
    }

    callApi(text).then((noti) => {
      if (noti === true) {
        console.log('text ', text);
        props.func(text);
      }
    });
  }
  return (
    <Form className="form">
      <Form.Group controlId="formBasicEmail">
        {/* <Form.Label lassName="form-label">Nhập tên thành phố</Form.Label> */}
        <div className="form-search">
          <Form.Control
            ref={textInput}
            type="text"
            placeholder="VD: Hà Nội"
            className="input"
          />
          <Button
            variant="primary"
            type="button"
            className="button-submit"
            onClick={show}
          >
            Submit
          </Button>
        </div>
      </Form.Group>
    </Form>
  );
}
export default SearchBar;
