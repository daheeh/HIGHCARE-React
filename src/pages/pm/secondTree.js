import React from "react";
import OrganizationChart from "@dabeng/react-orgchart";

const SecondTree = () => {
  const ds =     {"id": 0,
  "name": "하이케어",
  "title": null,
  "phone": null,
  "email": null,
  "children": [
    {
      "id": 1,
      "name": "경영 지원 본부",
      "title": "하이케어",
      "phone": null,
      "email": null,
      "children": [
        {
          "id": 5,
          "name": "기획팀",
          "title": "경영 지원 본부",
          "phone": null,
          "email": null,
          "children": [
            {
              "id": 1,
              "name": "팀장",
              "title": "봄",
              "phone": "010-1234-5678",
              "email": "spring0820@gmail.com",
              "children": null
            },
            {
              "id": 8,
              "name": "대리",
              "title": "홍다희",
              "phone": "010-1452-4578",
              "email": "summer0821@gmail.com",
              "children": null
            }
          ]
        },
        {
          "id": 6,
          "name": "인사총무팀",
          "title": "경영 지원 본부",
          "phone": null,
          "email": null,
          "children": [
            {
              "id": 9,
              "name": "사원",
              "title": "허유일",
              "phone": "010-1234-5678",
              "email": "spring0820@gmail.com",
              "children": null
            },
            {
              "id": 2,
              "name": "대리",
              "title": "여름",
              "phone": "010-1452-4578",
              "email": "summer0821@gmail.com",
              "children": null
            }
          ]
        }
      ]
    },
    {
      "id": 2,
      "name": "재경 본부",
      "title": "하이케어",
      "phone": null,
      "email": null,
      "children": [
        {
          "id": 10,
          "name": "재무 회계팀",
          "title": "재경 본부",
          "phone": null,
          "email": null,
          "children": [
            {
              "id": 13,
              "name": "사원",
              "title": "테스트",
              "phone": "010-1234-4657",
              "email": "test@gmail.com",
              "children": null
            },
            {
              "id": 6,
              "name": "차장",
              "title": "황다혜",
              "phone": "010-1452-4578",
              "email": "summer0821@gmail.com",
              "children": null
            }
          ]
        }
      ]
    },
    {
      "id": 3,
      "name": "보험 본부",
      "title": "하이케어",
      "phone": null,
      "email": null,
      "children": [
        {
          "id": 7,
          "name": "보험 1팀",
          "title": "보험 본부",
          "phone": null,
          "email": null,
          "children": [
            {
              "id": 3,
              "name": "부장",
              "title": "가을",
              "phone": "010-1234-5678",
              "email": "spring0820@gmail.com",
              "children": null
            },
            {
              "id": 10,
              "name": "사장",
              "title": "유승제",
              "phone": "010-1452-4578",
              "email": "summer0821@gmail.com",
              "children": null
            }
          ]
        },
        {
          "id": 8,
          "name": "보험 2팀",
          "title": "보험 본부",
          "phone": null,
          "email": null,
          "children": [
            {
              "id": 11,
              "name": "사원",
              "title": "사계절",
              "phone": "010-1234-5678",
              "email": "spring0820@gmail.com",
              "children": null
            },
            {
              "id": 4,
              "name": "대리",
              "title": "겨울",
              "phone": "010-1452-4578",
              "email": "summer0821@gmail.com",
              "children": null
            }
          ]
        },
        {
          "id": 9,
          "name": "보험 영업팀",
          "title": "보험 본부",
          "phone": null,
          "email": null,
          "children": [
            {
              "id": 12,
              "name": "대리",
              "title": "하이미",
              "phone": "010-1452-4578",
              "email": "summer0821@gmail.com",
              "children": null
            },
            {
              "id": 5,
              "name": "사원",
              "title": "전아림",
              "phone": "010-1234-5678",
              "email": "spring0820@gmail.com",
              "children": null
            }
          ]
        }
      ]
    },
    {
      "id": 4,
      "name": "정보 시스템 본부",
      "title": "하이케어",
      "phone": null,
      "email": null,
      "children": [
        {
          "id": 11,
          "name": "시스템 운영팀",
          "title": "정보 시스템 본부",
          "phone": null,
          "email": null,
          "children": [
            {
              "id": 7,
              "name": "사원",
              "title": "김나경",
              "phone": "010-1234-5678",
              "email": "spring0820@gmail.com",
              "children": null
            }
          ]
        }
      ]
    }
  ]
}

  return <OrganizationChart datasource={ds} />;
};

export default SecondTree;
