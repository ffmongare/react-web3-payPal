import logo from './web3.svg';
import './App.css';
import { Layout, Button } from "antd";
import CurrentBalance from "./components/CurrentBalance";
import RequestAndPay from "./components/RequestAndPay";
import AccountDetails from "./components/AccountDetails";
import RecentActivity from "./components/RecentActivity";
import { useConnect, useAccount, useDisconnect } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { useState, useEffect } from "react";
import axios from "axios";

const { Header, Content } = Layout;

function App() {

  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { connect } = useConnect({
    connector: new MetaMaskConnector(),
  });

  const [name, setName] = useState("...");
  const [balance, setBalance] = useState("...");
  const [dollars, setDollars] = useState("...");
  const [history, setHistory] = useState(null);
  const [requests, setRequests] = useState({ "1": [0], "0": [] });

  function disconnectAndSetNull() {
    disconnect();
    setName("...");
    setBalance("...");
    setDollars("...");
    setHistory(null);
    setRequests({ "1": [0], "0": [] });
  }

  async function getNameAndBalance() {
    const res = await axios.get(`http://localhost:3001/getNameAndBalance`, {
      params: { userAddress: address },
    });

    const response = res.data;
    console.log(response);
    if (response.name[1]) {
      setName(response.name[0]);
    }
    setBalance(String(response.balance));
    setDollars(String(response.dollars));
    setHistory(response.history);
    setRequests(response.requests);
    
  }

  useEffect(() => {
    if (!isConnected) return;
    getNameAndBalance();
  }, [isConnected]);

  return (
    <div className="min-w-full min-h-screen">
      <Layout>
        <Header className="bg-white flex justify-between items-center pl-40 h-70 pr-72">
          <div className="flex flex-start items-center font-bold text-base h-10 space-x-8">
            <img src={logo} alt="logo" className="h-20 cursor-pointer" />
            {isConnected && (
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
            )}
          </div>
          {isConnected ? (
            <Button className='bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 rounded cursor-pointer' onClick={disconnectAndSetNull}>
              Disconnect Wallet
            </Button>
          ) : (
            <Button className='bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 rounded cursor-pointer' onClick={()=>{connect();
            }}>
              Connect Wallet
            </Button>
          )}
        </Header>
        <Content className="pt-2 pl-44 flex justify-start items-start gap-10 bg-white">
          {isConnected ? (
            <>
              <div className="w-500 min-h-200 space-y-5">
					<CurrentBalance dollars={dollars} />
					<RequestAndPay requests={requests} getNameAndBalance={getNameAndBalance} />
					<AccountDetails
            address={address}
            name={name}
            balance={balance}
           />
			  </div>
              <div className="w-800 min-h-200">
					<RecentActivity history={history} />
              </div>
            </>
          ) : (
            <div>Please Login</div>
          )}
        </Content>
      </Layout>
    </div>
  );
}

export default App;
