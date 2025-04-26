---
title: "Introducing Multisig Monitoring Tool"
date: 2023-07-22T15:00:00+02:00
author: Lovali
#image_webp: images/blog/meghna.webp
image: /images/portfolio/vega.png
description : "Lovali create a new tool to monitor the status of the Vega multisig contract"
---

## Introduction:
In the ever-evolving landscape of cryptocurrencies and blockchain technology, security and reliability are paramount. The Vega Protocol, a decentralized trading platform enabling users to access diverse financial products, recognizes the critical role of its multisig control contract. The multisig contract ensures that only registered consensus validators have control over important operations, safeguarding the platform's integrity. To uphold this crucial aspect of Vega's ecosystem, Lovali has developed a groundbreaking monitoring tool. This tool plays a pivotal role in continuously assessing the correctness of the multisig contract, which significantly impacts the calculation of rewards and the smooth functioning of essential operations within the Vega network. Let's explore how Lovali's monitoring tool addresses the intricacies of the multisig contract and bolsters Vega Protocol's security.

## Understanding the Significance of the Multisig Control Contract:
The multisig control contract is a fundamental mechanism within the Vega Protocol that ensures the presence and proper configuration of consensus validators. It plays a vital role in the interactions between the Vega chain and the Ethereum chain, enabling essential operations such as associating and staking tokens. The integrity of this contract is crucial for seamless cross-chain functionality and overall network security.

## The Role of Multisig Score in Validator Validation:
The multisig score is a critical metric used to validate consensus validators registered on the multisig control contract. This score determines the eligibility of validators to participate in specific network activities, particularly in the context of rewards calculation. The following rules govern the computation of the multisig score:

1. **Missing Validators:** If any consensus validator is missing from the multisig control contract, they will receive a multisig score of zero. This score remains at zero until the validator is added to the multisig contract.

2. **Non-Consensus Validators:** If any non-consensus validator is found in the multisig control contract, all consensus validators will receive a multisig score of zero. This measure ensures that only active consensus validators with proper authority hold control.

3. **Reward Calculation Impact:** The multisig score directly influences the calculation of staking rewards. Validators with a multisig score of zero will not receive any rewards, and their nominators' rewards will also be impacted. This mechanism incentivizes validators to maintain an accurate and up-to-date multisig control contract.

## The Role of Lovali's Monitoring Tool:
Lovali's monitoring tool serves as a vigilant guardian, continuously scrutinizing the status and accuracy of the Vega Protocol's multisig control contract. By offering real-time updates, the tool allows validators and stakeholders to promptly detect any discrepancies or configuration issues. When validators are promptly aware of configuration problems, they can take corrective actions promptly, ensuring the contract remains accurate and effectively functional.

## Key Features of the Monitoring Tool:

1. **Real-time Status Updates:** Lovali's monitoring tool provides real-time updates on the Vega Protocol's multisig contract. Users can promptly identify any unexpected changes, ensuring immediate attention and action if necessary.

2. **Transparency through Open-Source:** The monitoring tool is fully open-source, with its repository available on GitHub. This commitment to transparency empowers the community to review the tool's code, suggest improvements, and confirm its integrity, further strengthening trust in the system.

3. **Public Telegram Channel:** Lovali has created a dedicated public Telegram channel specifically for monitoring the status of the Vega Protocol's multisig contract. By joining the channel, users can stay informed about contract activities and engage in discussions with like-minded individuals.

## Empowering Validators and Tokenholders:
To correct any configuration issues, any validator or tokenholder can submit a transaction bundle to the network. The submitted transaction bundle will be verified by the validators, allowing them to rectify any inconsistencies and maintain the multisig control contract's accuracy.

## Conclusion:
In the decentralized world of cryptocurrencies, security and accuracy are paramount. Vega Protocol's multisig control contract plays a crucial role in enabling seamless cross-chain functionality and rewards distribution for consensus validators. Lovali's monitoring tool is a groundbreaking addition to the ecosystem, offering real-time updates and ensuring the integrity of the multisig contract. By empowering validators and tokenholders to actively participate in maintaining the correctness of the multisig control contract, the tool fosters a secure and robust network for all participants. Through the collaboration of vigilant monitoring and active involvement, the Vega Protocol continues to strengthen its position as a leading blockchain-based trading platform, inspiring confidence and trust within the crypto community.

## Links

- [GtiHub repository](https://github.com/lovali-crypto/vega-multisig-monitoring)
- [Telegram channel](https://t.me/vega_multisig_monitoring)