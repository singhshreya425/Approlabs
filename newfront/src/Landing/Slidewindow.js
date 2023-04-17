import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


const Slidewindow = () => {
    let data = [
        {
            Catagory : 'General',
            date : ['APP' , "E-Commerce" , "Analytic" , "Banking" , "Booking"]
        },
        {
            Catagory : 'Management',
            date : ['User' , "E-Commerce" , "Invoice" , "Blog"]
        },
        {
            Catagory : 'Apps',
            date : ['Mail' , "Chart" , "Calendar" , "Kanban" ]
        }
    ]
  return (
    <div>
        <Sidebar>
  <Menu>
 {data.map(({ Catagory ,  date})=>  
 <div> <SubMenu label={Catagory}>
      {date.map((e)=>  
      <MenuItem> {e} </MenuItem> )}
    </SubMenu>
    </div>)}
  </Menu>
</Sidebar>;
    </div>
  )
}

export default Slidewindow
