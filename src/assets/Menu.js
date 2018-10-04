import React from 'react';
// import Menu, { SubMenu, MenuItem } from 'rc-menu';

const DictSelectMenu = props => {

  return (
    // <div onClick={props.handleSelect}>
    <div >
      <nav>
        <ul>
          <li><a>{props.placeholder}</a>
            {/* <!-- First Tier Drop Down --> */}
            <ul>
              <li><a>Cписки частотности</a>
                <ul>
                  <li><a>Русский интернет-корпус</a>
                    <ul>
                      <li>
                        <a onClick={props.handleSelect}
                          data-file={require('../dictionary/rui_top100.txt')}
                          data-name='Русский интернет-корпус топ 100'
                          data-dictType='words'>
                          РИК топ 100
                        </a>
                      </li>
                      <li>
                        <a onClick={props.handleSelect}
                          data-file={require('../dictionary/rui_top200.txt')}
                          data-name='Русский интернет-корпус топ 200'
                          data-dictType='words'>
                          РИК топ 200
                        </a>
                      </li>
                      <li>
                        <a onClick={props.handleSelect}
                          data-file={require('../dictionary/rui_top500.txt')}
                          data-name='Русский интернет-корпус топ 500'
                          data-dictType='words'>
                          РИК топ 500
                        </a>
                      </li>
                      <li>
                        <a onClick={props.handleSelect}
                          data-file={require('../dictionary/rui_top1000.txt')}
                          data-name='Русский интернет-корпус топ 1000'
                          data-dictType='words'>
                          РИК топ 1000
                        </a>
                      </li>
                      <li>
                        <a onClick={props.handleSelect}
                          data-file={require('../dictionary/rui_top2000.txt')}
                          data-name='Русский интернет-корпус топ 2000'
                          data-dictType='words'>
                          РИК топ 2000
                        </a>
                      </li>
                      <li>
                        <a onClick={props.handleSelect}
                          data-file={require('../dictionary/rui_top5000.txt')}
                          data-name='Русский интернет-корпус топ 5000'
                          data-dictType='words'>
                          РИК топ 5000
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li><a>Национальный корпус русского языка</a>
                    <ul>
                      <li>
                        <a onClick={props.handleSelect}
                          data-file={require('../dictionary/rlnc_top100.txt')}
                          data-name='Национальный корпус русского языка топ 100'
                          data-dictType='words'>
                          НКРЯ топ 100
                        </a>
                      </li>
                      <li>
                        <a onClick={props.handleSelect}
                          data-file={require('../dictionary/rlnc_top200.txt')}
                          data-name='Национальный корпус русского языка топ 200'
                          data-dictType='words'>
                          НКРЯ топ 200
                        </a>
                      </li>
                      <li>
                        <a onClick={props.handleSelect}
                          data-file={require('../dictionary/rlnc_top500.txt')}
                          data-name='Национальный корпус русского языка топ 500'
                          data-dictType='words'>
                          НКРЯ топ 500
                        </a>
                      </li>
                      <li>
                        <a onClick={props.handleSelect}
                          data-file={require('../dictionary/rlnc_top1000.txt')}
                          data-name='Национальный корпус русского языка топ 1000'
                          data-dictType='words'>
                          НКРЯ топ 1000
                        </a>
                      </li>
                      <li>
                        <a onClick={props.handleSelect}
                          data-file={require('../dictionary/rlnc_top2000.txt')}
                          data-name='Национальный корпус русского языка топ 2000'
                          data-dictType='words'>
                          НКРЯ топ 2000
                        </a>
                      </li>
                      <li>
                        <a onClick={props.handleSelect}
                          data-file={require('../dictionary/rlnc_top5000.txt')}
                          data-name='Национальный корпус русского языка топ 5000'
                          data-dictType='words'>
                          НКРЯ топ 5000
                        </a>
                      </li>
                      <li>
                        <a onClick={props.handleSelect}
                          data-file={require('../dictionary/rlnc_top5000.txt')}
                          data-name='Национальный корпус русского языка топ 10000'
                          data-dictType='words'>
                          НКРЯ топ 10000
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li><a>Contemporary fiction</a>
                    <ul>
                      <li>
                        <a onClick={props.handleSelect}
                          data-file={require('../dictionary/contemp_fiction_top100.txt')}
                          data-name='Contemporary fiction top 100'
                          data-dictType='words'>
                          CF top 100
                        </a>
                      </li>
                      <li>
                        <a onClick={props.handleSelect}
                          data-file={require('../dictionary/contemp_fiction_top200.txt')}
                          data-name='Contemporary fiction top 200'
                          data-dictType='words'>
                          CF top 200
                        </a>
                      </li>
                      <li>
                        <a onClick={props.handleSelect}
                          data-file={require('../dictionary/contemp_fiction_top300.txt')}
                          data-name='Contemporary fiction top 300'
                          data-dictType='words'>
                          CF top 300
                        </a>
                      </li>
                      <li>
                        <a onClick={props.handleSelect}
                          data-file={require('../dictionary/contemp_fiction_top500.txt')}
                          data-name='Contemporary fiction top 500'
                          data-dictType='words'>
                          CF top 500
                        </a>
                      </li>
                      <li>
                        <a onClick={props.handleSelect}
                          data-file={require('../dictionary/contemp_fiction_top1000.txt')}
                          data-name='Contemporary fiction top 1000'
                          data-dictType='words'>
                          CF top 1000
                        </a>
                      </li>
                      <li>
                        <a onClick={props.handleSelect}
                          data-file={require('../dictionary/contemp_fiction_top2000.txt')}
                          data-name='Contemporary fiction top 2000'
                          data-dictType='words'>
                          CF top 2000
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li><a>Project Gutenberg</a>
                    <ul>
                      <li>
                        <a onClick={props.handleSelect}
                          data-file={require('../dictionary/project_gutenberg_top100.txt')}
                          data-name='Project Gutenberg top 100'
                          data-dictType='words'>
                          PG top 100
                        </a>
                      </li>
                      <li>
                        <a onClick={props.handleSelect}
                          data-file={require('../dictionary/project_gutenberg_top1000.txt')}
                          data-name='Project Gutenberg top 1000'
                          data-dictType='words'>
                          PG top 1000
                        </a>
                      </li>
                      <li>
                        <a onClick={props.handleSelect}
                          data-file={require('../dictionary/project_gutenberg_top2000.txt')}
                          data-name='Project Gutenberg top 2000'
                          data-dictType='words'>
                          PG top 2000
                        </a>
                      </li>
                      <li>
                        <a onClick={props.handleSelect}
                          data-file={require('../dictionary/project_gutenberg_top5000.txt')}
                          data-name='Project Gutenberg top 5000'
                          data-dictType='words'>
                          PG top 5000
                        </a>
                      </li>
                      <li>
                        <a onClick={props.handleSelect}
                          data-file={require('../dictionary/project_gutenberg_top2000.txt')}
                          data-name='Project Gutenberg top 10000'
                          data-dictType='words'>
                          PG top 10000
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="#">Клавогонки</a>
                <ul>
                <li>
                    <a onClick={props.handleSelect}
                      data-file={require('../dictionary/text_rus_high_brutto.txt')}
                      data-name='Тексты с высоким брутто'
                      data-dictType='text'
                      >
                      Тексты с высоким брутто
                    </a>
                  </li>
                  <li>
                    <a onClick={props.handleSelect}
                      data-file={require('../dictionary/text_rus_adv_record.txt')}
                      data-name='Обычный рекордный'
                      data-dictType='text'>
                      Обычный рекордный
                    </a>
                  </li>
                  <li>
                    <a onClick={props.handleSelect}
                      data-file={require('../dictionary/text_rus_bombotext.txt')}
                      data-name='Бомботексты'
                      data-dictType='text'>
                      Бомботексты
                    </a>
                  </li>
                  <li>
                    <a onClick={props.handleSelect}
                      data-file={require('../dictionary/text_rus_cybertext.txt')}
                      data-name='Кибертекст'
                      data-dictType='text'>
                      Кибертекст
                    </a>
                  </li>
                  <li>
                    <a onClick={props.handleSelect}
                      data-file={require('../dictionary/rus_begin_littlefinger.txt')}
                      data-name='Русский мизинцы'
                      data-dictType='words'>
                      Русский мизинцы
                    </a>
                  </li>
                  <li>
                    <a onClick={props.handleSelect}
                      data-file={require('../dictionary/rus_begin_sync.txt')}
                      data-name='Русский синхронизация'
                      data-dictType='words'>
                      Русский синхронизация
                    </a>
                  </li>
                  <li>
                    <a onClick={props.handleSelect}
                      data-file={require('../dictionary/text_eng_adv_kg.txt')}
                      data-name='Обычный английский'
                      data-dictType='text'>
                      Обычный английский
                    </a>
                  </li>
                </ul>
              </li>
              <li><a href="#">Tutorials</a></li>
            </ul>
          </li>
        </ul>
      </nav>
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

export default DictSelectMenu;