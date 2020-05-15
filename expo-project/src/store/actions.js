export function saveHistory(history){
    return {
        type: 'ASYNC_SAVE_HISTORY',
        history:history
    }
}
