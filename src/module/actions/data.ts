import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../config/HttpRequest";
import { toast } from 'react-toastify';
import { useEffect, useState } from "react";



export const postData = createAsyncThunk("email/send", async (data:any) => {
    try {
        const response = await API.post(`/email`,data)
        toast.success("added successfuly")
        return response;
    } catch (e:any) {
        console.log(e)
        if (e.response && e.response.data) {
            return toast.error(e.response.data.error);
        }
    }
})