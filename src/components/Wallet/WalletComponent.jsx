import s from './Wallets.module.css'
import WalletItem from "./WaletItem";
import React from "react";

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
function LIST_SUB_CATEGORY(props) {
	return <>
		<div key={props.key} className={s.list__subcategory}>
			<div className={s.list__subcategory_pin}>
				<div className={props.cardA ? s.list__subcategory_pin_item_a : ""}></div>
			</div>
			<div className={`${s.list__subcategory_name}  ${props.cardA ? s.list__subcategory_name_active : ''}`} onClick={() => {	props.clickActive()	}}>
				{props.qa_name}
			</div>
			<ARROW a={props.cardA}/>
		</div>
		
		<div className={`${s.list_wrapper} ${props.cardA ? "" : s.block_hover}`}>
			<div className={s.list_content_flex}>
				{props.wallets.map((i) => {
					return <WalletItem key={i.id} W_NAME={i.W_NAME} SUMMA={i.SUMMA} LIMIT={i.LIMIT} CCY={i.CCY} COMMENT={i.COMMENT} credit={props.credit}/>
			})}
			</div>
		</div>
	</>;
}
function CardsCategory (props)  {
	
	return (
		<div className={s.catg_item}>
			<div className={`${s.catg_item_container} ${props.card ? s.catg_item_container_active : ""}`}>
				<div className={`${s.catg_item_row}`} onClick={() => { props.clickCard()}}>
					<div className={s.catg_item_text}>{props.Name}</div>
				</div>
				{props.credit ? "" : <CARD_BTN card={props.card}/>}
			</div>
			<div className={`${s.list_content} ${props.card ? "" : s.block_hover}`}>
				{ props.wallets.active.length<=0 ? "" :
					<LIST_SUB_CATEGORY  cardA={props.card_a} clickActive={props.clickActive} wallets={props.wallets.active} qa_name={'Активні'}/>
				}
				{ props.wallets.hower.length<=0 ? "" :
					<LIST_SUB_CATEGORY  cardA={props.card_h} clickActive={props.clickHower} wallets={props.wallets.hower} qa_name={'Приховані'}/>
				}
			</div>
		</div>
	)
}
function WalletComponent(props: {
	card: undefined,
	clickCard: () => void,
	cardA: undefined,
	clickActive: () => void,
	cardH: undefined,
	clickHower: () => void,
	wallets: { hower: []; active: [] },
	deposit: undefined,
	clickDeposit: () => void,
	debit_item: { hower: []; active: [] },
	credit: undefined,
	clickCredit: () => void,
	credit_item: { hower: []; active: [] }
}) {
	return <div className={s.container}>
		<div className={s.row} id="catg">
			<CardsCategory Name={"Картки"} card={props.card}
			               credit={props.credit}
			               clickCard={props.clickCard}
			               card_a={props.cardA}
			               clickActive={props.clickActive}
			               card_h={props.cardH}
			               clickHower={props.clickHower}
			               wallets={props.wallets}/>
			<CardsCategory Name={"Депозити"} card={props.deposit}
			               credit={props.credit}
			               clickCard={props.clickDeposit}
			               card_a={props.cardA}
			               clickActive={props.clickActive}
			               card_h={props.cardH}
			               clickHower={props.clickHower}
			               wallets={props.debit_item}/>
			<CardsCategory Name={"Кредити"} card={props.credit}
			               credit={props.credit}
			               clickCard={props.clickCredit}
			               card_a={props.cardA}
			               clickActive={props.clickActive}
			               card_h={props.cardH}
			               clickHower={props.clickHower}
			               wallets={props.credit_item}/>
		</div>
	</div>;
}
export default WalletComponent