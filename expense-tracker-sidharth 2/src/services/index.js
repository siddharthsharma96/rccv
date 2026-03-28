export const fetchExpenses= async()=>{
    const response =await fetch("https://expense-tracker-6d0dd-default-rtdb.firebaseio.com/expense-tracker.json")
        
    const data=await response.json();

    if(!response.ok){
        throw new Error('something went wrong')
    }

    let transFormData=[];
            for(const key in data){
                transFormData.push({
                    ...data[key],
                    id:key,
                    date:new Date(data[key]['date'])
                })
            }
            console.log(data)
    
    return transFormData
}

export const deleteExpense= async(id) => {
    const response =await fetch(`https://expense-tracker-6d0dd-default-rtdb.firebaseio.com/expense-tracker/${id}.json`,{
        method:'Delete'
    })
        
    const data=await response.json();
    if(response.ok){
        return true;
    
    }
    throw new Error('something went wrong')
}

export const addExpense= async(payload) => {
    const response =await fetch(`https://expense-tracker-6d0dd-default-rtdb.firebaseio.com/expense-tracker.json`,{
        method:'Post',
        body:JSON.stringify(payload)
    })
        
    const data=await response.json();
    if(response.ok){
        return true;
    
    }
    throw new Error('something went wrong')
}

export const fetchExpenseById=async(id)=>{
    const response =await fetch(`https://expense-tracker-6d0dd-default-rtdb.firebaseio.com/expense-tracker/${id}.json`)
        
    const data=await response.json();

    if(!response.ok || !data){
        throw new Error('something went wrong')
    }
    return{
        ...data,
        id
    };
}

export const updateExpenseById=async(id,payload)=>{
    const response =await fetch(`https://expense-tracker-6d0dd-default-rtdb.firebaseio.com/expense-tracker/${id}.json`,{
        method:'Put',
        body:JSON.stringify(payload)
    })
        
    const data=await response.json();
    if(response.ok){
        return true;
    
    }
    throw new Error('something went wrong')
}