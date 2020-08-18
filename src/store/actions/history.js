export const saveHistory = (id, domain, moment) => ({
    type: "SAVE_HISTORY",
    payload: { 
        id,
        domain,
        moment
    }
});

export const removeHistoryItem = id => ({
    type: "REMOVE_HISTORY_ITEM",
    payload: { id }
});

export const resetHistory = id => ({
    type: "RESET_HISTORY",
    payload: { id }
});