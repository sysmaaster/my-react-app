/**
 * Повернтає список користувачів по запиту
 * з msg.reqes
 * приклад запиту `/users?page=1&count=10`
 * сторінка (page:'1')
 * показувати по (count:'10') елементів
 *
 console.log(usersList(msg)); */
const usersList = ( msg ) => {
	let err = { is: false, const: '' } // ініціалізуємо строку помилок
	let pageNum = 1;
	let count = 10;
	let num, Num;
	if ( typeof msg.reqes.count === 'string' ) {   // нам прийшов параметр?так - ідемо далі
		num = Number( msg.reqes.count );           // конвертує рядок в число
		if ( isNaN( num ) || num === 0 ) {           //ми отримали число?да - пропустим крок
			count = 10
			err = { is: true, const: 'count:Type_No_Number' }//нам прийшла не цифра
		} else {
			count = num
		}// все добре йдемо далі
	} else {
		count = 10
		err = { is: true, const: 'count:undefined' } // не прийшов параметр
	}
	if ( typeof msg.reqes.page === 'string' ) {   // нам прийшов параметр?так - ідемо далі
		Num = Number( msg.reqes.page );           // конвертує рядок в число
		if ( isNaN( Num ) || Num === 0 ) {          //ми отримали число?да - пропустим крок
			pageNum = 1
			err = { is: true, const: 'pageNum:Type_No_Number' }//нам прийшла не цифра
		} else {
			pageNum = Num
		} // все добре йдем далі
	} else {
		pageNum = 1
		err = { is: true, const: 'pageNum:undefined' }          // не прийшов параметр
	}
	let totalCount = msg.store.usersPage.users.length;  //загальна кількість елементів
	let Pages = Math.ceil( totalCount / count );    // кількість наявних сторінок
	if ( pageNum > Pages ) {
		pageNum = Pages
	}  // параметр запиту не є більший за доступну?
	if ( count >= 10 ) {
		count = 10
	}         // обмежуємо максимальну кількість виводу компонентів
	let endPoints = ( count ) * pageNum;      //рахуємо кінцеву точку в масиві
	let startPoints = endPoints - count;    // рахуємо початкову точку

//повернумо кількість slice(від / по) з масиву користувачів
	msg.payload = { item: msg.store.usersPage.users.slice( startPoints, endPoints ), totalCount, onErrors: err }
	return msg;
}

/**
 * Повертає інформацію про користувача
 * по запиту "GET" /profile/{ id }
 * console.log(getUserOnId(msg));   */
const getUserOnId = ( msg ) => {
	let err = { is: false, const: '' }// ініціалізуємо строку помилок
	let num
	let item = {}
	if ( typeof msg.req_params_id === 'string' ) {// нам прийшов параметр?так - ідемо далі
		num = Number( msg.req_params_id ); // конвертує рядок в число
		if ( isNaN( num ) || num === 0 ) { //ми отримали число?да - пропустим крок
			err = { is: true, const: 'id:Type_No_Number' }//нам прийшла не цифра
		} else {
			if ( num > msg.store.usersPage.users.length ) { // перевірка що запит не максимальної кількості users
				err = { is: true, const: 'id:noResult' }//  запит перевищує кількість users
			} else {
				// eslint-disable-next-line array-callback-return
				item = msg.store.usersPage.users.map( i => {
						if ( i.id === num ) {     // знайшли то повертаємо користувача
							return i
						}
					}
				)
			}
		}
	} else {// не прийшов параметр
		err = { is: true, const: 'id:undefined' }// формую помилку та шаблон для відповіді
	}
	msg.payload = { onErr: err, items: { ...item } }
	return msg;
}

/** < =  тестування = > */
//console.log(usersList(msg));
//console.log(getUserOnId(msg));


/**  < = Masonry = > */
let msg = {
	req_method: "GET",          // визначення Методу GET/POST/PUT/..
	req_url: "/profile/44",     // для провірки який url визваний передати відповідній Функції
	req_params_id: "1",         // "GET" запит  сторінки користувача по id :/profile/{ id }
}   // Props
msg.reqes = {
	page: '2', // Параметр номеру Сторінки
	count: '5'// Параметр кількоста елементів для показу
}        //  для Функції usersList Повертає список користувачів по запиту
msg.payload = {
	err: { is: false, const: '' },
}              // Статичні дані (стандартні)
msg.store = {
	usersPage: {
		users: [
			
			{
				id: 1,
				name: 'SysMaaster',
				sex: 'male',
				followed: true,
				status: 'Im a BOSS !!',
				locations: { country: 'Ukraine', city: 'Київ' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 2,
				name: 'Таращук Анастасія Андріївна ',
				sex: 'female',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Одесса' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 3,
				name: 'Крамарчук Анатолій Іванович ',
				sex: 'male',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Днепр' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 4,
				name: 'Шевчук Олександра Анатоліївна ',
				sex: 'female',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Донецк' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 5,
				name: 'Кравчук Микола Євгенійович ',
				sex: 'male',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Запорожье' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 6,
				name: 'Романович Василенко Валерій ',
				sex: 'female',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Львов' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 7,
				name: 'Іванченко Тетяна Сергіївна ',
				sex: 'female',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Кривой Рог' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 8,
				name: 'Боднаренко Леонід Євгенович ',
				sex: 'male',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Николаев' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 9,
				name: 'Сергієнко Тетяна Олександрівна ',
				sex: 'female',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Севастополь' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 10,
				name: 'Захарчук Владислав Тарасович ',
				sex: 'male',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Мариуполь' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 11,
				name: 'Іванович Романченко Валерій ',
				sex: 'male',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Луганск' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 12,
				name: 'Мельниченко Анатолій Янович ',
				sex: 'male',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Винница' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 13,
				name: 'Романченко Вікторія Анатоліївна ',
				sex: 'female',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Симферополь' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 14,
				name: 'Олександрівна Мельниченко Людмила ',
				sex: 'female',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Макеевка' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 15,
				name: 'Михайлівна Іванченко Ярослава ',
				sex: 'female',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Херсон' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 16,
				name: 'Васильович Сергієнко Георгій ',
				sex: 'male',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Чернигов' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 17,
				name: 'Михайлівна Броварчук Єлизавета ',
				sex: 'male',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Полтава' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 18,
				name: 'Павлюк Алла Миколаївна ',
				sex: 'female',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Черкассы' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 19,
				name: 'Миколайович Броварчук Анатолій ',
				sex: 'female',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Хмельницкий' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 20,
				name: 'Йосипович Васильєв Володимир ',
				sex: 'female',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Черновцы' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 21,
				name: 'Миколаївна Пономаренко Олександра ',
				sex: 'male',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Житомир' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 22,
				name: 'Броваренко Віра Василівна ',
				sex: 'female',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Сумы' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 23,
				name: 'Йосипович Броварчук Володимир ',
				sex: 'male',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Ровно' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 24,
				name: 'Броваренко Галина Іванівна ',
				sex: 'female',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Горловка' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 25,
				name: 'Федорівна Шевченко Раїса ',
				sex: 'male',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Ивано-Франковск' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 26,
				name: 'Лисенко Валентина Іванівна ',
				sex: 'female',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Каменское' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 27,
				name: 'Романівна Броваренко Вікторія ',
				sex: 'male',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Кропивницкий' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 28,
				name: 'Броварчук Йосип Васильович ',
				sex: 'male',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Тернополь' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 29,
				name: 'Мірошниченко Віталій Янович ',
				sex: 'male',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Кременчуг' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 30,
				name: 'Євгенійович Гнатюк Вадим ',
				sex: 'male',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Луцк' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 31,
				name: 'Сергієнко Ілля Євгенович ',
				sex: 'male',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Белая Церковь' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 32,
				name: 'Середа Ольга Євгеніївна ',
				sex: 'female',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Краматорск' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 33,
				name: 'Іванченко Даря Федорівна ',
				sex: 'female',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Мелитополь' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 34,
				name: 'Лисенко Вікторія Валентинівна ',
				sex: 'female',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Керчь' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 35,
				name: 'Пономаренко Анатолій Євгенович ',
				sex: 'male',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Ужгород' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 36,
				name: 'Романченко Борис Володимирович ',
				sex: 'male',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Бердянск' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 37,
				name: 'Середа Борис Євгенійович ',
				sex: 'male',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Никополь' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 38,
				name: 'Василенко Людмила Іванівна ',
				sex: 'female',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Славянск' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 39,
				name: 'Василенко Наташа Сергіївна ',
				sex: 'female',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Евпатория' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 40,
				name: 'Гнатюк Катерина Євгеніївна ',
				sex: 'female',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: 'Бровары' },
				photoUrl: { small: null, large: null }
			},
			{
				id: 41,
				name: 'Jcnfyz Vfhsq',
				sex: 'female',
				followed: false,
				status: '',
				locations: { country: 'Ukraine', city: ',jkjnj' },
				photoUrl: { small: null, large: null }
			}
		
		]
	}
}               //База з даними


