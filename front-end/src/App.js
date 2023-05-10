import logo from './web3.svg';
import './App.css';
import { Layout, Button } from "antd";
import CurrentBalance from "./components/CurrentBalance";
import RequestAndPay from "./components/RequestAndPay";
import AccountDetails from "./components/AccountDetails";
import RecentActivity from "./components/RecentActivity";

const { Header, Content } = Layout;

function App() {
  return (
    <div className="min-w-full min-h-screen">
      <Layout>
        <Header className="bg-white flex justify-between items-center pl-40 h-70 pr-72">
          <div className="flex flex-start items-center font-bold text-base h-10 space-x-8">
            <img src={logo} alt="logo" className="h-20 cursor-pointer" />
            <>
              <div
                className="leading-40 cursor-pointer"
                style={{ borderBottom: "1.5px solid black" }}
              >
                Summary
              </div>
              <div className="leading-40 cursor-pointer">Activity</div>
              <div className="leading-40 cursor-pointer">{`Send & Request`}</div>
              <div className="leading-40 cursor-pointer">Wallet</div>
              <div className="leading-40 cursor-pointer">Help</div>
            </>
          </div>

          <Button className='bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 rounded cursor-pointer' >Connect Wallet</Button>
        </Header>
        <Content className="pt-2 pl-44 flex justify-start items-start gap-10 bg-white">
          <div className="w-500 min-h-200 space-y-5">
              <CurrentBalance />
              <RequestAndPay />
              <AccountDetails />
          </div>
          <div className="w-800 min-h-200">
              <RecentActivity />
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
