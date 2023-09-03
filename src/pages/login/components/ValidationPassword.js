// password validation check 
function ValidatePassword(password) {
    // 비밀번호 길이가 8자리 이상, 16자리 이하인지 확인
    if (password.length < 8 || password.length > 16) {
        return false;
    }

    // 영문 대소문자, 숫자, 특수 문자 중 하나 이상을 포함하는지 확인
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-=]/.test(password);

    // 모든 조건을 만족하는지 확인
    return hasLetter && hasNumber && hasSpecialChar; // true or false 
}

export default ValidatePassword;