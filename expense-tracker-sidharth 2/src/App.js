import { useState } from 'react';
import './styles/index.css';
import SidebarComponent from './components/SideBar/';
import Expenses from './pages/Expenses';
import { sideBarList } from './config/constants';
import AddExpense from './pages/Expenses/addExpense';
import { Switch, Route} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Analytics from './pages/Expenses/analytics';
import PageNotFound from './pages/Expenses/pageNotFound';
const App=()=> {
 

const addExpensesSubmitHandler=payload=>{
  console.log(payload);
}

  return (
    
    <div className="flexbox">
      <SidebarComponent
      
      sideBarList={sideBarList} 
      />
      <div className='layout-container'>
        {/*activeItem===0 && <Expenses />}
        {activeItem===1 && <AddExpense onSubmitHandler={addExpensesSubmitHandler}/>}
        {activeItem===2 && 'analytics'*/}
        
        <Switch>
          <Redirect to={'/'} from={'/dashboard'} />
          <Route path={'/'}  exact><Expenses /></Route>
          <Route path={"/:operation(add)"} exact><AddExpense /></Route>
          <Route path={"/:operation(edit)/:id"} exact><AddExpense /></Route>
          <Route path={"/analytics"} exact> <Analytics /> </Route>
          <Route path={'*'}><PageNotFound /> </Route>
        </Switch>
    
        
      </div>
    </div>
  );
}

export default App;
