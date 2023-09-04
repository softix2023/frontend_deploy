 
import { create } from 'apisauce'
// export const mainUrl="https://gpsetickets.com/"
// export const mainUrl="https://localhost:44370/"
// export const mainUrl="http://34.207.252.228:8080/"
// export const mainUrl="https://localhost:44329/"
export const mainUrl="http://54.196.101.223/"

export const ImageUrl=mainUrl+"wwwroot/Uploads/"
// export const ImageUrl=mainUrl1+"wwwroot/Uploads/"
export const api = create({
    baseURL: mainUrl+"api/",
    headers: { Accept: 'application/vnd.github.v3+json' ,'Content-Type':'application/json'},
    timeout:900000
   });
