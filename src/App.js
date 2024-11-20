import Login from './pages/login/Log-in';
import SginUp from './pages/singUp/SginUp';
import PassRecover from './pages/passRecover/PassRecover';
import Main from './pages/main/Main';
import './App.css';
import Assets from './pages/assets/Assets';
import DepositCrypto from './pages/Deposit/depositCrypto/DepositCrypto';
import DepostBank from './pages/Deposit/depositBank/DepostBank';
import DepositApprove from './pages/Deposit/depositApprove/DepositApprove';

import WithdrawCrypto from './pages/Withdraw/withdrawCrypto/WithdrawCrypto';
import WithdrawBank from './pages/Withdraw/WithdrawBank/WithdrawBank';
import WithdrawApprove from './pages/Withdraw/WithdrawApprove/WithdrawApprove';

import Convert from './pages/convertBlocks/convert/Convert';
import ConvertApprove from './pages/convertBlocks/convertApprove/ConvertApprove';

import PortfolioError from './pages/portfolioBlocks/portfolioError/PortfolioError';
import Portfolio from './pages/portfolioBlocks/portfolio/Portfolio';

import Transactions from './pages/transactions/Transactions';

import Kyc from './pages/kycBlocks/kyc/Kyc';
import KycWait from './pages/kycBlocks/kycWait/KycWait';
import KycDany from './pages/kycBlocks/kycDany/KycDany';
import KycApprove from './pages/kycBlocks/kycApprove/KycApproved';

import Policy from './pages/policyBlocks/policy/Policy';
import PolicyAbout from './pages/policyBlocks/policyAbout/PolicyAbout';

function App() {
    return (
        <div className="App">
            <Login />
            {/* <SginUp/> */}
            {/* <PassRecover/> */}

            {/* <Main/>      */}

            {/* <Assets/> */}

            {/* <DepositCrypto/>             */}
            {/* <DepostBank/> */}
            {/* <DepositApprove/>             */}

            {/* <WithdrawCrypto/> */}
            {/* <WithdrawBank/> */}
            {/* <WithdrawApprove/> */}

            {/* <Convert /> */}
            {/* <ConvertApprove /> */}

            {/* <PortfolioError/> */}
            {/* <Portfolio/> */}

            {/* <Transactions/> */}

            {/* <Kyc/> */}
            {/* <KycWait/> */}
            {/* <KycDany/> */}
            {/* <KycApprove/> */}

            {/* <Policy/> */}
            {/* <PolicyAbout/> */}
        </div>
    );
}

export default App;
