const handleReducer = (asyncCall : any) => {
    return {
        [asyncCall.pending]: (state: any, {payload}: any) => {
            state.loading = true;
            state.error = '';
           return state;
        },
        [asyncCall.fulfilled]: (state: any, {payload}: any) => {
            console.log("fullfilled actions");
           state.loading = false;
           state.error = '';
           return state;
        },
        [asyncCall.rejected]: (state: any, action: any) => {
           state.loading = false;
           state.error = action.error;
           return state;
        }
    }
}

export default handleReducer;