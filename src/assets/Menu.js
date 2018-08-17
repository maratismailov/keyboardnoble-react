import React from 'react';
import Menu, { SubMenu, MenuItem } from 'rc-menu';

const DictSelectMenu = props => {

  return (
    <Menu
      onClick={props.handleSelect}
      triggerSubMenuAction={'click'}
    >
      <SubMenu title={props.placeholder} key="1" className='rc-menu-main'>
        <SubMenu title='Списки частотности/Русский интернет-корпус' key="5" className='MenuElement'>
          <MenuItem key={require('../dictionary/rui_top100.txt')}>Русский интернет-корпус топ 100 </MenuItem>
          <MenuItem key={require('../dictionary/rui_top200.txt')}>Русский интернет-корпус топ 200</MenuItem>
          <MenuItem key={require('../dictionary/rui_top500.txt')}>Русский интернет-корпус топ 500</MenuItem>
          <MenuItem key={require('../dictionary/rui_top1000.txt')}>Русский интернет-корпус топ 1000</MenuItem>
          <MenuItem key={require('../dictionary/rui_top2000.txt')}>Русский интернет-корпус топ 2000</MenuItem>
          <MenuItem key={require('../dictionary/rui_top5000.txt')}>Русский интернет-корпус топ 5000</MenuItem>
        </SubMenu>
        <SubMenu title='Списки частотности/Национальный корпус русского языка' key="2" className='MenuElement'>
          <MenuItem key={require('../dictionary/rlnc_top100.txt')}>Национальный корпус русского языка топ 100</MenuItem>
          <MenuItem key={require('../dictionary/rlnc_top200.txt')}>Национальный корпус русского языка топ 200</MenuItem>
          <MenuItem key={require('../dictionary/rlnc_top500.txt')}>Национальный корпус русского языка топ 500</MenuItem>
          <MenuItem key={require('../dictionary/rlnc_top1000.txt')}>Национальный корпус русского языка топ 1000</MenuItem>
          <MenuItem key={require('../dictionary/rlnc_top2000.txt')}>Национальный корпус русского языка топ 2000</MenuItem>
          <MenuItem key={require('../dictionary/rlnc_top5000.txt')}>Национальный корпус русского языка топ 5000</MenuItem>
          <MenuItem key={require('../dictionary/rlnc_top10000.txt')}>Национальный корпус русского языка топ 10000</MenuItem>
        </SubMenu>
        <SubMenu title='Frequency lists/Contemporary fiction' key="3" className='MenuElement'>
          <MenuItem key={require('../dictionary/contemp_fiction_top100.txt')}>Contemporary fiction top 100</MenuItem>
          <MenuItem key={require('../dictionary/contemp_fiction_top200.txt')}>Contemporary fiction top 200</MenuItem>
          <MenuItem key={require('../dictionary/contemp_fiction_top300.txt')}>Contemporary fiction top 300</MenuItem>
          <MenuItem key={require('../dictionary/contemp_fiction_top500.txt')}>Contemporary fiction top 500</MenuItem>
          <MenuItem key={require('../dictionary/contemp_fiction_top1000.txt')}>Contemporary fiction top 1000</MenuItem>
          <MenuItem key={require('../dictionary/contemp_fiction_top2000.txt')}>Contemporary fiction top 2000</MenuItem>
        </SubMenu>
        <SubMenu title='Frequency lists/Project Gutenberg' key="4" className='MenuElement'>
          <MenuItem key={require('../dictionary/project_gutenberg_top100.txt')}>Project Gutenberg top 100</MenuItem>
          <MenuItem key={require('../dictionary/project_gutenberg_top1000.txt')}>Project Gutenberg top 1000</MenuItem>
          <MenuItem key={require('../dictionary/project_gutenberg_top2000.txt')}>Project Gutenberg top 2000</MenuItem>
          <MenuItem key={require('../dictionary/project_gutenberg_top5000.txt')}>Project Gutenberg top 5000</MenuItem>
          <MenuItem key={require('../dictionary/project_gutenberg_top10000.txt')}>Project Gutenberg top 10000</MenuItem>
        </SubMenu>
      </SubMenu>
    </Menu>
  )
}

export default DictSelectMenu;