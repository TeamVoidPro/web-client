import axiosClient from "@/plugins/axios.ts";


const uploadFile = async (path:string,file: File) => {
    return await axiosClient.post(path, file, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

export {uploadFile}