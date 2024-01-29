import  s from './Wallets.module.css'
import WalletItem from "./WaletItem";
import React, { useState} from "react";

function CARD_BTN (props) {
	return  <div className={`${s.style_6} ${props.card ? "" : s.block_hover}`}>
		<div className={s.style_7}>
			<div title="Додати картку" className={s.style_8}>
				<div className={s.style_9}>
					<div className={s.style_10}>
						<div className={s.style_11}>
							<svg
								height="24px"
								width="24px"
								fill="none"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								className={s.style_12}>
								<path
									d="M11 5v6H5v2h6v6h2v-6h6v-2h-6V5h-2z"
									fill="#FFF"
									fillRule="evenodd"
									className={s.style_12}>
								</path>
							</svg>
						</div>
					</div>
				</div>
			</div>
			<div title="Сортування" className={s.style_14}>
				<div className={s.style_9}>
					<div className={s.style_16}>
						<div className={s.style_17}>
							<svg
								height="24px"
								width="24px"
								version="1.1"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								className={s.style_12}
							>
								<path
									d="M3 13h12v-2H3v2zm0-7v2h18V6H3zm0 12h6v-2H3v2z"
									fill="#FFF"
									fillRule="nonzero"
									stroke="none"
									strokeWidth="1"
									className={s.style_12}
								></path>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>;
}
function ARROW(props) {
	return <div className={`${s.list__subcategory_arrow } ${props.a ? s.list__subcategory_arrow_active : ''}`}  >
		<div className={s.style_30}>
			<svg
				height="24px"
				width="24px"
				fill="none"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				className={s.style_31}
			>
				<path
					d="M12 15.4l-6-6L7.4 8l4.6 4.6L16.6 8 18 9.4l-6 6z"
					fill="black"
					fillRule="evenodd"
					className={s.style_31}
				></path>
			</svg>
		</div>
	</div>
}

const Wallet = (props) => {
	let  [card, card_f  ] = useState();
	let [card_a, card_a_f  ] = useState();
	let [card_h, card_h_f  ] = useState();
	let [deposit, deposit_f  ] = useState();
	let [credit, credit_f  ] = useState();
	
	const clickCard= ()=> {
		card_f(!card);card_a_f(card_a=true);card_h_f(card_h=false);
		credit_f(credit=false);
		deposit_f(deposit=false)
	};
	const clickCardActive = () => {
		card_a_f(!card_a);
		card_h_f(card_h=false);
	};
	const clickCardHower = () => {
		card_h_f(!card_h);
		card_a_f(card_a=false);
	};
	const clickDeposit = () => {
		card_f(card=false);card_a_f(card_a=true);card_h_f(card_h=false);
		deposit_f(!deposit);
		credit_f(credit=false)
	};
	const clickCredit = () => {
		card_f(card=false);card_a_f(card_a=true);card_h_f(card_h=false);
		deposit_f(deposit=false);
		credit_f(!credit);
	};
	return (
		<div className={s.container}>
			<div className={s.row} id="catg">
			<CardsCaregory card={card}
			               Name={"Картки"}
			               clickCard={clickCard}
			               card_a={card_a}
			               clickCardActive={clickCardActive}
			               card_h={card_h}
			               clickCardHower={clickCardHower}
											wallets={props.wallets}/>
				<CardsCaregory card={deposit}
				               Name={"Депозити"}
				               clickCard={clickDeposit}
				               card_a={card_a}
				               clickCardActive={clickCardActive}
				               card_h={card_h}
				               clickCardHower={clickCardHower}
				               wallets={props.wallets}/>
				<CardsCaregory card={credit}
				               credit={credit}
				               Name={"Кредити"}
				               clickCard={clickCredit}
				               card_a={card_a}
				               clickCardActive={clickCardActive}
				               card_h={card_h}
				               clickCardHower={clickCardHower}
				               wallets={props.wallets}/>
			</div>
		</div>
	)
 
};

const CardsCaregory = (props) => {
	return (
		<div className={s.catg_item}>
					<div className={`${s.catg_item_container} ${props.card ? s.catg_item_container_active : ""}`}>
						<div onClick={() => {   props.clickCard()    }}
						     className={`${s.catg_item_row}`}>
							<div className={s.catg_item_text}>{props.Name}</div>
						</div>
						{props.credit ? "" : <CARD_BTN card={props.card}/>}
						
					</div>
					<div className={`${s.list_content} ${props.card ? "" : s.block_hover}`}>
						<div className={s.list__subcategory}>
							<div className={s.list__subcategory_pin}>
								<div className={props.card_a ? s.list__subcategory_pin_item_a : "" }></div>
							</div>
							<div className={s.list__subcategory_name} onClick={() => {props.clickCardActive()	}}>
								Активні
							</div>
							<ARROW a={props.card_a}/>
						</div>
						<div className={`${s.list_wrapper} ${props.card_a ? "" : s.block_hover}`}>
							<div className={s.list_content_flex} id="Активні">
								{props.wallets.item.map((i) => {
									return <WalletItem W_NAME={i.W_NAME} SUMMA={i.SUMMA} CCY={i.CCY} COMMENT={i.COMMENT} credit={props.credit}/>
								})}
							</div>
						</div>
						<div className={s.list__subcategory} data-qa-value="Приховані">
							<div className={s.list__subcategory_pin}>
								<div className={props.card_h ? s.list__subcategory_pin_item_a : ""}></div>
							</div>
							<div className={s.list__subcategory_name} onClick={() => {	props.clickCardHower()}}>
								Приховані
							</div>
							<ARROW a={props.card_h}/>
						</div>
						
						<div className={`${s.list_wrapper} ${props.card_h ? "" : s.block_hover}`}>
							<div className={s.list_content_flex} id="Приховані">
								{props.wallets.item.map((i) => {
									return <WalletItem W_NAME={i.W_NAME} SUMMA={i.SUMMA} CCY={i.CCY}/>
								})}
							</div>
						</div>
					</div>
				</div>
	)
};
export default Wallet


