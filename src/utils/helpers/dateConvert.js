import moment from "moment";

export const objToTime = (objDate) => {
    return moment(objDate).format("DD-MM-YYYY HH:mm:ss");
};
