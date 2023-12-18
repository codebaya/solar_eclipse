import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { useEffect, useState } from "react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  mainnet,
} from "wagmi/chains";


import 'bootstrap/dist/css/bootstrap.min.css';

import "../styles.css";
import "../components/background.css";
import "../components/roadmap.css";


// 1. Get projectID at https://cloud.walletconnect.com
if (!process.env.NEXT_PUBLIC_PROJECT_ID) {
  throw new Error("You need to provide NEXT_PUBLIC_PROJECT_ID env variable");
}


// 2. Configure wagmi client
const chains = [mainnet]
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })
createWeb3Modal({
  wagmiConfig, projectId, chains, themeVariables: {
    '--w3m-accent': '#7073C3',
  }
}
)

// 4. Wrap your app with WagmiProvider and add <Web3Modal /> compoennt
export default function App({ Component, pageProps }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      {ready ? (
        <WagmiConfig config={wagmiConfig}>
          <Component {...pageProps} />
        </WagmiConfig>
      ) : null}

    </>
  );
}


