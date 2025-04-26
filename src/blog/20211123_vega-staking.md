---
title: "Staking Your Vega Tokens"
date: 2021-11-23T20:00:00+02:00
author: Lovali
#image_webp: images/blog/meghna.webp
image: /images/portfolio/vega.png
description : "How to stake your VEGA tokens"
---

## BREAKING : `VEGA restricted mainnet is live since November, 24th of 2021`. Catch the opportunity and start staking your VEGA tokens on our node following the steps below. And if you want to know more about what to expect from restricted mainnet, read [this blog](https://blog.vega.xyz/what-to-expect-from-restricted-mainnet-616086d9fdaf) from the VEGA team.

### Step 0

- If you do not already have a VEGA wallet, please follow the instructions in the following video ;

{{< youtube hpsHUCU5MwY >}}

- Go to [https://token.vega.xyz/](https://token.vega.xyz/) ;

![https://token.vega.xyz/](/images/blog/stakingVEGA/1-VEGAStakingHomePage.jpg)

- Click on the `STAKING` tab on the top of the page.

![STAKING tab](/images/blog/stakingVEGA/2-VEGAStakingConnectETHWallet.jpg)

### Step 1 :
- Click on the `Connect to an Ethereum wallet` button and connect to your Ethereum wallet (for example with Metamask). Confirm the connection to the wallet in Metamask ;

![Connect to a Metamask Ethereum Wallet part 1](/images/blog/stakingVEGA/3-VEGAStakingConnectMetamask.jpg)

- The amount of VEGA tokens in your Ethereum wallet should be displayed on the right panel ;

![Connect to a Metamask Ethereum Wallet part 2](/images/blog/stakingVEGA/4-VEGAStakingConnectVEGAWallet1.jpg)

- Click on the `Connect to see your VEGA balance` button and enter the username/passphrase associated to your Vega wallet created in step 1.

![Connect to a VEGA Wallet part 1](/images/blog/stakingVEGA/5-VEGAStakingConnectVEGAWallet2.jpg)

### Step 2 :
- You should now see on the right panel that your Vega wallet is connected (but no token is associated/staked yet) ;

- Click on the `Associate VEGA tokens with wallet` button ;

![Associate VEGA tokens with wallet part 1](/images/blog/stakingVEGA/6-VEGAStakingAssociateVEGA1.jpg)

- When asked "Where would you like to stake from ?", select `Wallet` and enter the amount of VEGA tokens you would like to associate with your wallet (or you can click on the `Use maximum` link to populate this field with the amount coresponding to all the available tokens) ;

- Then click the `Approve VEGA tokens for staking on Vega` button, confirm the transaction with Metamask and wait for the confirmations to complete on the blockchain ;

![Associate VEGA tokens with wallet part 2](/images/blog/stakingVEGA/7-VEGAStakingAssociateVEGA2.jpg)

- Click the `Associate VEGA tokens with key` button, confirm the transaction in Metamask and wait for the confirmations to complete on the blockchain. This time, it will take more time since more confirmations are required (you can optionally check the transaction on Etherscan with the link provided if you want) ;

![Associate VEGA tokens with wallet part 3](/images/blog/stakingVEGA/8-VEGAStakingAssociateVEGA3.jpg)

- The amount of tokens you just associated will appear on the right panel (they are still not staked for the moment).

![Associate VEGA tokens with wallet part 4](/images/blog/stakingVEGA/9-VEGAStakingAssociateVEGA4.jpg)

### Step 3 :
- In the list of validators, click on `Lovali` to stake your VEGA tokens ;

![Select a validator part 1](/images/blog/stakingVEGA/10-VEGAStakingSelectValidator1.jpg)

- Select the `Add` radio button, enter the amount of VEGA tokens you want to stake (or you can click on the `Use maximum` link to populate this field with the amount coresponding to all the available tokens) and click on the `Add XXX VEGA tokens` button ;

![Select a validator part 2](/images/blog/stakingVEGA/11-VEGAStakingSelectValidator2.jpg)

- Wait for the transaction to finish and check that the stake on node (next epoch) value is now equal to the amount you want to stake ;

![Select a validator part 3](/images/blog/stakingVEGA/12-VEGAStakingSelectValidator3.jpg)

- Wait for the end of the current epoch (you can check the progress bar in the previous screenshot). You can now leave the website and come back later if the end of the current epoch is too far.

### Final check (next epoch) :

- Come back to [https://token.vega.xyz/](https://token.vega.xyz/) when the next epoch is started ;

- Repeat Step 1 if your wallets have been disconnected since the previous step ;

- Click on the `STAKING` tab on the top of the page, and double check that your stake for Lovali validator is equal to the amount you want. If not you are still able to add more VEGA tokens repeating step 3. This step can be important if you want to stake a large amount of tokens since there is an anti-whale mechanism which can kick in in some situations on Vega protocol (in the example, we tried to stake 10 000 tokens but only 3 700 have been actually staked). The rule defined by the Vega protocol is the following : "At the end of the epoch, given all requested nominations and un-nominations, and current active nominations, the max stake per validator is defined as the `(current total stake across all validators minus the total requested un-nominated stake + total requested nominated stake) divided by 3`. Each validator will not accept more stake beyond the maximum : if it has already more than the maximum it will reject all requests for nomination but will leave any existing stake untouched".

![Final check](/images/blog/stakingVEGA/14-VEGAStakingSummaryAllValidators.jpg)

- That's it, you can now start to enjoy your staking rewards (you can disconect your wallets and close the wallet terminal) !


