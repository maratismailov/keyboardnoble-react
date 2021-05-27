import React from 'react'
import '../Menu.css'
// import Menu, { SubMenu, MenuItem } from 'rc-menu';

const DictSelectMenu = props => {
	return (
		// <div onClick={props.handleSelect}>
		<div className='menu'>
			<details>
				<summary ВОТ ЗДЕЗЬ className='m-lvl-1'>
					{props.placeholder}
				</summary>
				<details>
					<summary className='m-lvl-2'>
						Cписки частотности/Frequency lists
					</summary>
					<details>
						<summary className='m-lvl-3'>Русский интернет-корпус</summary>
						<a
							onClick={props.handleSelect}
							data-file={require('../dictionary/rui_top100.txt')}
							data-name='Русский интернет-корпус топ 100'
							data-dictType='words'
							data-language='ru'
							className='m-lvl-4'
						>
							РИК топ 100
						</a>
						<a
							onClick={props.handleSelect}
							data-file={require('../dictionary/rui_top200.txt')}
							data-name='Русский интернет-корпус топ 200'
							data-dictType='words'
							data-language='ru'
						>
							РИК топ 200
						</a>
						<a
							onClick={props.handleSelect}
							data-file={require('../dictionary/rui_top500.txt')}
							data-name='Русский интернет-корпус топ 500'
							data-dictType='words'
							data-language='ru'
						>
							РИК топ 500
						</a>
						<a
							onClick={props.handleSelect}
							data-file={require('../dictionary/rui_top1000.txt')}
							data-name='Русский интернет-корпус топ 1000'
							data-dictType='words'
							data-language='ru'
						>
							РИК топ 1000
						</a>
						<a
							onClick={props.handleSelect}
							data-file={require('../dictionary/rui_top2000.txt')}
							data-name='Русский интернет-корпус топ 2000'
							data-dictType='words'
							data-language='ru'
						>
							РИК топ 2000
						</a>
						<a
							onClick={props.handleSelect}
							data-file={require('../dictionary/rui_top5000.txt')}
							data-name='Русский интернет-корпус топ 5000'
							data-dictType='words'
							data-language='ru'
						>
							РИК топ 5000
						</a>
					</details>
					<details>
						<summary className='m-lvl-3'>
							Национальный корпус русского языка
						</summary>
						<a
							onClick={props.handleSelect}
							data-file={require('../dictionary/rlnc_top100.txt')}
							data-name='Национальный корпус русского языка топ 100'
							data-dictType='words'
							data-language='ru'
							className='m-lvl-4'
						>
							НКРЯ топ 100
						</a>
						<a
							onClick={props.handleSelect}
							data-file={require('../dictionary/rlnc_top200.txt')}
							data-name='Национальный корпус русского языка топ 200'
							data-dictType='words'
							data-language='ru'
						>
							НКРЯ топ 200
						</a>

						<a
							onClick={props.handleSelect}
							data-file={require('../dictionary/rlnc_top500.txt')}
							data-name='Национальный корпус русского языка топ 500'
							data-dictType='words'
							data-language='ru'
						>
							НКРЯ топ 500
						</a>

						<a
							onClick={props.handleSelect}
							data-file={require('../dictionary/rlnc_top1000.txt')}
							data-name='Национальный корпус русского языка топ 1000'
							data-dictType='words'
							data-language='ru'
						>
							НКРЯ топ 1000
						</a>
						<a
							onClick={props.handleSelect}
							data-file={require('../dictionary/rlnc_top2000.txt')}
							data-name='Национальный корпус русского языка топ 2000'
							data-dictType='words'
							data-language='ru'
						>
							НКРЯ топ 2000
						</a>
						<a
							onClick={props.handleSelect}
							data-file={require('../dictionary/rlnc_top5000.txt')}
							data-name='Национальный корпус русского языка топ 5000'
							data-dictType='words'
							data-language='ru'
						>
							НКРЯ топ 5000
						</a>
						<a
							onClick={props.handleSelect}
							data-file={require('../dictionary/rlnc_top5000.txt')}
							data-name='Национальный корпус русского языка топ 10000'
							data-dictType='words'
							data-language='ru'
						>
							НКРЯ топ 10000
						</a>
					</details>
					<details>
						<summary className='m-lvl-3'>Contemporary fiction</summary>

						<a
							onClick={props.handleSelect}
							data-file={require('../dictionary/contemp_fiction_top100.txt')}
							data-name='Contemporary fiction top 100'
							data-dictType='words'
							data-language='en'
							className='m-lvl-4'
						>
							CF top 100
						</a>
						<a
							onClick={props.handleSelect}
							data-file={require('../dictionary/contemp_fiction_top200.txt')}
							data-name='Contemporary fiction top 200'
							data-dictType='words'
							data-language='en'
						>
							CF top 200
						</a>
						<a
							onClick={props.handleSelect}
							data-file={require('../dictionary/contemp_fiction_top300.txt')}
							data-name='Contemporary fiction top 300'
							data-dictType='words'
							data-language='en'
						>
							CF top 300
						</a>
						<a
							onClick={props.handleSelect}
							data-file={require('../dictionary/contemp_fiction_top500.txt')}
							data-name='Contemporary fiction top 500'
							data-dictType='words'
							data-language='en'
						>
							CF top 500
						</a>
						<a
							onClick={props.handleSelect}
							data-file={require('../dictionary/contemp_fiction_top1000.txt')}
							data-name='Contemporary fiction top 1000'
							data-dictType='words'
							data-language='en'
						>
							CF top 1000
						</a>
						<a
							onClick={props.handleSelect}
							data-file={require('../dictionary/contemp_fiction_top2000.txt')}
							data-name='Contemporary fiction top 2000'
							data-dictType='words'
							data-language='en'
						>
							CF top 2000
						</a>
					</details>
					<details>
						<summary className='m-lvl-3'>Project Gutenberg</summary>

						<a
							onClick={props.handleSelect}
							data-file={require('../dictionary/project_gutenberg_top100.txt')}
							data-name='Project Gutenberg top 100'
							data-dictType='words'
							data-language='en'
							className='m-lvl-4'
						>
							PG top 100
						</a>

						<a
							onClick={props.handleSelect}
							data-file={require('../dictionary/project_gutenberg_top1000.txt')}
							data-name='Project Gutenberg top 1000'
							data-dictType='words'
							data-language='en'
						>
							PG top 1000
						</a>

						<a
							onClick={props.handleSelect}
							data-file={require('../dictionary/project_gutenberg_top2000.txt')}
							data-name='Project Gutenberg top 2000'
							data-dictType='words'
							data-language='en'
						>
							PG top 2000
						</a>

						<a
							onClick={props.handleSelect}
							data-file={require('../dictionary/project_gutenberg_top5000.txt')}
							data-name='Project Gutenberg top 5000'
							data-dictType='words'
							data-language='en'
						>
							PG top 5000
						</a>

						<a
							onClick={props.handleSelect}
							data-file={require('../dictionary/project_gutenberg_top2000.txt')}
							data-name='Project Gutenberg top 10000'
							data-dictType='words'
							data-language='en'
						>
							PG top 10000
						</a>
					</details>
				</details>
				<details>
					<summary className='m-lvl-2'>Клавогонки</summary>

					<a
						onClick={props.handleSelect}
						data-file={require('../dictionary/text_rus_high_brutto.txt')}
						data-name='Тексты с высоким брутто'
						data-dictType='text'
						data-language='ru'
						className='m-lvl-4'
					>
						Тексты с высоким брутто
					</a>

					<a
						onClick={props.handleSelect}
						data-file={require('../dictionary/text_rus_adv_record.txt')}
						data-name='Обычный рекордный'
						data-dictType='text'
						data-language='ru'
					>
						Обычный рекордный
					</a>

					<a
						onClick={props.handleSelect}
						data-file={require('../dictionary/text_rus_bombotext.txt')}
						data-name='Бомботексты'
						data-dictType='text'
						data-language='ru'
					>
						Бомботексты
					</a>

					<a
						onClick={props.handleSelect}
						data-file={require('../dictionary/text_rus_cybertext.txt')}
						data-name='Кибертекст'
						data-dictType='text'
						data-language='ru'
					>
						Кибертекст
					</a>

					<a
						onClick={props.handleSelect}
						data-file={require('../dictionary/rus_begin_littlefinger.txt')}
						data-name='Русский мизинцы'
						data-dictType='words'
						data-language='ru'
					>
						Русский мизинцы
					</a>

					<a
						onClick={props.handleSelect}
						data-file={require('../dictionary/rus_begin_sync.txt')}
						data-name='Русский синхронизация'
						data-dictType='words'
						data-language='ru'
					>
						Русский синхронизация
					</a>

					<a
						onClick={props.handleSelect}
						data-file={require('../dictionary/text_eng_adv_kg.txt')}
						data-name='Обычный английский'
						data-dictType='text'
						data-language='en'
					>
						Обычный английский
					</a>

					<a
						onClick={props.handleSelect}
						data-file={require('../dictionary/text_eng_short_kg.txt')}
						data-name='Короткий английский'
						data-dictType='text'
						data-language='en'
					>
						Короткий английский
					</a>
				</details>
			</details>
		</div>
		// </div>
	)
}

// <li>
//   <a onClick={props.handleSelect}
//     data-file={require('../dictionary/rui_top100.txt')}
//     data-name='Русский интернет-корпус топ 100'>
//     Русский интернет-корпус топ 100
//     </a>
// </li>

export default DictSelectMenu
