import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ExpenseForm from '../../components/expenseForm';
import { addExpense, fetchExpenseById, updateExpenseById } from '../../services';
const AddExpense=(props)=> {

    const params=useParams();
    const [formProcesing,setFormProcessing]=useState(false);
    const [operation,setOperation]=useState("add");
    const [notFound,setNotFound]=useState(false)
    const [expenseData,setExpenseData]=useState({
        title:'',
        amount:'',
        description:'',
        type:'',
        date:''
    });
    const inputHandler=event=>{
        
        setExpenseData({
            ...expenseData,
            [event.target.name]:event.target.value
        })
    };
    /*
    const inputAmountHandler=event=>{
        //console.log(event);
        setAmount(event.target.value)
    }*/
    const submitHandler=(e)=>{
        e.preventDefault();
        setFormProcessing(true);

        if(operation==='edit'){
            updateExpenseById(params.id,expenseData)
            .then(()=>{
                console.log('updated');
                setFormProcessing(false);
            })
            .catch(error=>{
                console.log(error.message);
            })
        }
        else{
            addExpense(expenseData)
            .then(()=>{
                console.log('data saved')
                setExpenseData({
                    title:'',
                    amount:'',
                    description:'',
                    type:'',
                    date:''
                })
                setFormProcessing(false)
            })
            .catch(error=>{
                console.log(error.message);
                setFormProcessing(false);
            })
        }
/*
        setTimeout(() => {
            props.onSubmitHandler(expenseData);
            setExpenseData({
                title:'',
                amount:'',
                description:'',
                type:'',
                date:''
            })
            setFormProcessing(false)
        }, 1000);/*/
        //console.log(expenseData);
       
    };
    useEffect(()=>{
        if(params.operation==='edit'){
            setOperation(params.operation);
            setFormProcessing(true);
            fetchExpenseById(params.id)
            .then(data=>{
                setExpenseData(data);
                setFormProcessing(false)
            })
            .catch(error=>{
                console.log(error.message);
                setNotFound(true)
            });
        }
        
        return()=>{
            setOperation('add');
            setFormProcessing(false);
            setExpenseData({
                title:'',
                amount:'',
                description:'',
                type:'',
                date:''
            });
            setNotFound(true)
        }
    },[params])
    
    return ( 
        <div className='layout-container__wrapper'>
            {formProcesing && <div className='loader-overlay'>
                <div className='load loader-overlay__animation'></div>
            </div>}
            <div className='heading'>
                <h3 >{operation.toUpperCase()} Expense</h3>
            </div>
            <hr />
            <ExpenseForm data={expenseData} 
            inputHandler={inputHandler}
            submitHandler={submitHandler}
            operation={operation}
            />
        </div>
     );
}

export default AddExpense;