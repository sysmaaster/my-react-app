import {connect} from "react-redux";
import Wallet from "./Wallet";

function f(props) {

}

const mapStateToProps = (state) => {
	return {
		wallets : state.wallet
		
	}
};
const mapDispatchToProps = (state) => {
	return {
	}
	
};

const WalletContainer = connect(mapStateToProps,mapDispatchToProps)(Wallet);
export default WalletContainer