const userid = document.querySelector('#userid')
const pwd1 = document.querySelector('#pwd1')
const pwd2 = document.querySelector('#pwd2')
const level = document.querySelector('#level')
const fullname = document.querySelector('#fullname')
const email = document.querySelector('#email')
const tel = document.querySelector('#tel')
const submitButton = document.querySelector('#submit_button')

//전송 버튼 클릭시
submitButton.addEventListener('click', () => {
   const idConf = idConfirm()
   const pwd1Conf = pwd1Confirm()
   const pwd2Conf = pwd2Confirm()
   const fullnameConf = fullnameConfirm()
   const emailConf = emailConfirm()
   const telConf = telConfirm()

   if (idConf && pwd1Conf && pwd2Conf && fullnameConf && emailConf && telConf) {
      document.signup.submit()
   }
})

// let chkArray = [
//    idConfirm(),
//    pwd1Confirm(),
//    pwd2Confirm(),
//    fullnameConfirm(),
//    emailConfirm(),
//    telConfirm(),
// ]
// let chkFlag = true
// for (const chk of chkArray) {
//    if (!chk) {
//       chkflag = false //함수에서 하나롣 false를 리턴하면
//    }
//    //체크를 전부 통과하면 데이터 서버로 전송
//    if (chkFlag) {
//       document.signup.submit()
//    }
// }
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
function pwd2Confirm() {
   const mustPwd2 = document.querySelector('.must_pwd2')
   const same = document.querySelector('.same')

   mustPwd2.style.display = 'none'
   same.style.display = 'none'

   if (!pwd2.value) {
      mustPwd2.style.display = 'block'
      return false
   } else {
      //공백을 입력하지 않았을때

      //두개의 패스워드에 값이 있는지 확인
      if (pwd1.value && pwd2.value) {
         //두개의 패스워드 값이 같은지 확인
         if (pwd1.value !== pwd2.value) {
            same.style.display = 'block'
            return false
         }
      }
   }
   return true
}
function fullnameConfirm() {
   const mustFullname = document.querySelector('.must_fullname')

   mustFullname.style.display = 'none'

   if (!fullname.value) {
      mustFullname.style.display = 'block'
      return false
   }

   return true
}
function emailConfirm() {
   const mustEmail = document.querySelector('.must_email')
   const regEmail = document.querySelector('.reg_email')

   mustEmail.style.display = 'none'
   regEmail.style.display = 'none'

   if (!email.value) {
      mustEmail.style.display = 'block'
      return false
   } else {
      if (!emailCheck(email.value)) {
         regEmail.style.display = 'block'
         return false
      }
   }
   return true
}

function telConfirm() {
   const regTel = document.querySelector(`.reg_tel`)
   regTel.style.display = 'none'
   if (!telCheck(tel.value) && tel.value) {
      regTel.style.display = 'block'
      return false
   }
   return true
}

//중복된 아이디 체크
function idCheck(id) {
   return true //true: 아이디 중복 되지 않음
}

//정규식
function pwdCheck(pwd) {
   //특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식 ( 3 가지 조합)
   const reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/
   return reg.test(pwd) //맞으면 true, 틀리면 false를 리턴
}
function telCheck(tel) {
   const reg = /^\d{2,3}-\d{3,4}-\d{4}$/
   return reg.test(tel)
}
function emailCheck(email) {
   const reg =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
   return reg.test(email)
}
