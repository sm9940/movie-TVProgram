const userid = document.querySelector('#userid')
const pwd1 = document.querySelector('#pwd1')
const submitButton = document.querySelector('#submit_button')

submitButton.addEventListener('click',()=>{
    const idConf = idConfirm()
    const pwd1Conf = pwd1Confirm()
})
function idConfirm() {
    const mustId = document.querySelector('.must_id')
    const overlap = document.querySelector('.overlap')
 
    //텍스트가 남아있는 걸 방지하기 위한 초기화
    mustId.style.display = 'none'
    overlap.style.display = 'none'
 
    //공백입력 여부
    if (!userid.value) {
       //공백일때
       mustId.style.display = 'block'
       return false
    } else {
       //공백이 아닐때
       //아이디 중복여부 체크 -> 서버 프로그래밍 구현 필요
       if (!idCheck(userid.value)) {
          //아이디가 중복이면
          overlap.style.display = 'block'
          return false
       }
    }
 
    return true
 }
 
 function pwd1Confirm() {
    const mustPwd1 = document.querySelector('.must_pwd1')
    const regPwd = document.querySelector('.reg_pwd')
 
    mustPwd1.style.display = 'none'
    regPwd.style.display = 'none'
 
    if (!pwd1.value) {
       mustPwd1.style.display = 'block'
       return false
    } else {
       //공백이 아닐때
       if (!pwdCheck(pwd1.value)) {
          //유효성 검사를 통과하지 못했을때 실행
          regPwd.style.display = 'block'
          return false
       }
       //유효성 검사 (특수문자, 문자, 숫자 포함 형태의 8~15 자리의 문구인지)
    }
 
    return true
 }
 function idCheck(id) {
    return true //true: 아이디 중복 되지 않음
 }
 function pwdCheck(pwd) {
    //특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식 ( 3 가지 조합)
    const reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/
    return reg.test(pwd) //맞으면 true, 틀리면 false를 리턴
 }