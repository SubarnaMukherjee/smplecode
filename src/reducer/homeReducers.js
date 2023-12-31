const initialData ={
    list:[]
}

const todoReducers = (state =initialData, action) =>{

    switch(action.type){
        case "ADD_TASK":
         const {id, task, descriptions} = action.payload;
         return{
            ...state,
            list:[
                ...state.list,
                {
                    id:id,
                    task :task,
                    descriptions:descriptions
                }
            ]
         }

         case "DELETE_TASK":
            const newList = state.list.filter((elem) =>
            elem.id != action.id )
            return{
                ...state,
                list: newList
            }
            default : return state;
    }
}
export default todoReducers;