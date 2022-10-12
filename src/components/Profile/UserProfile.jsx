import React from "react";
import s from './Profile.module.css'
import './ss.css'
import { NavLink } from "react-router-dom";
import { SendPost } from "../../redux/profile-reducer";
import avatarM from "../img/ava_m.svg";
import avatarR from "../img/ava_r.svg";

const UserProfile = ( props ) => {//mb-4  mb-1 mb-2 ms-1  {`${s.} ${s.}`}  d-flex           }
	let PostInputElement = React.createRef();
	
	window.prp = props;
	return (
		<section className={s.pb_4} style={{ maxWidth: "85%", margin: "auto" }}>
			<div className={`${s.bg_white} ${s.border} ${s.rounded_5}`}>
				<section className={s.p_4} style={{ backgroundColor: "#eee", borderRadius: ".5rem .5rem 0 0" }}>
					<div className={s.row}>
						<div className={s.col_lg_4}>
							<div className={`${s.card} ${s.mb_4}`}>
								<div className={`${s.card_body} ${s.text_center}`}>
									<img alt="avatar"
									     className={`${s.rounded_circle} ${s.img_fluid}`} style={{ width: "150px" }}
									     src={props.profiles.photoUrl.large != null
										     ? props.profiles.photoUrl.large
										     : props.profiles.photoUrl.small != null
											     ? props.profiles.photoUrl.small
											     : props.profiles.sex === "male"
												     ? avatarM : avatarR}/>
									<h5 className={s.my_3}>{props.profiles.name}</h5>
									<p className={`${s.text_muted} ${s.mb_1}`}>{props.profiles.aboutMe}</p>
									<p className={`${s.text_muted} ${s.mb_4}`}>{props.profiles.locations.city} || {props.profiles.locations.country} </p>
									<div className={`${s.d_flex} ${s.justify_content_center} ${s.mb_2}`}>
										<button type="button"
										        onClick={props.profiles.followed ? () => props.UnFollow( props.profiles.id )
											        : () => props.Follow( props.profiles.id )}
										        className={`${s.btn} ${s.btn_primary} ${props.profiles.followed ? s.unFollow : s.follow}`}>
											{props.profiles.followed ? 'Відписатися' : 'Слідкувати'}
										</button>
										
										<NavLink type="button" to={`/chat/${props.profiles.id}`}
										         className={`${s.btn} ${s.btn_outline_primary} ${s.ms_1}`}>
											Повідомлення
										</NavLink>
									</div>
								</div>
							</div>
							<div className={`${s.card} ${s.mb_4} ${s.mb_lg_0}`}>
								<div className={`${s.card_body} ${s.p_0}`}>
									<ul className={`${s.list_group} ${s.list_group_flush} ${s.rounded_3}`}>
										<li className={`${s.list_group_item} ${s.d_flex} ${s.justify_content_between} ${s.align_items_center} ${s.p_3}`}>
											<i className={`${s.fas} ${s.fa_globe} ${s.fa_lg} ${s.text_warning}`}></i>
											<p className={s.mb_0}>{props.profiles.contact.mainLink}</p>
										</li>
										<li className={`${s.list_group_item} ${s.d_flex} ${s.justify_content_between} ${s.align_items_center} ${s.p_3}`}>
											<i className="fab fa-github fa-lg" style={{ color: "#333333" }}></i>
											<p className={s.mb_0}>{props.profiles.contact.website} nullk</p>
										</li>
										<li className={`${s.list_group_item} ${s.d_flex} ${s.justify_content_between} ${s.align_items_center} ${s.p_3}`}>
											<i className="fab fa-twitter fa-lg" style={{ color: "#55acee" }}></i>
											<p className={s.mb_0}>@uuuu</p>
										</li>
										<li className={`${s.list_group_item} ${s.d_flex} ${s.justify_content_between} ${s.align_items_center} ${s.p_3}`}>
											<i className="fab fa-instagram fa-lg" style={{ color: "#ac2bac" }}></i>
											<p className={s.mb_0}>8888</p>
										</li>
										<li className={`${s.list_group_item} ${s.d_flex} ${s.justify_content_between} ${s.align_items_center} ${s.p_3}`}>
											<i className="fab fa-facebook-f fa-lg" style={{ color: "#3b5998" }}></i>
											<p className={s.mb_0}>888888888</p>
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
													   onClick={SendPost} aria-hidden="true"></i>
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