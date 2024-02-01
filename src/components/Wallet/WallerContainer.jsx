import {connect} from "react-redux";
import React, {useState} from "react";
import WalletComponent from "./WalletComponent";

const Wallet = (props) => {
	let card_item=   {	active:[],	hower:[], };
	let debit_item=  {	active:[],	hower:[],	};
	let credit_item= {	active:[],	hower:[],	};
	const sort = (w_item, w_ar, sort) => {
		w_item.reduce((w_arr,i) => {
			if (i.TYPE === sort) {
				if (i.HOVER)  { w_ar.hower.push(i); }
				if (!i.HOVER) {	w_ar.active.push(i); }
			}
			return w_ar;
		}, []);
	};
	sort(props.wallets.item, card_item,"CARD");
	sort(props.wallets.item,debit_item,"DEBIT");
	sort(props.wallets.item,credit_item,"CREDIT");
	
	let [card,    card_f    ] = useState();
	let [card_a,  card_a_f  ] = useState();
	let [card_h,  card_h_f  ] = useState();
	let [deposit, deposit_f ] = useState();
	let [credit,  credit_f  ] = useState();
	
	const clickCard= ()=> {
		card_f(!card);card_a_f(card_a=true);card_h_f(card_h=false);
		//	credit_f(credit=false);
		//	deposit_f(deposit=false)
	};
	const clickActive = () => {	card_a_f(!card_a);	card_h_f(card_h=false);	};
	const clickHover = () => {card_h_f(!card_h);card_a_f(card_a=false);};
	const clickDeposit = () => {
		card_f(card=false);card_a_f(card_a=true);card_h_f(card_h=false);
		deposit_f(!deposit);
		//credit_f(credit=false)
	};
	const clickCredit = () => {
		//card_f(card=false);card_a_f(card_a=true);card_h_f(card_h=false);
		//deposit_f(deposit=false);
		credit_f(!credit);
	};
	return (
		<WalletComponent card={card} clickCard={clickCard} cardA={card_a} clickActive={clickActive} cardH={card_h}
		                 clickHower={clickHover} wallets={card_item} deposit={deposit} clickDeposit={clickDeposit} debit_item={debit_item}
		                 credit={credit} clickCredit={clickCredit} credit_item={credit_item}/>
	)
};

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