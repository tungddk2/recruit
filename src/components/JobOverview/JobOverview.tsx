import React from "react";
import companicPic from "../../assets/companypic.png";
import {
  DollarOutlined,
  EnvironmentOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { Button, Tag } from "antd";
function JobOverview() {
  return (
    <div className="bg-[#00577326] p-[100px] flex justify-between">
      <div>
        <img src={companicPic} alt="pic" />
      </div>

      <div className="space-y-6">
        <div className="">
          <span className="text-[30px] lead-[35px] font-bold">
            Ten vi tri tuyen dung
          </span>
          <span className="text-[#FD0000] text-[20px] lead-[24px]">
            (Trang thai tuyen dung)
          </span>
        </div>
        <div>Ten cong ty</div>
        <div className="flex gap-20">
          <div>
            <EnvironmentOutlined />
            Noi lam viec
          </div>
          <div>
            <DollarOutlined />
            Luong
          </div>
        </div>
        <Tag className="rounded-full py-1 px-2" color="#005773">
          Hinh thuc lam viec
        </Tag>
      </div>

      <div className="space-y-5">
        <div className="text-[20px] lead-[24px] text-[#898484]">
          Ngay dang: dd/mm/yy
        </div>
        <div>
          <Button
            className="w-full text-[20px] lead-[28px] h-[40px]"
            type="primary"
          >
            Ung tuyen
          </Button>
        </div>
        <div>
          <Button className="bg-white w-full text-[20px] lead-[28px]  h-[40px]">
            <HeartOutlined />
            Luu viec lam
          </Button>
        </div>
      </div>
    </div>
  );
}

export default JobOverview;
