import React from "react";
import { Card } from "antd";
import { UserOutlined } from "@ant-design/icons";
import matic from "../matic.png";


function AccountDetails({ address, name, balance }) {
  

  return (
    <Card title="Account Details" style={{ width: "100%" }}>
      <div className="flex justify-start-items-center w-full h-70 ml-25 gap 30 mb-4">
        <UserOutlined style={{ color: "#767676", fontSize: "25px" }} />
        <div>
          <div className="ml-2 font-bold text-sm text-gray-700"> {name}  </div>
          <div className="ml-2 text-gray-600 text-sm font-semibold">
            {" "}
            Address: {address.slice(0, 5)}...{address.slice(38)}
          </div>
        </div>
      </div>
      <div className="flex justify-start-items-center w-full h-70 ml-25 gap 30">
        <img src={matic} alt="maticLogo" width={25} />
        <div>
          <div className="ml-2 font-bold text-sm text-gray-700"> Native Matic Tokens</div>
          <div className="ml-2 text-gray-600 text-sm font-semibold">{balance} Matic</div>
        </div>
      </div>
      <div className="mt-8 flex justify-center items-center gap-10">
        <div className="w-180 px-10 text-center border-2 border-solid border-blue-300 rounded-full font-semibold text-blue-600 transition-colors transition-duration-400 transition ease-in-out cursor-pointer">Set Username</div>
        <div className="w-180 px-10 text-center border-2 border-solid border-blue-300 rounded-full font-semibold text-blue-600 transition-colors transition-duration-400 transition ease-in-out cursor-pointer">Switch Accounts</div>
      </div>
    </Card>
  );
}

export default AccountDetails;