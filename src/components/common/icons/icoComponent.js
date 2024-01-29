import home from './assets/home.svg'
import  history from './assets/history.svg'
import logo from './assets/logo.png'
import settings from './assets/settings.svg'
import account_wallet from  './assets/account_wallet.svg'
import schedule from './assets/schedule.svg'
import event from './assets/event.svg'
import savings from './assets/savings.svg'
import profile from "./assets/profile.jpg"
import menu from "./assets/menu.svg"



export const iconsComponent = (name:String)=> {
	switch (name) {
		case "logo":			              return logo;
		case "home":		              	return home	;
		case "account_wallet":          return account_wallet;
		case "history":			            return history;
		case "schedule":                return schedule;
		case "event":                   return  event;
		case "savings ":                return savings;
		case "settings":			          return settings;
		case "profile" :                return profile;
		case "menu":                    return menu;
		
			
			
			
			
			
			
			
			
			
			
			
			
			
			
		default :return undefined
	}
};