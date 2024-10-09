<img width="4760" alt="Group 1194" src="https://github.com/user-attachments/assets/7c827701-6000-4241-8a97-a08606f6ecfa">

# 타임세이버 (TimeSaver)
“시간을 보다 효율적으로” <br />
“모임 멤버와 함께 일정을 결정하고 싶은데…” <br />
“나의 일정을 팀원과 공유하고 싶어”

혼자일 때도, 함께일 때도 시간을 효율적으로 쓰고 싶은 당신 ! 당신의 시간을 지켜드립니다. <br />
**타임세이버**에서 일정을 관리해보세요 !

- 개발 기간 : 2024.07 ~ 2024.08
- 프로젝트 배포 주소 : <a href="https://keep-your-time-saver.netlify.app/" target="_blank"> https://keep-your-time-saver.netlify.app/ </a>

<br />
<br />

## Teams
| <img src="https://avatars.githubusercontent.com/u/153581513?v=4" title="김유경"> | <img src="https://avatars.githubusercontent.com/u/90249043?v=4" title="한태욱"> | <img src="https://avatars.githubusercontent.com/u/105029085?v=4" title="김규헌"> | 
| :--------: | :-------: | :--------: | 
|[FE 김유경](https://github.com/codingaring)|[FE 한태욱](https://github.com/TaeUk471)|[FE 김규헌](https://github.com/kkh000)|

<br />
<br />

## Stacks
#### ◻ Development
  <span><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"></span>
  <span><img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"></span>
  <span><img src="https://img.shields.io/badge/react--query-FF4154?style=for-the-badge&logo=reactQuery&logoColor=white"></span>
  <span><img src="https://img.shields.io/badge/react--query-FF4154?style=for-the-badge&logo=axios&logoColor=white"></span>

#### ◻ Enviroment
  <span><img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"></span>
  <span><img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"></span>
  <span><img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"></span>
  <br />

#### ◻ Communication
<span><img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"></span>
<span><img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white"></span>

<br />
<br />

## R&R
**김유경** <br />
- 페이지 : 대시보드, 컬럼, 카드 조회, 계정 관리, 카드 수정
- 공통 컴포넌트 : 사이드 바

**한태욱** <br />
- 페이지 : 로그인&회원가입 페이지, 랜딩, 나의 대시보드
- 공통 컴포넌트 : 회원 아이디, 비밀번호 input, Button, 헤더

**김규헌** <br />
- 공통 컴포넌트 : 사이드 바

<br />
<br />

## 기능 시현
### 랜딩 페이지
서비스에 대한 간단한 소개와 사용 예시 등을 안내하고 있습니다. 헤더를 통해 로그인할 수 있고, 메인의 시작하기 버튼을 통해서도 로그인 페이지로 이동할 수 있습니다.
이미 로그인한 사용자의 경우 `/my-dashboard` 페이지로 이동합니다.
![랜딩 페이지](https://github.com/user-attachments/assets/f5ce71f6-91f4-4950-b607-226f6bf40e85)

<br />

### 로그인 & 회원가입
사용자가 유효한 이메일 형식을 입력했는지, 비밀번호는 8자리 이상 입력했는지 등을 유효성 검사를 통해 확인합니다.
이때 react-hook-form을 활용하여 에러 메시지를 띄울 수 있도록 했습니다.
| 로그인 | 회원가입 |
| ----- | --------- |
| ![로그인](https://github.com/user-attachments/assets/0955a513-3aa2-4bff-802f-5f5948534b9f) | ![회원가입](https://github.com/user-attachments/assets/596ca7c1-5da2-45d6-ae22-61d69a260541) |

### 대시보드 관련 기능
대시보드를 생성하고, 일정을 공유할 멤버를 초대할 수 있습니다. 공유 받은 멤버는 대시보드에 생성된 컬럼, 카드 등에 자유롭게 접근하고 수정할 수 있는 권한이 주어집니다. <br />
대시보드의 생성자는 대시보드의 설정을 조회 및 수정할 수 있습니다. <br />
- 수정할 수 있는 대시보드의 설정 **대시보드 명**, **대시보드 색상**, **대시보드 멤버**, **초대 내역**) <br />
<br />

#### 대시보드 생성
![대시보드 생성](https://github.com/user-attachments/assets/45488ab0-37ac-40fd-af68-74fb5161647c) 

<br />

#### 대시보드 수정
![대시보드 수정](https://github.com/user-attachments/assets/5895e922-36b1-4f70-992a-28f0e34a5dd6)

<br />

#### 대시보드 삭제
![대시보드 삭제](https://github.com/user-attachments/assets/5c472d09-9a73-4697-9634-34b9f0e281a6)

<br />

#### 대시보드 초대 조회 및 삭제
![대시보드 초대, 삭제](https://github.com/user-attachments/assets/4ce1e461-c626-4850-8753-ecec7620e67b)

<br />
<br />

### 컬럼 관련 기능
대시보드 안에서 본인의 관심사에 맞게 컬럼을 생성하고, 그 안에 카드를 생성할 수 있습니다.

<br />

#### 컬럼 생성, 수정, 삭제
![컬럼 생성, 수정, 삭제](https://github.com/user-attachments/assets/225720d0-06ae-446b-8274-60338d03ab66)

### 카드 관련 기능
컬럼 안에서 카드를 생성해서 구성원들과 일정에 대한 이야기를 나눌 수 있습니다.
프로젝트 마감일, 여행 일정 공유, 목표 달성 여부 등을 댓글을 통해 자유롭게 나눌 수 있습니다.

<br />

#### 카드 생성
![카드 생성](https://github.com/user-attachments/assets/9845291c-4329-414e-bb61-a9bba30f2429)

<br />

#### 카드 수정
![카드 수정](https://github.com/user-attachments/assets/f3c52b52-5c57-4281-a06a-2b03573112e4)

<br />

#### 카드 삭제
![카드 삭제](https://github.com/user-attachments/assets/944d2b2d-2d78-4f92-b2b1-f2cff4f6df4d)

<br />
<br />

### 유저 정보 관련 기능
`/my-dashboard` 페이지를 통해 현재 나의 대시보드 목록을 조회하고, 내가 받은 초대 목록을 조회/수락/거절 할 수 있습니다. <br />
`/editAccount` 페이지를 통해 닉네임과 비밀번호를 변경할 수 있습니다.


![계정 정보 변경](https://github.com/user-attachments/assets/061ba319-7af2-4b67-b894-9d5a7c5f48c0)
