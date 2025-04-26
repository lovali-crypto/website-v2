const n=`---
title: "How to run vega console locally"
date: 2023-02-12T17:00:00+02:00
author: Lovali
#image_webp: images/blog/meghna.webp
image: /images/portfolio/vega.png
description : "Lovali tutorial."
---

Welcome to this tutorial on how to run Vega Protocol Console locally! The Vega Protocol Console is an essential tool for interacting with the Vega decentralized finance (DeFi) network. By having it run locally, you have complete control over your assets and can ensure that your transactions are processed securely and efficiently.

Decentralization is one of the core principles of the blockchain technology and is particularly important in the DeFi space. In a centralized system, a single entity controls all the assets and transactions, making it vulnerable to cyber attacks and censorship. On the other hand, in a decentralized system like Vega, transactions are processed by a network of nodes, making it more secure and resistant to tampering.

In this tutorial, we will guide you through the process of setting up the Vega Protocol Console on your local machine, giving you a hands-on experience of using this powerful tool. Whether you are a seasoned blockchain enthusiast or a beginner, you will find this tutorial easy to follow and informative. So, let's get started!

# Console deployment
## Requirements
In order to build the console you need:
- A git client
- Node.js (test has been performed with v16.19.0)
- Yarn (test has been performed with v1.22.19)

## Procedure
1. Clone the Vega frontend monorepo. This repository contains the code of all frontend product related to Vega:
\`\`\`bash 
git clone https://github.com/vegaprotocol/frontend-monorepo
\`\`\`
2. Download dependencies defined in package.json:
\`\`\`bash
yarn
\`\`\`
3. Edit the .env file under apps/trading/.env and set the information about the datanode you configured in the previous step:
\`\`\`ini
NX_ETHEREUM_PROVIDER_URL=https://sepolia.infura.io/v3/4f846e79e13f44d1b51bbd7ed9edefb8
NX_ETHERSCAN_URL=https://sepolia.etherscan.io
NX_HOSTED_WALLET_URL=https://wallet.testnet.vega.xyz
NX_VEGA_CONFIG_URL=https://static.vega.xyz/assets/testnet-network.json
NX_VEGA_ENV=TESTNET
NX_VEGA_EXPLORER_URL=https://explorer.fairground.wtf
NX_VEGA_NETWORKS={\\"TESTNET\\":\\"https://console.fairground.wtf\\",\\"STAGNET1\\":\\"https://stagnet1.console.vega.xyz\\",\\"STAGNET3\\":\\"https://stagnet3.console.vega.xyz\\"}
NX_VEGA_TOKEN_URL=https://token.fairground.wtf
NX_VEGA_WALLET_URL=http://localhost:1789
NX_VEGA_DOCS_URL=https://docs.vega.xyz/testnet
\`\`\` 

The network configuration for the app

| **Flag**                   | **Purpose**                                                                                              |
| -------------------------- | -------------------------------------------------------------------------------------------------------- |
| \`NX_VEGA_ENV\`              | The name of the currently connected vega environment                                                     |
| \`NX_VEGA_CONFIG_URL\`       | The network configuration for the app                                                                    |
| \`NX_VEGA_URL\`              | The GraphQL query endpoint of your Vega data node     |
| \`NX_ETHEREUM_PROVIDER_URL\` | The Ethereum Provider URL for getting data from the Ethereum network (your local Ethereum node) |
| \`NX_ETHERSCAN_URL\`         | The Etherscan URL to link Ethereum transactions to                                                       |

4. Build the console:
\`\`\`bash
npx nx build trading
\`\`\`
You will get an output similar to the following:
\`\`\`console
/workspace/frontend-monorepo (develop) $ npx nx build trading

   ✔    25/25 dependent project tasks succeeded [25 read from cache]

   Hint: you can run the command with --verbose to see the full dependent project outputs

 ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————


> nx run trading:build:production  [remote cache]

info  - Loaded env from apps/trading/.env
warn  - No build cache found. Please configure build caching for faster rebuilds. Read more: https://nextjs.org/docs/messages/no-cache
Attention: Next.js now collects completely anonymous telemetry regarding usage.
This information is used to shape Next.js' roadmap and prioritize features.
You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
https://nextjs.org/telemetry

info  - Skipping linting
info  - Checking validity of types...
info  - Creating an optimized production build...
info  - Compiled successfully
info  - Collecting page data...
info  - Generating static pages (0/3)
info  - Generating static pages (3/3)
info  - Finalizing page optimization...

Page                                       Size     First Load JS
┌ ○ /                                      264 B          1.14 MB
├   /_app                                  0 B            1.14 MB
└ ○ /404                                   196 B          1.14 MB
+ First Load JS shared by all              1.14 MB
  ├ chunks/framework-9115437038c14d1c.js   66.4 kB
  ├ chunks/main-843e772e64816c5c.js        30.9 kB
  ├ chunks/pages/_app-af371fc22fc8ad9d.js  1.04 MB
  ├ chunks/webpack-978fd0272b9257d7.js     2.66 kB
  └ css/07a865619fb15df3.css               8.84 kB

○  (Static)  automatically rendered as static HTML (uses no initial props)


 ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

 >  NX   Successfully ran target build for project trading and 25 task(s) it depends on (11s)
 
   Nx read the output from the cache instead of running the command for 26 out of 26 tasks.
 
   Nx Cloud made it possible to reuse 26 tasks: https://cloud.nx.app/runs/rpKUrmxjfI
\`\`\`

The build artifact is located in the **dist folder**.

5. **(optional step)** You can now delete or move the **dist** folder to a different location and delete the frontend-monorepo folder

6. Navigate to the dist folder

7. Download dependencies defined in package.json:
\`\`\`bash
yarn
\`\`\`

8. Start the console
\`\`\`bash
yarn start
\`\`\`
You will get an output similar to the following:
\`\`\`console
/dist/apps/trading (develop) $ yarn start
yarn run v1.22.19
warning package.json: No license field
$ next start
ready - started server on 0.0.0.0:3000, url: http://localhost:3000

warn - As of Tailwind CSS v2.2, \`lightBlue\` has been renamed to \`sky\`.
warn - Update your configuration file to silence this warning.

warn - As of Tailwind CSS v3.0, \`warmGray\` has been renamed to \`stone\`.
warn - Update your configuration file to silence this warning.

warn - As of Tailwind CSS v3.0, \`trueGray\` has been renamed to \`neutral\`.
warn - Update your configuration file to silence this warning.

warn - As of Tailwind CSS v3.0, \`coolGray\` has been renamed to \`gray\`.
warn - Update your configuration file to silence this warning.

warn - As of Tailwind CSS v3.0, \`blueGray\` has been renamed to \`slate\`.
warn - Update your configuration file to silence this warning.
\`\`\`

9. You can now open your favorite web browser and navigate to http://localhost:3000

**HAPPY TRADING!**`;export{n as default};
