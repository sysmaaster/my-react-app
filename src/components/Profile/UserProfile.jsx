import React from "react";
import s from './Profile.module.css'
import './ss.css'

const UserProfile = ( props ) => {//mb-4  mb-1 mb-2 ms-1  {`${s.} ${s.}`}  d-flex           }
	let PostInputElement = React.createRef();
	return (
		<section className={s.pb_4} style={{ maxWidth: "85%", margin: "auto" }}>
			<div className={`${s.bg_white} ${s.border} ${s.rounded_5}`}>
				<section className={s.p_4} style={{ backgroundColor: "#eee", borderRadius: ".5rem .5rem 0 0" }}>
					<div className={s.row}>
						<div className={s.col_lg_4}>
							<div className={`${s.card} ${s.mb_4}`}>
								<div className={`${s.card_body} ${s.text_center}`}>
									<img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar"
									     className={`${s.rounded_circle} ${s.img_fluid}`} style={{ width: "150px" }}/>
									<h5 className={s.my_3}>John Smith</h5>
									<p className={`${s.text_muted} ${s.mb_1}`}>Full Stack Developer</p>
									<p className={`${s.text_muted} ${s.mb_4}`}>Bay Area, San Francisco, CA</p>
									<div className={`${s.d_flex} ${s.justify_content_center} ${s.mb_2}`}>
										<button type="button" className={`${s.btn} ${s.btn_primary}`}>Follow</button>
										<button type="button"
										        className={`${s.btn} ${s.btn_outline_primary} ${s.ms_1}`}>Message
										</button>
									</div>
								</div>
							</div>
							<div className={`${s.card} ${s.mb_4} ${s.mb_lg_0}`}>
								<div className={`${s.card_body} ${s.p_0}`}>
									<ul className={`${s.list_group} ${s.list_group_flush} ${s.rounded_3}`}>
										<li className={`${s.list_group_item} ${s.d_flex} ${s.justify_content_between} ${s.align_items_center} ${s.p_3}`}>
											<i className={`${s.fas} ${s.fa_globe} ${s.fa_lg} ${s.text_warning}`}></i>
											<p className={s.mb_0}>https://mdbootstrap.com</p>
										</li>
										<li className={`${s.list_group_item} ${s.d_flex} ${s.justify_content_between} ${s.align_items_center} ${s.p_3}`}>
											<i className="fab fa-github fa-lg" style={{ color: "#333333" }}></i>
											<p className={s.mb_0}>mdbootstrap</p>
										</li>
										<li className={`${s.list_group_item} ${s.d_flex} ${s.justify_content_between} ${s.align_items_center} ${s.p_3}`}>
											<i className="fab fa-twitter fa-lg" style={{ color: "#55acee" }}></i>
											<p className={s.mb_0}>@mdbootstrap</p>
										</li>
										<li className={`${s.list_group_item} ${s.d_flex} ${s.justify_content_between} ${s.align_items_center} ${s.p_3}`}>
											<i className="fab fa-instagram fa-lg" style={{ color: "#ac2bac" }}></i>
											<p className={s.mb_0}>mdbootstrap</p>
										</li>
										<li className={`${s.list_group_item} ${s.d_flex} ${s.justify_content_between} ${s.align_items_center} ${s.p_3}`}>
											<i className="fab fa-facebook-f fa-lg" style={{ color: "#3b5998" }}></i>
											<p className={s.mb_0}>mdbootstrap</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className={s.col_lg_8}>
							<div className={`${s.card} ${s.mb_4}`}>
								<div className={s.card_body}>
									<div className={s.row}>
										<div className={s.col_sm_3}>
											<p className={s.mb_0}>Full Name</p>
										</div>
										<div className={s.col_sm_9}>
											<p className={`${s.text_muted} ${s.mb_0}`}>Johnatan Smith</p>
										</div>
									</div>
									<hr/>
									<div className={s.row}>
										<div className={s.col_sm_3}>
											<p className={s.mb_0}>Email</p>
										</div>
										<div className={s.col_sm_9}>
											<p className={`${s.text_muted} ${s.mb_0}`}>example@example.com</p>
										</div>
									</div>
									<hr/>
									<div className={s.row}>
										<div className={s.col_sm_3}>
											<p className={s.mb_0}>Phone</p>
										</div>
										<div className={s.col_sm_9}>
											<p className={`${s.text_muted} ${s.mb_0}`}>(097) 234-5678</p>
										</div>
									</div>
									<hr/>
									<div className={s.row}>
										<div className={s.col_sm_3}>
											<p className={s.mb_0}>Mobile</p>
										</div>
										<div className={s.col_sm_9}>
											<p className={`${s.text_muted} ${s.mb_0}`}>(098) 765-4321</p>
										</div>
									</div>
									<hr/>
									<div className={s.row}>
										<div className={s.col_sm_3}>
											<p className={s.mb_0}>Address</p>
										</div>
										<div className={s.col_sm_9}>
											<p className={`${s.text_muted} ${s.mb_0}`}>Bay Area, San
												Francisco, CA</p>
										</div>
									</div>
								</div>
							</div>
							<div className={s.row}>
								<div className={s.col_md_6}>
									<div className={`${s.card} ${s.mb_4} ${s.mb_lg_0}`}>
										<div className={s.card_body}>
											<div className={s.row}>
												<div className={s.col_sm_9}>
													<input ref={PostInputElement} type="text"
													       className={s.write_message}
													       placeholder="Type your message here"/>
												</div>
												<div className={s.col_sm_3}>
													<i className={s.icon + " " + s.clickable}
													   onClick="{sendMessage}" aria-hidden="true"></i>
												</div>
											</div>
										</div>
										<div className={s.row}>
											<div className={s.col_sm_9}>
												<input ref={PostInputElement} type="text" className={s.write_message}/>
												<input ref={PostInputElement} type="text" className={s.write_message}/>
												<input ref={PostInputElement} type="text" className={s.write_message}/>
												<input ref={PostInputElement} type="text" className={s.write_message}/>
												<input ref={PostInputElement} type="text" className={s.write_message}/>
												<input ref={PostInputElement} type="text" className={s.write_message}/>
											</div>
										</div>
									</div>
								</div>
								<div className={s.col_md_6}>
									<div className={`${s.card} ${s.mb_4} ${s.mb_lg_0}`}>
										<div className={s.card_body}>
											<div className={s.row}>
												<input ref={PostInputElement} type="text" className={s.write_message}/>
												<input ref={PostInputElement} type="text" className={s.write_message}/>
												<input ref={PostInputElement} type="text" className={s.write_message}/>
												<input ref={PostInputElement} type="text" className={s.write_message}/>
												<input ref={PostInputElement} type="text" className={s.write_message}/>
												<input ref={PostInputElement} type="text" className={s.write_message}/>
												<input ref={PostInputElement} type="text" className={s.write_message}/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</section>
	)
}
export default UserProfile