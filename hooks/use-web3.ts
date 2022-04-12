import { useContext } from 'react';
import { Web3Context, Web3ContextValue } from '../contexts/web3modal-context';

export const useWeb3 = (): Web3ContextValue => useContext(Web3Context);