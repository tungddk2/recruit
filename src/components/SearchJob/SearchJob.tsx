import { ReactElement } from "react";
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Space,
  Dropdown,
  MenuProps,
} from "antd";
import useBreakpoints from "../../hooks/useBreakpoints";
import { DownOutlined, SearchOutlined, SmileOutlined } from "@ant-design/icons";

export default function SearchJob(): ReactElement {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      ),
      icon: <SmileOutlined />,
      disabled: true,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: "4",
      danger: true,
      label: "a danger item",
    },
  ];

  return (
    <div className="bg-[#00577326] py-2 w-[100vw]">
      <div className="flex sm:w-[70%] w-[95%] mx-auto">
        <Input />
        <Button type="primary">
          <SearchOutlined />
          Search
        </Button>
      </div>

      <div className="flex mx-auto sm:w-[70%] w-[95%] mt-2 sm:text-sm text-xs justify-around">
        <div className="py-3  sm:pr-6 pr-1">
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Nganh nghe
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
        <div className="py-3  sm:pr-6 sm:pl-6">
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Nganh nghe
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
        <div className="py-3  sm:pr-6 pr-1 sm:pl-6">
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Nganh nghe
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
        <div className="py-3  sm:pr-6 pr-1 sm:pl-6">
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Nganh nghe
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
