
import hClient from '../../httpClient/httpClient.js'

const state={
    amend:[]
}

const mutations={
    refresh(){
/*        Oupdate(obj){
           // this.$router.push({path:'/updateproduct'});
           console.log(obj);
           this.$store.dispatch('refresh');
        }*/
        
    }
}


const actions={
    refresh(context){
        context.commit('refresh')
    }   
}

export default{
    state,
    mutations,
    actions
}

// import hClient from '../../httpClient/httpClient.js'
// const state={
//     project:[]
// }
// const mutations={
//     refresh(){
//          let params = $('#search').val();
//          hClient.get('http://localhost:8080/Serch_product',{params}).then((res)=>{
//                     console.log(res);
//                     // console.log(this.data)
//                     // this.dataset=res.data.data;
//                     /*this.config.api="http://localhost:8080/Serch_product"*/
//                     this.project = res.data.data;
//                     console.log(this.data)
//                 })
//     }
// }
// const actions={
//     refresh(context){
//         context.commit('refresh')
//     }
// }
// export default{
// state,
// mutations,
// actions
// }