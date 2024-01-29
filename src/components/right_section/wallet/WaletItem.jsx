
import  s from './Wallets.module.css'

const PROGRESS = (props) => {
	return (
		<div className={s.progress_containers }>
			<div className={s.progress_root }>
				<div className={s.progress_part }>
					<div
						className={`${s.progress_part_item} ${s.progress_part_item__completed}`}
					>
					</div>
					<div className={s.progress_part_separator }></div>
				</div>
				<div className={s.progress_part }>
					<div className={`${s.progress_part_item} ${s.progress_part_item__completed}`}></div>
					<div className={s.progress_part_separator }></div>
				</div>
				<div className={s.progress_part }>
					<div className={`${s.progress_part_item} ${s.progress_part_item__completed}`}></div>
					<div className={s.progress_part_separator }></div>
				</div>
				<div className={s.progress_part }>
					<div className={s.progress_part_item }></div>
				</div>
			</div>
		</div>
	)
};
const WalletItem = (props) => {
  return (
	  <div className={s.it_style_15 }>
		  <div className={s.it_style_16 }>
			  <div className={s.wallet_content }>
				  <div className={s.wallet_content_row }>
					  <div className={s.wallet_content_name }>{props.W_NAME}</div>
				  </div>
				  <div className={s.wallet_content_row }>
					  <span className={s.wallet_content_comment }>{props.COMMENT}</span>&nbsp;
				  </div>
				  <div className={s.wallet_content_suma }>{props.SUMMA}&nbsp;{props.CCY}</div>
				  {props.credit ? <PROGRESS/> : ""}
			  </div>
		  </div>
	  </div>
  
  )
};

export  default WalletItem




// eslint-disable-next-line no-unused-vars

