import React, { useRef, useState } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: ""
  });
  const { name, nickname } = inputs;
  const nameInputRef = useRef();

  console.log(nameInputRef);

  const onChange = e => {
    const { value, name } = e.target;
    console.log(e.target.value);
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: ""
    });
    nameInputRef.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        value={name}
        placeholder="이름"
        onChange={onChange}
        ref={nameInputRef}
      />
      <input
        name="nickname"
        value={nickname}
        placeholder="닉네임"
        onChange={onChange}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
