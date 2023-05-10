import React from 'react';
import { Card } from "antd";

function CurrentBalance() {
  return (
    <Card title="Current Balance" style={{ width: "100%" }}>
      <div className="h-70 text-70 font-light flex justify-evenly items-end text-bottom">
        <div className='leading-70 text-6xl' >$ 1300.12</div>
        <div style={{ fontSize: "20px" }}>Available</div>
      </div>
      <div className="mt-8 flex justify-center items-center gap-10">
        <div className="w-180 px-10 text-center border-2 border-solid border-blue-300 rounded-full font-semibold text-blue-600 transition-colors transition-duration-400 transition ease-in-out cursor-pointer">Swap Tokens</div>
        <div className="w-180 px-10 text-center border-2 border-solid border-blue-300 rounded-full font-semibold text-blue-600 transition-colors transition-duration-400 transition ease-in-out cursor-pointer">Bridge Tokens</div>
      </div>
    </Card>
  );
}

export default CurrentBalance