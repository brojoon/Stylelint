function isPassword(asValue: string) {
  let regExp =
    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;

  return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}

export default isPassword;
