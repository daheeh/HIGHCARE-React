import React from "react";
import OrganizationChart from "@dabeng/react-orgchart";

const SecondTree = () => {
  const ds = {
    id: "1",
    name: "경영 기획 본부",
    title: "general manager",
    children: [
      {
        id: "3",
        name: "황다혜 부장님",
        title: "department manager",
        children: [
          {
            id: "4",
            name: "멤버1",
            title: "senior engineer",
            children: [
              { id: "6", name: "하위 멤버 1", title: "engineer" },
              { id: "7", name: "하위 멤버 2", title: "engineer" },
            ],
          },
          {
            id: "5",
            name: "멤버2",
            title: "senior engineer",
            children: [
              {
                id: "6",
                name: "하위 멤버 1",
                title: "engineer",
                children: [
                  {
                    id: "30",
                    name: "하위 멤버 1",
                    title: "engineer",
                  },
                ],
              },
            ],
          },
          { id: "8", name: "멤버3", title: "senior engineer" },
        ],
      },
      {
        id: "3",
        name: "조혜란 팀장님",
        title: "department manager",
        children: [
          { id: "4", name: "멤버1", title: "senior engineer" },
          {
            id: "5",
            name: "멤버2",
            title: "senior engineer",
            children: [
              { id: "6", name: "하위 멤버 1", title: "engineer" },
              { id: "7", name: "하위 멤버 2", title: "engineer" },
            ],
          },
          { id: "8", name: "멤버3", title: "senior engineer" },
        ],
      },
      { id: "9", name: "멤버", title: "department manager" },
      {
        id: "10",
        name: "홍다희 팀장님",
        title: "department manager",
        children: [{ id: "11", name: "하위멤버", title: "senior engineer" }],
      },
    ],
  };

  return <OrganizationChart datasource={ds} />;
};

export default SecondTree;
