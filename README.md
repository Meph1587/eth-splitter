# Eth Splitter

## Development

### Install dependencies

```sh
yarn
```

### Compile typescript, contracts, and generate typechain wrappers

```sh
yarn build
```

### Run tests

```sh
yarn test
```

### Run coverage

```sh
yarn coverage
```

### Environment Setup

Copy `.env.example` to `.env` and fill in fields

### Commands

```sh
# compiling
npx hardhat compile

# deploying
yarn deploy --network rinkeby

# verifying on etherscan
npx hardhat verify --network rinkeby {DEPLOYED_ADDRESS}

# replace `rinkeby` with `mainnet` to productionize
```

### Gas Costs

```shell
·--------------------------------|--------------|-------------|-------------|---------------|-------------·
················|················|··············|·············|·············|···············|··············
|  Contract     ·  Method        ·  Min         ·  Max        ·  Avg        ·  # calls      ·  eur (avg)  │
················|················|··············|·············|·············|···············|··············
|  EthSplitter  ·  distribute    ·           -  ·          -  ·      56999  ·            1  ·          -  │
················|················|··············|·············|·············|···············|··············
|  EthSplitter  ·  updateShares  ·           -  ·          -  ·      47501  ·            2  ·          -  │
················|················|··············|·············|·············|···············|··············
|  EthSplitter  · distributeERC20·           -  ·          -  ·      125802 ·            1  ·          -  │
················|················|··············|·············|·············|···············|··············
|  Deployments                   ·                                          ·  % of limit   ·             │
·································|··············|·············|·············|···············|··············
|  EthSplitter                   ·           -  ·          -  ·    1107123  ·        3.7 %  ·          -  │
·--------------------------------|--------------|-------------|-------------|---------------|-------------·
```
