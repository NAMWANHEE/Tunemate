# TuneMate

> 🎵음악 취향 기반 친구 추천 뮤직플레이어🎵

새로운 친구를 사귀는데에 어려움이 있으셨나요??

음악 듣는 것을 좋아하시나요??

**TuneMate**는 **스트리밍** 기능을 제공하고 **음악 취향 기반**으로 친구를 추천해줍니다.

친구를 사귀고 함께 플레이리스트를 만들어 나가 보세요

![image](https://github.com/NAMWANHEE/Tunemate/assets/76835981/cb4dab2a-1faa-4adc-8154-f4879228b4be)

## 📅 프로젝트 진행 기간

2023.10.10(화) ~ 2023.11.17(금) (6주간 진행)


## 💡 주요기능

| 구분 | 기능                          | 설명                                                                                                    |
| ---- | ----------------------------- | ------------------------------------------------------------------------------------------------------- |
| 1    | 음악 스트리밍                 | Spotify API를 활용한 음악 스트리밍 서비스                                                               |
| 2    | 음악 취향 기반 친구 추천      | 코사인 유사도를 이용하여 대표 플레이리스트 기반 유사한 사용자 추천                                      |
| 3    | 음악 취향 기반 곡 추천        | 콘텐츠 기반 필터링을 이용하여 가수 이름, 템포, 에너지 등 곡의 특징을 벡터화하여 유사도 측정 후 곡 추천  |
| 4    | 플레이리스트 실시간 공동 편집 | SSE(Server-Sent-Event)를 활용하여 플레이리스트 변경 이벤트 발생 시 연결 된 사람에게 변경 된 데이터 전송 |

## 💡 부가기능

| 구분 | 기능           | 설명                                                     |
| ---- | -------------- | -------------------------------------------------------- |
| 1    | 친구와의 채팅  | WebSocket, RabbitMQ 활용하여 구현                        |
| 2    | 공연 정보 제공 | 스케줄러 활용, 인터파크 티켓 사이트 크롤링하여 정보 제공 |
| 3    | 만남 일정 관리 | 공연 정보를 토대로 만남 일정 관리                        |

## 🖥️ 서비스 화면

- 로그인 화면
- 메인화면
- 내 프로필

<p align="center">  
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/454c02c4-e542-4e18-80d3-34961468c83a"  width="200" height="400"/>
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/2520217e-181d-4dde-975d-3a2b07f32ccb"  width="200" height="400"/>
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/9ad522d4-7e47-469e-8b65-c65737d05c2f"  width="200" height="400"/>
</p>

---
<br>

- 플레이리스트 설정
- 곡 추가
- 플레이리스트 순서 변경
<p align="center">  
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/d0367c80-3dd8-47b9-8383-ae1c33b125a1"  width="200" height="400"/>
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/2f3784d4-b132-4f18-9f2e-fe9c2829220b"  width="200" height="400"/>
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/03425b4a-78ca-4d36-ae79-5074d87e6fbc"  width="200" height="400"/>

</p>

---
<br>

- 친구목록 화면
- 친구 추천 화면
- 공고 모집 목록
<p align="center">
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/51ebf6bf-bd38-438a-836a-bf758afcd883"  width="200" height="400"/>
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/4d8ce42a-9e35-45f4-8e65-c6c1e4104ba1"  width="200" height="400"/>
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/04c5bea8-dd2f-4a73-ad9d-cb67e7cd1384"  width="200" height="400"/>
</p>

---
<br>

- 공고 상세 화면
- 공고 요청 화면
- 플레이리스트 화면
- 플레이리스트 화면 2
<p align="center">
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/0f4c22d4-81bd-441c-ad51-33fe8c12d885"  width="200" height="400"/>
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/accf1460-f90f-46de-b2bc-a33f6e84ba66"  width="200" height="400"/>
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/4a0cf906-3d6d-4402-a173-71705604cf9e"  width="200" height="400"/>
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/012718dc-770d-4a50-b93d-4b4558c38da7"  width="200" height="400"/>
</p>

---
<br>

- 채팅 화면
- 공동 플레이리스트 곡 추가(유저 1)
- 공동 플레이리스트 곡 추가(유저 2)

<p align="center">
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/2b41f0fa-6ca7-41a6-b793-5f6cf6a43042"  width="200" height="400"/>
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/b480d3e7-0da3-4306-8a52-387f381568fb"  width="200" height="400"/>
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/26f763fa-0bd3-4c6d-b6f5-dd1e8e07df79"  width="200" height="400"/>

</p>

---
<br>

- 공동 플레이리스트 곡 위치 변경(유저 1)
- 공동 플레이리스트 곡 위치 변경(유저 2)

<p align="center">
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/cc47411d-2904-4241-b1e8-fec12fc94d57"  width="200" height="400"/>
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/5e9121cb-9826-43ea-b154-e834499c1636"  width="200" height="400"/>

</p>

---
<br>

- 공동 플레이리스트 곡 삭제(유저 1)
- 공동 플레이리스트 곡 삭제(유저 2)

<p align="center">
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/94b9c7f8-4f9f-4970-a00a-5bdd2a930558"  width="200" height="400"/>
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/4a82b222-2b2b-4e6c-aea0-ac94d08d5559"  width="200" height="400"/>

</p>


## 🐳 아키텍처

![image](https://github.com/NAMWANHEE/Tunemate/assets/76835981/14ff9e34-afd2-4750-95b6-2dfdb986a94a)


## 🛠️ 기술스택

`Backend`

- IntelliJ IDE
- Springboot 3.1.5
- Spring cloud netflix eureka
- Spring cloud gateway
- Spring cloud openfeign
- Spring security
- Spring Data JPA
- QueryDSL
- Java 17
- WebSocket
- RabbitMQ
- SSE
- JWT
- Gradle
- Swagger
- FastAPI
- Pandas

`Data`

- mySQL
- Redis
- MongoDB

`Frontend`

- visual Studio Code IDE
- Next.js
- React
- Bootstrap
- Spotify API

`Infra`

- Mobaxterm
- AWS EC2
- Nginx
- Jenkins
- Docker
- Docker-compose

`etc`

- Gitlab
- Notion
- Jira
- Mattermost


## 👨‍💻 팀원 소개

![image](https://github.com/NAMWANHEE/Tunemate/assets/76835981/7708bc60-d9a9-43ac-8264-5f0f80bc054e)

![image](https://github.com/NAMWANHEE/Tunemate/assets/76835981/1eeddf03-f4f7-4998-a331-3d3aac367f38)

