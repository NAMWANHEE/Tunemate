# TuneMate

> 🎵음악 취향 기반 친구 추천 뮤직플레이어🎵

새로운 친구를 사귀는데에 어려움이 있으셨나요??

음악 듣는 것을 좋아하시나요??

**TuneMate**는 **스트리밍** 기능을 제공하고 **음악 취향 기반**으로 친구를 추천해줍니다.

친구를 사귀고 함께 플레이리스트를 만들어 나가 보세요

![image](https://github.com/NAMWANHEE/Tunemate/assets/76835981/b894bb90-ab53-4b16-9496-95fa0141a56d)

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
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/1d47e9fb-5a68-45a0-a583-69e307f060ec"  width="200" height="400"/>
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/cad7a585-a19a-40e6-ae15-1a59d84e750c"  width="200" height="400"/>
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/00b02153-1723-4732-a1dd-bbd77ddde3b2"  width="200" height="400"/>
</p>

---
<br>

- 플레이리스트 설정
- 곡 추가
- 플레이리스트 순서 변경
<p align="center">  
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/4da54598-25f4-47fa-a9b6-0f00e951d414"  width="200" height="400"/>
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/7cb81b56-02ad-447c-b84e-aa025484f96e"  width="200" height="400"/>
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/299ef3ad-3ebe-4207-8fb0-6ca60846cc18"  width="200" height="400"/>

</p>

---
<br>

- 친구목록 화면
- 친구 추천 화면
- 공고 모집 목록
<p align="center">
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/f8dedd96-f0a7-4864-a143-63ec470477e9"  width="200" height="400"/>
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/0fee6edc-51db-4df7-b6b3-93d4681e709d"  width="200" height="400"/>
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/9751e9bb-8da2-4b7c-8af9-bffe0b6ba06d"  width="200" height="400"/>
</p>

---
<br>

- 공고 상세 화면
- 공고 요청 화면
- 플레이리스트 화면
- 플레이리스트 화면 2
<p align="center">
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/a0cd64b3-2c9b-4916-bac2-7e4da9b298e2"  width="200" height="400"/>
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/4a200e93-be90-47a6-b1f9-2c2d61816109"  width="200" height="400"/>
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/f698f68c-7ff7-49bb-a68d-4a92f5213a0b"  width="200" height="400"/>
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/95929fc3-770a-4238-b546-3172b531e292"  width="200" height="400"/>
</p>

---
<br>

- 채팅 화면
- 공동 플레이리스트 곡 추가(유저 1)
- 공동 플레이리스트 곡 추가(유저 2)

<p align="center">
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/7f92ce9b-005a-4702-8bee-14c37353764f"  width="200" height="400"/>
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/a4bfbd8a-ea21-4e30-b5d6-42cf3d326a56"  width="200" height="400"/>
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/b1461882-a4f5-4434-af0f-9c290cbb085e"  width="200" height="400"/>

</p>

---
<br>

- 공동 플레이리스트 곡 위치 변경(유저 1)
- 공동 플레이리스트 곡 위치 변경(유저 2)

<p align="center">
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/cf94796e-9735-4d0b-ad81-258fc1c2385f"  width="200" height="400"/>
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/38b88bc1-f60e-4c69-b9e7-bf4d688bb661"  width="200" height="400"/>

</p>

---
<br>

- 공동 플레이리스트 곡 삭제(유저 1)
- 공동 플레이리스트 곡 삭제(유저 2)

<p align="center">
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/3fdd3b17-623a-4ee3-bbcb-5ae09549823a"  width="200" height="400"/>
<img src="https://github.com/NAMWANHEE/Tunemate/assets/76835981/00259f8e-b774-4da2-8592-586a34bcad1c"  width="200" height="400"/>

</p>


## 🐳 아키텍처

![image](https://github.com/NAMWANHEE/Tunemate/assets/76835981/35ca50b1-20c1-4fe6-acb1-30d8be224785)


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

![image](https://github.com/NAMWANHEE/Tunemate/assets/76835981/40483d5f-5b17-4bc9-a2f4-1e80f2ea9b42)

![image](https://github.com/NAMWANHEE/Tunemate/assets/76835981/f7490529-aaaf-4395-8865-be70a7a79086)

