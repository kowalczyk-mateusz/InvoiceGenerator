import app from '../firebase'

export const editInvoice = (id, data) => async (dispatch, getState) => {
    const userId = getState().firebase.auth.uid;
    const ref = app.firestore().collection(userId)
    ref
    .doc(id)
    .update(data)
    .catch((error) => {
        console.error(error);
    })

}