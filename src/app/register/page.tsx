"use client";
import CheckIcon from "@/components/Common/Icons/CheckIcon";
import autoHyphen from "@/utils/autoHyphen";
import React, { useEffect, useState } from "react";

const RegisterPage = () => {
  const [inputCheck, setInputCheck] = useState({
    name: {
      value: "",
      status: "default",
      isConfirmed: false,
    },
    email: {
      value: "",
      status: "default",
      isConfirmed: false,
    },
    password: {
      value: "",
      status: "default",
      isConfirmed: false,
    },
    passwordConfirm: {
      value: "",
      status: "default",
      isConfirmed: false,
    },
    phoneNumber: {
      value: "",
      status: "default",
      isConfirmed: false,
    },
    address: {
      value: "",
      status: "default",
      isConfirmed: false,
    },
  });

  const emailInput = document.getElementById("email-input");
  const nameInput = document.getElementById("name-input");
  const passwordInput = document.getElementById("password-input");
  const passwordConfirmInput = document.getElementById(
    "password-confirm-input"
  );
  const phoneNumberInput = document.getElementById("phone-number-input");

  useEffect(() => {
    if (inputCheck.passwordConfirm.value === "") {
      setInputCheck((prevState) => ({
        ...prevState,
        passwordConfirm: { ...prevState.passwordConfirm, status: "default" },
      }));
    } else if (inputCheck.password.value === "") {
      setInputCheck((prevState) => ({
        ...prevState,
        passwordConfirm: { ...prevState.passwordConfirm, status: "default" },
      }));
    } else if (inputCheck.passwordConfirm.value === inputCheck.password.value) {
      setInputCheck((prevState) => ({
        ...prevState,
        passwordConfirm: { ...prevState.passwordConfirm, status: "correct" },
      }));
      passwordConfirmInput
        ? (passwordConfirmInput.style.borderBottomColor = "#1DC078")
        : "";
    } else {
      setInputCheck((prevState) => ({
        ...prevState,
        passwordConfirm: { ...prevState.passwordConfirm, status: "wrong" },
      }));
      passwordConfirmInput
        ? (passwordConfirmInput.style.borderBottomColor = "red")
        : "";
    }
  }, [inputCheck.password]);

  const checkName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCheck((prevState) => ({
      ...prevState,
      name: { ...prevState.name, value: e.target.value },
    }));
    if (e.target.value === "") {
      setInputCheck((prevState) => ({
        ...prevState,
        name: { ...prevState.name, status: "default" },
      }));
      nameInput ? (nameInput.style.borderBottomColor = "black") : "";
    } else {
      setInputCheck((prevState) => ({
        ...prevState,
        name: { ...prevState.name, status: "correct" },
      }));
      nameInput ? (nameInput.style.borderBottomColor = "#1DC078") : "";
    }
  };

  const checkEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    var emailPattern = /^\S+@\S+\.\S+$/;
    setInputCheck((prevState) => ({
      ...prevState,
      email: { ...prevState.email, value: e.target.value },
    }));

    if (e.target.value === "") {
      setInputCheck((prevState) => ({
        ...prevState,
        email: { ...prevState.email, status: "default" },
      }));
      emailInput ? (emailInput.style.borderBottomColor = "black") : "";
    } else if (emailPattern.test(e.target.value)) {
      setInputCheck((prevState) => ({
        ...prevState,
        email: { ...prevState.email, status: "correct" },
      }));
      emailInput ? (emailInput.style.borderBottomColor = "#1DC078") : "";
    } else {
      setInputCheck((prevState) => ({
        ...prevState,
        email: { ...prevState.email, status: "wrong" },
      }));
      emailInput ? (emailInput.style.borderBottomColor = "red") : "";
    }
  };

  const checkPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    var passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;
    setInputCheck((prevState) => ({
      ...prevState,
      password: { ...prevState.password, value: e.target.value },
    }));

    if (e.target.value === "") {
      setInputCheck((prevState) => ({
        ...prevState,
        password: { ...prevState.password, status: "default" },
      }));
      passwordInput ? (passwordInput.style.borderBottomColor = "black") : "";
    } else if (passwordPattern.test(e.target.value)) {
      setInputCheck((prevState) => ({
        ...prevState,
        password: { ...prevState.password, status: "correct" },
      }));
      passwordInput ? (passwordInput.style.borderBottomColor = "#1DC078") : "";
    } else {
      setInputCheck((prevState) => ({
        ...prevState,
        password: { ...prevState.password, status: "wrong" },
      }));
      passwordInput ? (passwordInput.style.borderBottomColor = "red") : "";
    }
  };

  const checkPasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCheck((prevState) => ({
      ...prevState,
      passwordConfirm: { ...prevState.passwordConfirm, value: e.target.value },
    }));
    if (e.target.value === "") {
      setInputCheck((prevState) => ({
        ...prevState,
        passwordConfirm: { ...prevState.passwordConfirm, status: "default" },
      }));
      passwordConfirmInput
        ? (passwordConfirmInput.style.borderBottomColor = "black")
        : "";
    } else if (passwordInput ? passwordInput.value === e.target.value : false) {
      setInputCheck((prevState) => ({
        ...prevState,
        passwordConfirm: { ...prevState.passwordConfirm, status: "correct" },
      }));
      passwordConfirmInput
        ? (passwordConfirmInput.style.borderBottomColor = "#1DC078")
        : "";
    } else {
      setInputCheck((prevState) => ({
        ...prevState,
        passwordConfirm: { ...prevState.passwordConfirm, status: "wrong" },
      }));
      passwordConfirmInput
        ? (passwordConfirmInput.style.borderBottomColor = "red")
        : "";
    }
  };

  const checkPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    phoneNumberInput!.value = autoHyphen(e.target.value);
    var phoneNumberPattern = /^\d{3}-\d{4}-\d{4}$/;
    setInputCheck((prevState) => ({
      ...prevState,
      phoneNumber: { ...prevState.phoneNumber, value: e.target.value },
    }));

    if (e.target.value === "") {
      setInputCheck((prevState) => ({
        ...prevState,
        phoneNumber: { ...prevState.phoneNumber, status: "default" },
      }));
      phoneNumberInput
        ? (phoneNumberInput.style.borderBottomColor = "black")
        : "";
    } else if (phoneNumberPattern.test(e.target.value)) {
      setInputCheck((prevState) => ({
        ...prevState,
        phoneNumber: { ...prevState.phoneNumber, status: "correct" },
      }));
      phoneNumberInput
        ? (phoneNumberInput.style.borderBottomColor = "#1DC078")
        : "";
    } else {
      setInputCheck((prevState) => ({
        ...prevState,
        phoneNumber: { ...prevState.phoneNumber, status: "wrong" },
      }));
      phoneNumberInput
        ? (phoneNumberInput.style.borderBottomColor = "red")
        : "";
    }
  };

  return (
    <div className="w-full h-[80vh] flex flex-col justify-start items-center">
      <div className="w-[80%] h-[80px] mt-10 font-black text-3xl text-dark_green flex flex-col justify-center items-end ">
        회원가입
      </div>
      <div className="w-[80%] h-[20px] mb-20 font-light text-2xl text-point flex flex-col justify-center items-end mt-5">
        리프레쉬북과 함께 일상을 Refresh하세요!
      </div>
      <form className="w-full flex flex-col justify-start items-center m-10">
        <div className="w-[60%] h-[70px] flex flex-row justify-around items-start mx-10 my-2">
          {inputCheck.name.status === "correct" ? (
            <label className="w-[25%] h-[30px] flex flex-row justify-start items-center text-point font-bold text-xl">
              이름 <CheckIcon color="#1DC078" width="20px" />
            </label>
          ) : (
            <label className="w-[25%] h-[30px] flex flex-row justify-start items-center font-semibold text-xl">
              이름
            </label>
          )}

          <div className="w-[65%] flex flex-col justify-start">
            <input
              className="w-full h-[30px] border-b border-black text-xl outline-none"
              id="name-input"
              onChange={(e) => checkName(e)}
            />
          </div>
        </div>
        <div className="w-[60%] h-[70px] flex flex-row justify-around items-start mx-10 my-2">
          {inputCheck.email.status === "correct" ? (
            <label className="w-[25%] h-[30px] flex flex-row justify-start items-center text-point font-bold text-xl">
              이메일 <CheckIcon color="#1DC078" width="20px" />
            </label>
          ) : (
            <label className="w-[25%] h-[30px] flex flex-row justify-start items-center font-semibold text-xl">
              이메일
            </label>
          )}

          <div className="w-[65%] flex flex-col justify-start">
            <input
              id="email-input"
              className={`w-full h-[30px] border-b border-black text-xl outline-none`}
              onChange={(e) => checkEmail(e)}
            />
            <div className="text-xs text-red">
              {inputCheck.email.status === "wrong"
                ? "올바른 이메일을 입력해주세요."
                : inputCheck.email.status === "exist"
                ? "이미 존재하는 이메일입니다."
                : ""}
            </div>
          </div>
        </div>
        <div className="w-[60%] h-[70px] flex flex-row justify-around items-start mx-10 my-2">
          {inputCheck.password.status === "correct" ? (
            <label className="w-[25%] h-[30px] flex flex-row justify-start items-center text-point font-bold text-xl">
              비밀번호 <CheckIcon color="#1DC078" width="20px" />
            </label>
          ) : (
            <label className="w-[25%] h-[30px] flex flex-row justify-start items-center font-semibold text-xl">
              비밀번호
            </label>
          )}

          <div className="w-[65%] flex flex-col justify-start">
            <input
              type="password"
              id="password-input"
              className={`w-full h-[30px] border-b border-black text-xl outline-none`}
              onChange={(e) => checkPassword(e)}
            />
            <div className="text-xs text-red">
              {inputCheck.password.status === "wrong"
                ? "비밀번호는 8~20자의 영문자와 숫자를 포함한 조합으로 만들어주세요."
                : ""}
            </div>
          </div>
        </div>
        <div className="w-[60%] h-[70px] flex flex-row justify-around items-start mx-10 my-2">
          {inputCheck.passwordConfirm.status === "correct" ? (
            <label className="w-[25%] h-[30px] flex flex-row justify-start items-center text-point font-bold text-xl">
              비밀번호 확인 <CheckIcon color="#1DC078" width="20px" />
            </label>
          ) : (
            <label className="w-[25%] h-[30px] flex flex-row justify-start items-center font-semibold text-xl">
              비밀번호 확인
            </label>
          )}

          <div className="w-[65%] flex flex-col justify-start">
            <input
              type="password"
              id="password-confirm-input"
              className={`w-full h-[30px] border-b border-black text-xl outline-none`}
              onChange={(e) => checkPasswordConfirm(e)}
            />
            <div className="text-xs text-red">
              {inputCheck.passwordConfirm.status === "wrong"
                ? "비밀번호가 일치하지 않습니다."
                : ""}
            </div>
          </div>
        </div>
        <div className="w-[60%] h-[70px] flex flex-row justify-around items-start mx-10 my-2">
          {inputCheck.phoneNumber.status === "correct" ? (
            <label className="w-[25%] h-[30px] flex flex-row justify-start items-center text-point font-bold text-xl">
              휴대폰 번호 <CheckIcon color="#1DC078" width="20px" />
            </label>
          ) : (
            <label className="w-[25%] h-[30px] flex flex-row justify-start items-center font-semibold text-xl">
              휴대폰 번호
            </label>
          )}

          <div className="w-[65%] flex flex-col justify-start">
            <input
              id="phone-number-input"
              className={`w-full h-[30px] border-b border-black text-xl outline-none`}
              onChange={(e) => checkPhoneNumber(e)}
            />
            <div className="text-xs text-red">
              {inputCheck.phoneNumber.status === "wrong"
                ? "올바른 번호를 입력해주세요."
                : ""}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
