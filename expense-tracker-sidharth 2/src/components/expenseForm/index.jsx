import React, { Component } from 'react';
import { useEffect } from 'react';
const ExpenseForm=({data,inputHandler,submitHandler,operation})=> {
    useEffect(()=>{
        //console.log('inside a useeffect');
        const identifier=setTimeout(()=>{
            if(data.title.length>5){
                console.log('corect time to stop');
            }
        },500);
        return ()=>{
            clearTimeout(identifier);
        }
    },[data.title]);
    //console.log('outuside hook but inside comp');
    
    return ( 
        <form autoComplete='off' onSubmit={submitHandler}>
                <div className='form-wrap'>
                    <label htmlFor='title'>Title</label>
                    <input 
                    className='form-input' 
                    type="text" 
                    placeholder='Enter Title' 
                    name='title'
                    onChange={inputHandler}
                    value={data.title} required />
                </div>
                <div className='form-wrap'>
                    <label htmlFor='description'>Description</label>
                    <textarea 
                    className='form-textarea' 
                    type="text" 
                    placeholder='Enter description' 
                    name='description'
                    onChange={inputHandler}
                    value={data.description} required />
                </div>
                <div className='form-wrap'>
                    <label htmlFor='amount'>Amount</label>
                    <input 
                    className='form-input' 
                    type="number" 
                    placeholder='Enter Amount' 
                    name='amount'
                    min='0'
                    onChange={inputHandler}
                    value={data.amount} required />
                </div>
                <div className="flexbox">
                <div className="form-wrap flexbox-child__fb50 pr-5">
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        className="form-input"
                        name="date"
                        placeholder="Enter date"
                        onChange={inputHandler}
                        value={data.date}
                    />
                </div>
                <div className="form-wrap flexbox-child__fb50 pl-5">
                    <label htmlFor="type">Select Type</label>
                    <select
                        className="form-select"
                        name="type"
                        required
                        onChange={inputHandler}
                        value={data.type}
                    >
                        <option value="">Select type</option>
                        <option value="1">Credit</option>
                        <option value="2">Debit</option>
                    </select>
                </div>
                
            </div>
            <div className='flexbox flexbox-reverse'>
                    <button className='btn' type='submit'>
                        <span>{operation.toUpperCase()} Expense</span>
                    </button>
                    {
                        operation !=='edit' &&
                        <button className='btn mr-5' type='reset'>
                        <span>Clear</span>
                    </button>
                    }
                    
                </div>
            </form>
     );
}

export default ExpenseForm;