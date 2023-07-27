"use client";
import CheckIcon from "@/components/Common/Icons/CheckIcon";
import React, { useEffect, useState } from "react";

const RegisterPage = () => {
  const [nameCheckStatus, setNameCheckStatus] = useState("default");
  const [emailCheckStatus, setEmailCheckStatus] = useState("default");
  const [passwordCheckStatus, setPasswordCheckStatus] = useState("default");
  const [password, setPassword] = useState("");
  const [passwordConfirmCheckStatus, setPasswordConfirmCheckStatus] =
    useState("default");
  const emailInput = document.getElementById("email-input");
  const nameInput = document.getElementById("name-input");
  const passwordInput = document.getElementById("password-input");
  const passwordConfirmInput = document.getElementById(
    "password-confirm-input"
  );

  useEffect(() => {
    if (passwordConfirmInput!.value === "") {
      setPasswordConfirmCheckStatus("default");
    } else if (passwordInput!.value === "") {
      setPasswordConfirmCheckStatus("default");
    } else if (
      passwordInput
        ? passwordInput.value === passwordConfirmInput!.value
        : false
    ) {
      setPasswordConfirmCheckStatus("correct");
      passwordConfirmInput
        ? (passwordConfirmInput.style.borderBottomColor = "#1DC078")
        : "";
    } else {
      setPasswordConfirmCheckStatus("wrong");
      passwordConfirmInput
        ? (passwordConfirmInput.style.borderBottomColor = "red")
        : "";
    }
  }, [password]);

  const checkName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setNameCheckStatus("default");
      nameInput ? (nameInput.style.borderBottomColor = "black") : "";
    } else {
      setNameCheckStatus("correct");
      nameInput ? (nameInput.style.borderBottomColor = "#1DC078") : "";
    }
  };

  const checkEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    var emailPattern = /^\S+@\S+\.\S+$/;

    if (e.target.value === "") {
      setEmailCheckStatus("default");
      emailInput ? (emailInput.style.borderBottomColor = "black") : "";
    } else if (emailPattern.test(e.target.value)) {
      setEmailCheckStatus("correct");
      emailInput ? (emailInput.style.borderBottomColor = "#1DC078") : "";
    } else {
      setEmailCheckStatus("wrong");
      emailInput ? (emailInput.style.borderBottomColor = "red") : "";
    }
  };

  const checkPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    var passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;
    setPassword(e.target.value);

    if (e.target.value === "") {
      setPasswordCheckStatus("default");
      passwordInput ? (passwordInput.style.borderBottomColor = "black") : "";
    } else if (passwordPattern.test(e.target.value)) {
      setPasswordCheckStatus("correct");
      passwordInput ? (passwordInput.style.borderBottomColor = "#1DC078") : "";
    } else {
      setPasswordCheckStatus("wrong");
      passwordInput ? (passwordInput.style.borderBottomColor = "red") : "";
    }
  };

  const checkPasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setPasswordConfirmCheckStatus("default");
      passwordConfirmInput
        ? (passwordConfirmInput.style.borderBottomColor = "black")
        : "";
    } else if (passwordInput ? passwordInput.value === e.target.value : false) {
      setPasswordConfirmCheckStatus("correct");
      passwordConfirmInput
        ? (passwordConfirmInput.style.borderBottomColor = "#1DC078")
        : "";
    } else {
      setPasswordConfirmCheckStatus("wrong");
      passwordConfirmInput
        ? (passwordConfirmInput.style.borderBottomColor = "red")
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
          {nameCheckStatus === "correct" ? (
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
          {emailCheckStatus === "correct" ? (
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
              {emailCheckStatus === "wrong"
                ? "올바른 이메일을 입력해주세요."
                : emailCheckStatus === "exist"
                ? "이미 존재하는 이메일입니다."
                : ""}
            </div>
          </div>
        </div>
        <div className="w-[60%] h-[70px] flex flex-row justify-around items-start mx-10 my-2">
          {passwordCheckStatus === "correct" ? (
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
              {passwordCheckStatus === "wrong"
                ? "비밀번호는 8~20자의 영문자와 숫자를 포함한 조합으로 만들어주세요."
                : ""}
            </div>
          </div>
        </div>
        <div className="w-[60%] h-[70px] flex flex-row justify-around items-start mx-10 my-2">
          {passwordConfirmCheckStatus === "correct" ? (
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
              {passwordConfirmCheckStatus === "wrong"
                ? "비밀번호가 일치하지 않습니다."
                : ""}
            </div>
          </div>
        </div>
        <div className="w-[60%] h-[70px] flex flex-row justify-around items-start mx-10 my-2">
          <label className="w-[2%] h-full flex flex-row justify-start items-start font-semibold text-xl">
            비밀번호
          </label>
          <div className="w-[65%] flex flex-col justify-start">
            <input className="w-full h-[30px] border-b border-point  outline-none px-1" />
            <div>안됩니다</div>
          </div>
        </div>
        <div className="w-[60%] h-[70px] flex flex-row justify-around items-start mx-10 my-2">
          <label className="w-[20%] h-full flex flex-row justify-start items-start font-semibold text-xl">
            비밀번호 확인
          </label>
          <div className="w-[65%] flex flex-col justify-start">
            <input className="w-full h-[30px] border-b border-point  outline-none" />
            <div>안됩니다</div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
